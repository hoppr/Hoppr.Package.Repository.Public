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
      var result: [AnyHashable: Any] = [:]
      let adEvent = Utils.mapImaAdEventToGenericFormat(iMAAdEventType: adEventType)
      result["eventType"] = eventType.rawValue
      
      if adEvent != "" {
          result["adEventType"] = adEvent
      }

      if let message = message {
          result["message"] = message
      }

      if let errorMessage = errorMessage { 
          result["errorMessage"] = errorMessage
      }
      
    return result
  }
}
