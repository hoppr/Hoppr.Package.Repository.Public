//
//  HierarchyReaderModule.swift
//  DemoReactNativeSdk
//
//  Created by Maxence Bourdin on 26/4/2023.
//

import Foundation
import UIKit
import AVFoundation
import ObjectiveC

@objc(HierarchyReaderModule)
class HierarchyReaderModule: RCTEventEmitter {
  
  func sharedApplication() -> UIApplication? {
    guard UIApplication.responds(to: #selector(getter: UIApplication.shared)) else {
      return nil
    }
    return UIApplication.perform(#selector(getter: UIApplication.shared)).takeUnretainedValue() as? UIApplication
  }
  
  func getApplicationDelegate(application: UIApplication) -> UIApplicationDelegate? {
    return application.delegate
  }
  
  @available(iOS 13.0, tvOS 13.0, *)
  func getApplicationConnectedScenes(application: UIApplication) -> [UIScene] {
    guard let connectedScenes = application.connectedScenes as? Set<UIScene> else {
      return []
    }
    return Array(connectedScenes)
  }
  
  func windows() -> [UIWindow] {
    guard let app = sharedApplication() else {
      return []
    }
    var result: [UIWindow] = []
    
//    if #available(iOS 13.0, tvOS 13.0, *) {
//      let scenes = getApplicationConnectedScenes(application: app)
//      for scene in scenes {
//        if let delegate = scene.delegate, scene.activationState == .foregroundActive,
//           delegate.responds(to: #selector(getter: UIWindowSceneDelegate.window)) {
//          if let window = delegate.perform(#selector(getter: UIWindowSceneDelegate.window))?.takeUnretainedValue() as? UIWindow {
//            result.append(window)
//          }
//        }
//      }
//    }
    
    if let appDelegate = getApplicationDelegate(application: app),
       appDelegate.responds(to: #selector(getter: UIApplicationDelegate.window)){
      if let window = appDelegate.window as? UIWindow {
          result.append(window)
      }}
    
    return result
  }
  
  @objc
  func getViewHierarchy(_ successCallback: RCTResponseSenderBlock) {
      var window = windows()[0]
      var parentNode = window.toNode()

    addChildren(window, parentNode)
    var result = parentNode.getViewHierarchyString()

//      successCallback([fetchViewHierarchy()])
      successCallback([result])
        }
  
  private func addChildren(_ view: UIView, _ parentNode: Node) {
    var children: [Node] = []

    view.subviews.forEach{ v in
      let childNode = v.toNode()
      children.append(childNode)
      self.addChildren(v, childNode)
    }
    
    parentNode.children = children
  }
  
  func fetchViewHierarchy() -> [String: Any]?  {
    return processViewHierarchy(windows: windows())
  }
  
  private func processViewHierarchy(windows: [UIWindow]) -> [String: Any]?  {
    let jsonObject: [String: Any] = [
      "rendering_system": "UIKIT",
      "windows": windows.map(viewHierarchyFromView)
    ]
//    let jsonData = try JSONSerialization.data(withJSONObject: jsonObject, options: [])
    return jsonObject
  }
  
  private func viewHierarchyFromView(_ view: UIView) -> [String: Any] {
    var viewDict: [String: Any] = [
      "type": String(describing: type(of: view)),
      "width": view.frame.size.width,
      "height": view.frame.size.height,
      "x": view.frame.origin.x,
      "y": view.frame.origin.y,
      "alpha": view.alpha,
      "visible": !view.isHidden
    ]
    
    NSLog("maxdebug type " + String(describing: type(of: view)))
    
    if let identifier = view.accessibilityIdentifier {
      viewDict["identifier"] = identifier
    }
    
    if let viewController = view.next as? UIViewController, viewController.view == view {
      viewDict["view_controller"] = String(describing: type(of: viewController))
    }
    
    viewDict["children"] = view.subviews.map(viewHierarchyFromView)
    
    return viewDict
  }
  
//    override static func requiresMainQueueSetup() -> Bool {
//      return true
//    }
//
  override func supportedEvents() -> [String]! {
      return [""]
    }
    
    override func constantsToExport() -> [AnyHashable : Any]! {
      return ["": ""]
    }
    
    override static func requiresMainQueueSetup() -> Bool {
      return true
    }
}

