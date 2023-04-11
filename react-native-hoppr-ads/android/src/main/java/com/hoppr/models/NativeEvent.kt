package com.hoppr.models

import com.google.ads.interactivemedia.v3.api.AdEvent
import com.hoppr.enums.EventType
import org.json.JSONObject

class NativeEvent (
  private val eventType: EventType,
  private val adEventType: AdEvent.AdEventType? = null,
  private val message: String? = null,
  private val errorMessage: String? = null,
){
  fun toJSON(): String {
    val jsonObject = JSONObject()
    jsonObject.put("eventType", eventType.toString())
    jsonObject.put("adEventType", adEventType.toString())
    jsonObject.put("message", message)
    jsonObject.put("errorMessage", errorMessage)
    return jsonObject.toString()
  }
}
