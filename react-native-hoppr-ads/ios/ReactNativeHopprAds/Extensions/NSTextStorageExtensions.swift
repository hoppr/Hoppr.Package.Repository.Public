//
//  NSTextStorageExtensions.swift
//  DemoReactNativeSdk
//
//  Created by Maxence Bourdin on 26/4/2023.
//

import Foundation

extension NSTextStorage {
  func getForegroundColor() -> UIColor? {
    var textColor: UIColor?
    
    self.enumerateAttribute(.foregroundColor, in: NSRange(location: 0, length: self.length), options: []) { (value, _, _) in
      if let color = value as? UIColor {
        textColor = color
      }
    }
    
    return textColor
  }
}
