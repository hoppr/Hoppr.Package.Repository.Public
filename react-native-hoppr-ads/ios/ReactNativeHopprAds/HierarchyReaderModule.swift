//
//  HierarchyReaderModule.swift
//  DemoReactNativeSdk
//
//  Created by Maxence Bourdin on 26/4/2023.
//

import Foundation
import UIKit
import AVFoundation

@objc(HierarchyReaderModule)
class HierarchyReaderModule: NSObject {
  
  @objc
  func getViewHierarchy(_ successCallback: RCTResponseSenderBlock) {
    successCallback(["hello"])
  }
  
  // override static func requiresMainQueueSetup() -> Bool {
  //   return true
  // }
}

