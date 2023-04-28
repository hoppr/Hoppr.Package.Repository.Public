package com.hoppr.extensions

import com.facebook.react.bridge.*
import com.facebook.react.modules.core.DeviceEventManagerModule
import com.facebook.react.uimanager.events.RCTEventEmitter
import com.google.ads.interactivemedia.v3.api.AdEvent
import com.hoppr.enums.EventType
import com.hoppr.models.NativeEvent

fun ReactApplicationContext.sendAdEvent(adEvent: AdEvent, viewId: Int?) {
  val nativeEvent = NativeEvent(EventType.AdEvent, adEventType = adEvent.type)
  sendNativeEvent(nativeEvent.toJSON(), viewId)
}

fun ReactApplicationContext.sendAdErrorEvent(errorMessage: String, viewId: Int?) {
  val nativeEvent = NativeEvent(EventType.AdErrorEvent, errorMessage = errorMessage)
  sendNativeEvent(nativeEvent.toJSON(), viewId)
}

fun ReactApplicationContext.sendLogEvent(content: String, viewId: Int?) {
  val nativeEvent = NativeEvent(EventType.LogEvent, message = content)
  sendNativeEvent(nativeEvent.toJSON(), viewId)
}

fun ReactApplicationContext.sendNativeEvent(content: String, viewId: Int?) {
  val event = Arguments.createMap().apply {
    putString("message", content)
  }

  viewId?.let {
    getJSModule(RCTEventEmitter::class.java).receiveEvent(it, "topChange", event)
  }
}

//fun ReactApplicationContext.sendLogEvent2(content: String) {
//  val nativeEvent = NativeEvent(EventType.LogEvent, message = content)
//
//  val params = Arguments.createMap().apply {
//    putString("nativeEvent", nativeEvent.toJSON())
//  }
//  this
//    .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
//    .emit("test", params)
//}