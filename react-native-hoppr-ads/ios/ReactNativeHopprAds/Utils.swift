//
//  Utils.swift
//  DemoReactNativeSdk
//
//  Created by Maxence Bourdin on 17/4/2023.
//

import Foundation
import GoogleInteractiveMediaAds

class Utils{
  class func mapImaAdEventToGenericFormat(iMAAdEventType : IMAAdEventType?) -> String{
    switch(iMAAdEventType){
      case .AD_BREAK_READY:
        return "AD_BREAK_READY"
      case .AD_BREAK_FETCH_ERROR:
        return "AD_BREAK_FETCH_ERROR"
      case .AD_BREAK_ENDED:
        return "AD_BREAK_ENDED"
      case .AD_BREAK_STARTED:
        return "AD_BREAK_STARTED"
      case .AD_PERIOD_ENDED:
        return "AD_PERIOD_ENDED"
      case .AD_PERIOD_STARTED:
        return "AD_PERIOD_STARTED"
      case .ALL_ADS_COMPLETED:
        return "ALL_ADS_COMPLETED"
      case .CLICKED:
        return "CLICKED"
      case .COMPLETE:
        return "COMPLETE"
      case .CUEPOINTS_CHANGED:
        return "CUEPOINTS_CHANGED"
      case .ICON_FALLBACK_IMAGE_CLOSED:
        return "ICON_FALLBACK_IMAGE_CLOSED"
      case .ICON_TAPPED:
        return "ICON_TAPPED"
      case .FIRST_QUARTILE:
        return "FIRST_QUARTILE"
      case .LOADED:
        return "LOADED"
      case .LOG:
        return "LOG"
      case .MIDPOINT:
        return "MIDPOINT"
      case .PAUSE:
        return "PAUSE"
      case .RESUME:
        return "RESUME"
      case .SKIPPED:
        return "SKIPPED"
      case .STARTED:
        return "STARTED"
      case .STREAM_LOADED:
        return "STREAM_LOADED"
      case .STREAM_STARTED:
        return "STREAM_STARTED"
      case .TAPPED:
        return "TAPPED"
      case .THIRD_QUARTILE:
        return "THIRD_QUARTILE"
      case .none:
        return ""
      @unknown default:
          return ""
    }
  }
}
