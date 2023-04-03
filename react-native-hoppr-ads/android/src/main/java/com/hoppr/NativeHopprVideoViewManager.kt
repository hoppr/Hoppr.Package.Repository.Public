package com.hoppr

import android.content.Context
import android.graphics.Color
import android.media.MediaCodecList
import android.net.Uri
import android.util.Log
import android.view.View
import android.view.View.MeasureSpec
import android.view.WindowManager
import android.widget.FrameLayout
import androidx.core.view.ViewCompat
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp
import com.facebook.react.uimanager.annotations.ReactPropGroup
import com.facebook.react.uimanager.events.RCTEventEmitter
import com.google.ads.interactivemedia.v3.api.AdEvent
import com.google.android.exoplayer2.DefaultRenderersFactory
import com.google.android.exoplayer2.ExoPlayer
import com.google.android.exoplayer2.analytics.AnalyticsListener
import com.google.android.exoplayer2.ext.ima.ImaAdsLoader
import com.google.android.exoplayer2.mediacodec.MediaCodecSelector
import com.google.android.exoplayer2.mediacodec.MediaCodecUtil
import com.google.android.exoplayer2.source.DefaultMediaSourceFactory
import com.google.android.exoplayer2.source.MediaSource
import com.google.android.exoplayer2.source.ProgressiveMediaSource
import com.google.android.exoplayer2.source.SilenceMediaSource
import com.google.android.exoplayer2.source.ads.AdsMediaSource
import com.google.android.exoplayer2.ui.AdViewProvider
import com.google.android.exoplayer2.ui.AspectRatioFrameLayout
import com.google.android.exoplayer2.ui.StyledPlayerView
import com.google.android.exoplayer2.upstream.DataSpec
import com.google.android.exoplayer2.upstream.DefaultDataSource


