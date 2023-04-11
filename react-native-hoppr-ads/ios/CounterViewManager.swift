//
//  CounterViewManager.swift
//  DemoReactNativeSdk
//
//  Created by Maxence Bourdin on 11/4/2023.
//

import Foundation

@objc(CounterViewManager)
class CounterViewManager: RCTViewManager {
  override func view() -> UIView! {
    let label = UILabel()
    label.text = "Swift Counter"
    label.textAlignment = .center
    label.textColor = .red  
    return label
  }
  
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
