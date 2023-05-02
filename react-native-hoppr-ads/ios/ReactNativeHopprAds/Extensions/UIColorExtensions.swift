//
//  UIColorExtensions.swift
//  DemoReactNativeSdk
//
//  Created by Maxence Bourdin on 26/4/2023.
//

import Foundation

extension UIColor {
  var hexString: String? {
      guard let components = cgColor.components, components.count >= 3 else {
          return nil
      }

      let r = Float(components[0])
      let g = Float(components[1])
      let b = Float(components[2])
      let a = Float(components.count >= 4 ? components[3] : 1.0)

      let rgbaInt = (Int(a * 255) << 24) + (Int(r * 255) << 16) + (Int(g * 255) << 8) + Int(b * 255)
      let hexString = String(format: "%08x", rgbaInt)

      return hexString
  }
}
