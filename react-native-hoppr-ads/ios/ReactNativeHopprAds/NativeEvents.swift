//
//  NativeEvent.swift
//  DemoReactNativeSdk
//
//  Created by Maxence Bourdin on 17/4/2023.
//
import Foundation
import GoogleInteractiveMediaAds

class NativeEvent {
  private let eventType: EventType
  private let adEventType: IMAAdEventType?
  private let message: String?
  private let errorMessage: String?
  
  init(eventType: EventType, adEventType: IMAAdEventType? = nil, message: String? = nil, errorMessage: String? = nil) {
    self.eventType = eventType
    self.adEventType = adEventType
    self.message = message
    self.errorMessage = errorMessage
  }
  
  func toDictionary() -> [AnyHashable : Any]? {
    return [
      "eventType": eventType.rawValue,
      "adEventType": Utils.mapImaAdEventToGenericFormat(iMAAdEventType: adEventType),
      "message": message,
      "errorMessage": errorMessage,
    ]
  }
  
  //    func toJSON() -> String {
  //        var jsonObject: [String: Any] = [:]
  //        jsonObject["eventType"] = eventType
  //        jsonObject["adEventType"] = adEventType
  //        jsonObject["message"] = message
  //        jsonObject["errorMessage"] = errorMessage
  //
  //        if let data = try? JSONSerialization.data(withJSONObject: jsonObject, options: .prettyPrinted), let jsonString = String(data: data, encoding: .utf8) {
  //            return jsonString
  //        } else {
  //            return "{}"
  //        }
  //    }
}
