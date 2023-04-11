package com.hoppr.viewManagers

import android.util.Log
import android.view.View
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp
import com.hoppr.views.VideoAdPlayerView
import com.hoppr.extensions.sendLogEvent

class NativeHopprVideoViewManager(
  private val callerContext: ReactApplicationContext
) : SimpleViewManager<VideoAdPlayerView>() {
  private var videoAdPlayerView: VideoAdPlayerView? = null
  private var adTag: String? = null
  private var previousAdTag: String? = null
  private var scaleMode: String? = null
  private var ppid: String? = null
  private var isInit = false
  private var isPlaying = false

  override fun getName() = "NativeHopprVideoView"

  override fun createViewInstance(reactContext: ThemedReactContext): VideoAdPlayerView {
    callerContext.sendLogEvent("createViewInstance", videoAdPlayerView?.id)

    videoAdPlayerView = VideoAdPlayerView(reactContext, this)
    videoAdPlayerView?.visibility = View.GONE

    return videoAdPlayerView ?: VideoAdPlayerView(reactContext, this)
  }

  @ReactProp(name = "adTag")
  fun setAdTag(videoAdPlayerView: VideoAdPlayerView, adTag: String) {
    callerContext.sendLogEvent("setAdTag $adTag", videoAdPlayerView.id)

    this.previousAdTag = this.adTag
    this.adTag = adTag
  }

  @ReactProp(name = "scaleMode")
  fun setScaleMode(videoAdPlayerView: VideoAdPlayerView, scaleMode: String) {
    callerContext.sendLogEvent("setScaleMode $scaleMode", videoAdPlayerView.id)
    this.scaleMode = scaleMode
  }

  @ReactProp(name = "play")
  fun setPlay(videoAdPlayerView: VideoAdPlayerView, play: Boolean) {
    callerContext.sendLogEvent("setPlay $play", videoAdPlayerView.id)
    this.isPlaying = play
    if (play) {
      videoAdPlayerView.play()
    }
  }

  @ReactProp(name = "ppid")
  fun setPpid(videoAdPlayerView: VideoAdPlayerView, ppid: String) {
    callerContext.sendLogEvent("setPpid $ppid", videoAdPlayerView.id)
    this.ppid = ppid
  }

  override fun onAfterUpdateTransaction(view: VideoAdPlayerView) {
    super.onAfterUpdateTransaction(view)

    callerContext.sendLogEvent("onAfterUpdateTransaction", videoAdPlayerView?.id)

    if(!isInit){
      initPlayer()
    } else if(previousAdTag != adTag && previousAdTag != null && !isPlaying) {
      releasePlayer()
      initPlayer()
    }
  }

  private fun initPlayer(){
    adTag?.let {
      isInit = true
      videoAdPlayerView?.init(callerContext, scaleMode, ppid, it)
    }
  }

  fun releasePlayer(){
    isInit = false
    isPlaying = false
    previousAdTag = null

    videoAdPlayerView?.release()
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

  override fun onDropViewInstance(view: VideoAdPlayerView) {
    super.onDropViewInstance(view)
    Log.d("onDropViewInstance", "onDropViewInstance")
    callerContext.sendLogEvent("onDropViewInstance", videoAdPlayerView?.id)

    releasePlayer()
  }
}
//  private var windowManager: WindowManager? = null
//  private var styleWidth = 0
//  private var styleHeight = 0

//    addPlayerViewToWindowManager(context)

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


//@ReactPropGroup(names = ["height", "width"], customType = "Style")
//fun setStyle(frameLayout: FrameLayout, index: Int, style: Int) {
//  sendLogEvent("setStyle index: $index, style: $style")
//  when (index) {
//    0 -> {
//      styleWidth = style
//    }
//    1 -> {
//      styleHeight = style
//    }
//  }
//}

//    playerView?.let {
//      if (ViewCompat.isAttachedToWindow(it)) {
//        windowManager?.removeView(it)
//      }
//    }

//    windowManager = null
