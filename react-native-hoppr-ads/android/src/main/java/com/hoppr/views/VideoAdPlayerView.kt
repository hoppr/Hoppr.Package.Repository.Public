package com.hoppr.views

import android.annotation.SuppressLint
import android.content.Context
import android.graphics.Color
import android.media.MediaCodecList
import android.net.Uri
import android.util.Log
import android.view.KeyEvent
import android.view.View
import android.widget.FrameLayout
import com.facebook.react.bridge.ReactApplicationContext
import com.google.ads.interactivemedia.v3.api.AdEvent
import com.google.ads.interactivemedia.v3.api.ImaSdkFactory
import com.google.ads.interactivemedia.v3.api.ImaSdkSettings
import com.google.android.exoplayer2.*
import com.google.android.exoplayer2.analytics.AnalyticsListener
import com.google.android.exoplayer2.audio.AudioAttributes
import com.google.android.exoplayer2.ext.ima.ImaAdsLoader
import com.google.android.exoplayer2.source.DefaultMediaSourceFactory
import com.google.android.exoplayer2.source.MediaSource
import com.google.android.exoplayer2.source.ProgressiveMediaSource
import com.google.android.exoplayer2.source.SilenceMediaSource
import com.google.android.exoplayer2.source.ads.AdsMediaSource
import com.google.android.exoplayer2.ui.AdViewProvider
import com.google.android.exoplayer2.ui.AspectRatioFrameLayout
import com.google.android.exoplayer2.ui.StyledPlayerView
import com.google.android.exoplayer2.upstream.DataSpec
import com.google.android.exoplayer2.upstream.DefaultAllocator
import com.google.android.exoplayer2.upstream.DefaultDataSource
import com.hoppr.extensions.*
import com.hoppr.mediacodec.CustomMediaCodecSelector
import com.hoppr.viewManagers.NativeHopprVideoViewManager
import java.util.*
import kotlin.collections.ArrayList

