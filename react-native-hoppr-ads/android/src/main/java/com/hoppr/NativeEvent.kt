package com.hoppr

import com.google.ads.interactivemedia.v3.api.AdEvent
import org.json.JSONObject

class NativeEvent (
  private val eventType: EventType,
  private val adEventType: AdEvent.AdEventType? = null,
  private val message: String? = null
){
  fun toJSON(): String {
    val jsonObject = JSONObject()
    jsonObject.put("eventType", eventType.toString())
    jsonObject.put("adEventType", adEventType.toString())
    jsonObject.put("message", message)
    return jsonObject.toString()
  }
}