class NativeHopprVideoViewManager(
  private val callerContext: ReactApplicationContext
) : SimpleViewManager<FrameLayout>() {
  private var exoPlayer: ExoPlayer? = null
  private var adsLoader: ImaAdsLoader? = null
  private var playerView: StyledPlayerView? = null
  private var frameLayout: FrameLayout? = null
  private var windowManager: WindowManager? = null
  private var styleWidth = 0
  private var styleHeight = 0
  private var adTag: String? = null
  private var scaleMode: String? = null
  private var isInit = false

  override fun getName() = "NativeHopprVideoView"

  override fun createViewInstance(reactContext: ThemedReactContext): FrameLayout {
    sendLogEvent("createViewInstance")

    frameLayout = FrameLayout(reactContext)
    frameLayout?.visibility = View.GONE
    return frameLayout ?: FrameLayout(reactContext)
  }

  private fun init(context: Context){
    isInit = true
    sendLogEvent("init")
    playerView = StyledPlayerView(context)

    playerView?.setBackgroundColor(Color.TRANSPARENT)
    playerView?.setShutterBackgroundColor(Color.TRANSPARENT)
    playerView?.useController = false

    if (scaleMode == "zoom") {
      playerView?.resizeMode = AspectRatioFrameLayout.RESIZE_MODE_ZOOM
    } else {
      playerView?.resizeMode = AspectRatioFrameLayout.RESIZE_MODE_FIT
    }

//    addPlayerViewToWindowManager(context)
    frameLayout?.addView(playerView)

    adsLoader = getAdsLoader(context)
    exoPlayer = getPlayer(context)

    playerView?.player = exoPlayer
    adsLoader?.setPlayer(exoPlayer)

    val dataSourceFactory = DefaultDataSource.Factory(context)
    val progressiveMediaSource = ProgressiveMediaSource.Factory(dataSourceFactory)

    adTag?.let { adTagUrl ->
      adsLoader?.let { loader ->
        val mediaSourceWithAds: MediaSource = AdsMediaSource(
          SilenceMediaSource(0),
          DataSpec.Builder().setUri(Uri.parse(adTagUrl)).build(),
          adTagUrl,
          progressiveMediaSource,
          loader,
          playerView as AdViewProvider
        )

        exoPlayer?.setMediaSource(mediaSourceWithAds)
        exoPlayer?.prepare()
      }
    }
  }

  private fun reLayout(view: View?) {
    if (view == null) return

    sendLogEvent("relayout")

    view.measure(
      MeasureSpec.makeMeasureSpec(playerView?.measuredWidth!!, MeasureSpec.EXACTLY),
      MeasureSpec.makeMeasureSpec(playerView?.measuredHeight!!, MeasureSpec.EXACTLY)
    )

    view.layout(view.left, view.top, view.measuredWidth, view.measuredHeight)
  }

  @ReactProp(name = "adTag")
  fun setAdTag(frameLayout: FrameLayout, adTag: String) {
    sendLogEvent("setAdTag $adTag")
    this.adTag = adTag
  }

  @ReactPropGroup(names = ["height", "width"], customType = "Style")
  fun setStyle(frameLayout: FrameLayout, index: Int, style: Int) {
    sendLogEvent("setStyle index: $index, style: $style")
    when (index) {
      0 -> {
        styleWidth = style
      }
      1 -> {
        styleHeight = style
      }
    }
  }

  @ReactProp(name = "scaleMode")
  fun setScaleMode(frameLayout: FrameLayout, scaleMode: String) {
    sendLogEvent("setScaleMode $scaleMode")
    this.scaleMode = scaleMode
  }

  @ReactProp(name = "play")
  fun setPlay(frameLayout: FrameLayout, play: Boolean) {
    sendLogEvent("setPlay $play")
    if (play) {
//      val mainHandler = Handler(Looper.getMainLooper())
//
//      mainHandler.post(object : Runnable {
//        override fun run() {
//          val adOverlayWidth = playerView?.adViewGroup?.getChildAt(0)?.width
//
//          reLayout(frameLayout)
//
//          if(adOverlayWidth == null || adOverlayWidth == 0){
//            mainHandler.postDelayed(this, 50)
//          }
//        }
//      })

      frameLayout.visibility = View.VISIBLE
      exoPlayer?.play()
    }
  }


  override fun onAfterUpdateTransaction(view: FrameLayout) {
    super.onAfterUpdateTransaction(view)
    sendLogEvent("onAfterUpdateTransaction")

    if(!isInit)
      init(view.context)
  }

  private fun getAdsLoader(context: Context): ImaAdsLoader {
    return ImaAdsLoader.Builder(context)
      .setDebugModeEnabled(true)
      .setAdEventListener { adEvent ->
        if (adEvent.type != AdEvent.AdEventType.AD_PROGRESS) // To avoid sending too many events
          sendAdEvent(adEvent)

        when (adEvent.type) {
          AdEvent.AdEventType.ALL_ADS_COMPLETED -> {
            release()
          }
          AdEvent.AdEventType.AD_BREAK_FETCH_ERROR -> {
            release()
          }
          AdEvent.AdEventType.STARTED -> {
            reLayout(frameLayout)
          }
          else -> {}
        }
      }
      .build()
  }

  private fun sendNativeEvent(content: String) {
    frameLayout?.id?.let {
      val event = Arguments.createMap().apply {
        putString("message", content)
      }

      callerContext
        .getJSModule(RCTEventEmitter::class.java)
        .receiveEvent(it, "topChange", event)
    }
  }

  private fun sendAdEvent(adEvent: AdEvent) {
    val nativeEvent = NativeEvent(EventType.AdEvent, adEvent.type)
    sendNativeEvent(nativeEvent.toJSON())
  }

  private fun sendLogEvent(content: String) {
    val nativeEvent = NativeEvent(EventType.LogEvent, message = content)
    sendNativeEvent(nativeEvent.toJSON())
  }

  private fun getPlayer(context: Context): ExoPlayer {
    val mediaSourceFactory =
      DefaultMediaSourceFactory(context).setLocalAdInsertionComponents(
        { adsLoader },
        playerView!!
      )

    val codec: String? = null
    val codecToExcluded = false

    val playerBuilder = if (!codec.isNullOrEmpty()) {
      val rf = getDefaultRenderersFactory(context, codec, codecToExcluded)

      ExoPlayer.Builder(context, rf)
        .setMediaSourceFactory(mediaSourceFactory)
    } else {
      ExoPlayer.Builder(context)
        .setMediaSourceFactory(mediaSourceFactory)
    }

    // TODO do we need that?
//    val audioAttributes: AudioAttributes = AudioAttributes.Builder()
//      .setUsage(C.USAGE_MEDIA)
//      .setContentType(C.AUDIO_CONTENT_TYPE_MOVIE)
//      .build()

    val player = playerBuilder
//      .setAudioAttributes(audioAttributes, true)
      .build()

    player.addAnalyticsListener(object : AnalyticsListener {
      override fun onAudioDecoderInitialized(
        eventTime: AnalyticsListener.EventTime,
        decoderName: String,
        initializedTimestampMs: Long,
        initializationDurationMs: Long
      ) {
        sendLogEvent("onAudioDecoderInitialized $decoderName")
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
        sendLogEvent( "onVideoDecoderInitialized $decoderName")

        super.onVideoDecoderInitialized(
          eventTime,
          decoderName,
          initializedTimestampMs,
          initializationDurationMs
        )
      }
    })

    return player
  }

  private fun getDefaultRenderersFactory(
    context: Context,
    codecs: String,
    codecToExcluded: Boolean?,
  ): DefaultRenderersFactory {
    val codecsList = codecs.split("|")

    val customCodecSelector =
      MediaCodecSelector { mimeType, requiresSecureDecoder, requiresTunnelingDecoder ->
        MediaCodecUtil.getDecoderInfos(
          mimeType,
          requiresSecureDecoder,
          requiresTunnelingDecoder
        ).toMutableList().filter { mediaCodecInfo ->
          if (codecToExcluded == true) {
            codecsList.none { codec ->
              mediaCodecInfo.name.contains(codec)
            }
          } else {
            codecsList.any { codec ->
              mediaCodecInfo.name.contains(codec)
            }
          }
        }.toMutableList()
      }

    val rf = DefaultRenderersFactory(context).apply {
      setMediaCodecSelector(customCodecSelector)
    }

    return rf
  }

  private fun loadCodecs() {
    val list = ArrayList(MediaCodecList(MediaCodecList.ALL_CODECS).codecInfos.toList())
    Log.d("loadCodecs", list.toString())
    list.forEach {
      Log.d("codec", it.name)
    }
  }

  private fun release() {
    frameLayout?.visibility = View.GONE

    adsLoader?.setPlayer(null)
    playerView?.player = null
    exoPlayer?.release()
    adsLoader?.release()
    playerView?.removeAllViews()

//    playerView?.let {
//      if (ViewCompat.isAttachedToWindow(it)) {
//        windowManager?.removeView(it)
//      }
//    }

    frameLayout?.removeAllViews()

    exoPlayer = null
    adsLoader = null
    playerView = null
    frameLayout = null
    windowManager = null
    isInit = false
  }

  override fun getExportedCustomBubblingEventTypeConstants(): Map<String, Any> {
    return mapOf(
      "topChange" to mapOf(
        "phasedRegistrationNames" to mapOf(
          "bubbled" to "onChange"
        )
      )
    )
  }

  override fun onDropViewInstance(view: FrameLayout) {
    super.onDropViewInstance(view)
    Log.d("onDropViewInstance", "onDropViewInstance")

    release()
  }
}

//  private fun addPlayerViewToWindowManager(context: Context) {
//    val windowFlags =
//      WindowManager.LayoutParams.FLAG_NOT_FOCUSABLE or WindowManager.LayoutParams.FLAG_NOT_TOUCH_MODAL or WindowManager.LayoutParams.FLAG_NOT_TOUCHABLE
//
//    val params = WindowManager.LayoutParams(
//      styleWidth,
//      styleHeight,
//      WindowManager.LayoutParams.TYPE_APPLICATION,
//      windowFlags,
//      PixelFormat.TRANSLUCENT
//    )
//
//    windowManager = context.getSystemService(Context.WINDOW_SERVICE) as WindowManager
//
//    windowManager?.addView(playerView, params)
//  }