@SuppressLint("ViewConstructor")
class VideoAdPlayerView(
  context: Context,
  private val nativeHopprVideoViewManager: NativeHopprVideoViewManager
) :
  FrameLayout(context) {
  private var exoPlayer: ExoPlayer? = null
  private var adsLoader: ImaAdsLoader? = null
  private var playerView: StyledPlayerView? = null
  private var reactContext: ReactApplicationContext? = null
  private var currentFocus: View? = null


  override fun dispatchKeyEvent(event: KeyEvent): Boolean {
    reactContext?.sendLogEvent("dispatchKeyEvent", id)

    if (event.isPlayKeyDown()) {
      adsLoader?.skipAd()
    } else if (event.isPowerKeyDown() || event.isPowerKeyUp()) {
      nativeHopprVideoViewManager.releasePlayer()
    }

    return true
//    return super.dispatchKeyEvent(event)
  }

  fun init(
    reactContext: ReactApplicationContext,
    scaleMode: String?,
    ppid: String?,
    useSoftwareDecoder: Boolean?,
    adTag: String
  ) {
    this.reactContext = reactContext
    reactContext.sendLogEvent("init", id)

    playerView = StyledPlayerView(context)

    playerView?.setBackgroundColor(Color.TRANSPARENT)
    playerView?.setShutterBackgroundColor(Color.TRANSPARENT)
    playerView?.useController = false

    if (scaleMode == "zoom") {
      playerView?.resizeMode = AspectRatioFrameLayout.RESIZE_MODE_ZOOM
    } else {
      playerView?.resizeMode = AspectRatioFrameLayout.RESIZE_MODE_FIT
    }

    addView(playerView)

    adsLoader = getAdsLoader(context, ppid)
    exoPlayer = getPlayer(context, useSoftwareDecoder)

    playerView?.player = exoPlayer
    adsLoader?.setPlayer(exoPlayer)

    val dataSourceFactory = DefaultDataSource.Factory(context)
    val progressiveMediaSource = ProgressiveMediaSource.Factory(dataSourceFactory)

    adsLoader?.let { loader ->
      val mediaSourceWithAds: MediaSource = AdsMediaSource(
        SilenceMediaSource(0),
        DataSpec.Builder().setUri(Uri.parse(adTag)).build(),
        adTag,
        progressiveMediaSource,
        loader,
        playerView as AdViewProvider
      )

      exoPlayer?.setMediaSource(mediaSourceWithAds)
      exoPlayer?.prepare()
    }
  }

  fun play() {
    currentFocus = context.getActivity()?.currentFocus
    visibility = View.VISIBLE
    exoPlayer?.play()
  }

  private fun getImaSdkSettings(ppid: String?): ImaSdkSettings {
    val language = Locale.getDefault().language
    val imaSdkSettings = ImaSdkFactory.getInstance().createImaSdkSettings()
    imaSdkSettings.language = language
    imaSdkSettings.ppid = ppid

    return imaSdkSettings
  }

  private fun getAdsLoader(context: Context, ppid: String?): ImaAdsLoader {
    return ImaAdsLoader.Builder(context)
      .setDebugModeEnabled(false)
      .setImaSdkSettings(getImaSdkSettings(ppid))
      .setAdErrorListener {
        val errorMessage = "${it.error.errorCode} | ${it.error.errorType} | ${it.error.message}"
        reactContext?.sendAdErrorEvent(errorMessage, id)

        nativeHopprVideoViewManager.releasePlayer()
      }
      .setAdEventListener { adEvent ->
        if (adEvent.type != AdEvent.AdEventType.AD_PROGRESS) // To avoid sending too many events
          reactContext?.sendAdEvent(adEvent, id)

        when (adEvent.type) {
          AdEvent.AdEventType.LOADED -> {
            reactContext?.sendLogEvent("creativeId ${adEvent.ad.creativeId}", id)
            reactContext?.sendLogEvent("contentType ${adEvent.ad.contentType}", id)
          }
          AdEvent.AdEventType.ALL_ADS_COMPLETED -> {
            nativeHopprVideoViewManager.releasePlayer()
          }
          AdEvent.AdEventType.AD_BREAK_FETCH_ERROR -> {
            nativeHopprVideoViewManager.releasePlayer()
          }
          AdEvent.AdEventType.STARTED -> {
            playerView?.measuredWidth?.let { playerViewMeasuredWidth ->
              playerView?.measuredHeight?.let { playerViewMeasuredHeight ->
                reLayout(playerViewMeasuredWidth, playerViewMeasuredHeight)
              }
            }
          }
          else -> {}
        }
      }
      .build()
  }

  private fun getPlayer(context: Context, useSoftwareDecoder: Boolean?): ExoPlayer {
    val mediaSourceFactory =
      DefaultMediaSourceFactory(context).setLocalAdInsertionComponents(
        { adsLoader },
        playerView!!
      )

    val playerBuilder = if (useSoftwareDecoder == true) {
      val defaultRenderersFactory = DefaultRenderersFactory(context)
      defaultRenderersFactory.setMediaCodecSelector(CustomMediaCodecSelector(useSoftwareDecoder = true))
      ExoPlayer.Builder(context, defaultRenderersFactory).setMediaSourceFactory(mediaSourceFactory)
    } else {
      ExoPlayer.Builder(context)
        .setMediaSourceFactory(mediaSourceFactory)
    }

    val loadControlBuilder: DefaultLoadControl.Builder = DefaultLoadControl.Builder()
    val allocator = DefaultAllocator(true, C.DEFAULT_BUFFER_SEGMENT_SIZE)

    loadControlBuilder.setAllocator(allocator)
    loadControlBuilder.setBufferDurationsMs(
      60000,  // Min buffer duration (ms)
      60000,  // Max buffer duration (ms)
      60000,  // Buffer for playback (ms)
      60000 // Buffer for playback after rebuffer (ms)
    )

    loadControlBuilder.setPrioritizeTimeOverSizeThresholds(true)

    val customLoadControl = loadControlBuilder.build()
    playerBuilder.setLoadControl(customLoadControl)

    // TODO do we need that?
    val audioAttributes: AudioAttributes = AudioAttributes.Builder()
      .setUsage(C.USAGE_MEDIA)
      .setContentType(C.AUDIO_CONTENT_TYPE_MOVIE)
      .build()

    val player = playerBuilder
      .setAudioAttributes(audioAttributes, true)
      .build()

    player.addAnalyticsListener(object : AnalyticsListener {
      override fun onAudioDecoderInitialized(
        eventTime: AnalyticsListener.EventTime,
        decoderName: String,
        initializedTimestampMs: Long,
        initializationDurationMs: Long
      ) {
        reactContext?.sendLogEvent("onAudioDecoderInitialized $decoderName", id)
        super.onAudioDecoderInitialized(
          eventTime,
          decoderName,
          initializedTimestampMs,
          initializationDurationMs
        )
      }

      override fun onVideoDecoderInitialized(
        eventTime: AnalyticsListener.EventTime,
        decoderName: String,
        initializedTimestampMs: Long,
        initializationDurationMs: Long
      ) {
        reactContext?.sendLogEvent("onVideoDecoderInitialized $decoderName", id)

        super.onVideoDecoderInitialized(
          eventTime,
          decoderName,
          initializedTimestampMs,
          initializationDurationMs
        )
      }
    })

    player.addListener(object : Player.Listener {
      override fun onPlayerError(error: PlaybackException) {
        val errorMessage = "${error.errorCode} | ${error.errorCodeName} | ${error.message}"
        reactContext?.sendAdErrorEvent(errorMessage, id)

        nativeHopprVideoViewManager.releasePlayer()

        super.onPlayerError(error)
      }
    })

    return player
  }

  private fun loadCodecs() {
    val list = ArrayList(MediaCodecList(MediaCodecList.ALL_CODECS).codecInfos.toList())
    Log.d("loadCodecs", list.toString())
    list.forEach {
      Log.d("codec", it.name)
    }
  }

  fun release() {
    reactContext?.sendLogEvent("release", id)

    visibility = View.GONE

    adsLoader?.setPlayer(null)
    playerView?.player = null
    exoPlayer?.release()
    adsLoader?.release()
    playerView?.removeAllViews()

    removeAllViews()

    exoPlayer = null
    adsLoader = null
    playerView = null
    currentFocus?.requestFocus()
    currentFocus = null
  }

  override fun onDetachedFromWindow() {
    release()
    super.onDetachedFromWindow()
  }

}
