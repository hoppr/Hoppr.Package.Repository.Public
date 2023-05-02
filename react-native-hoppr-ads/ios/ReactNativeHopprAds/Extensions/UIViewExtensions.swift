//
//  UIViewExtensions.swift
//  DemoReactNativeSdk
//
//  Created by Maxence Bourdin on 26/4/2023.
//

import Foundation

extension UIView {
    func toNode() -> Node {
        let result = Node(children: [])
        let className = NSStringFromClass(type(of: self))

        result.className = className
        result.id = self.accessibilityIdentifier
        result.resourceId = self.accessibilityIdentifier
        result.x = self.frame.origin.x
        result.y = self.frame.origin.y
        result.width = self.frame.width
        result.height = self.frame.height
        result.alpha = self.alpha
        result.tag = self.tag
        result.isFocused = self.isFocused
        result.nativeID = self.nativeID
//        result.reactTag = self.reactTag
//        result.rootTag = self.rootTag
        result.inheritanceClasses = self.getInheritanceClasses()

        if let textView = self as? UITextView {
            result.text = textView.text
            result.textColor = textView.textColor?.hexString
        }

        if let textView = self as? UILabel {
            result.text = textView.text
            result.textColor = textView.textColor?.hexString
        }
      
        if let textStorage = self.getTextStorage() {
          result.text = textStorage.string
          if let textColor = textStorage.getForegroundColor(){
            result.textColor = textColor.hexString
          }
        }
            
        switch self.isHidden {
        case false:
            result.visibility = "visible"
        case true:
            result.visibility = "invisible"
        }

        return result
    }
  
  func getTextStorage() -> NSTextStorage? {
    var textStorage: NSTextStorage?

    do{
      try ObjC.catchException {
          var anyView = self as AnyObject
          textStorage = anyView.value(forKey: "_textStorage") as? NSTextStorage
      }
    }
    catch{
      
    }
        
    return textStorage
  }
  
  func getPropertiesString() -> String {
    var result = ""
          result += "Frame: \(frame)\n"
          result += "Bounds: \(bounds)"
          result += "Center: \(center)"
          result += "Tag: \(tag)"
          result += "Background color: \(backgroundColor?.description ?? "nil")"
          result += "Alpha: \(alpha)"
          result += "Is hidden: \(isHidden)"
          result += "Is userInteractionEnabled: \(isUserInteractionEnabled)"
          result += "Content mode: \(contentMode.rawValue)"
          result += "Accessibility identifier: \(accessibilityIdentifier ?? "nil")"
          result += "NSStringFromClass \(NSStringFromClass(type(of: self)))"
          result += "NSStringFromClass \(getInheritanceClasses())"
          
          if let textView = self as? UITextView {
            result += "UITextView text: \(textView.text ?? "nil")"
          } else if let label = self as? UILabel {
            result += "Label text: \(label.text ?? "nil")"
          }
          return result
      }
  
  func getInheritanceClasses() -> [String] {
      var inheritanceClasses = [String]()
      var currentClass: AnyClass? = type(of: self)
      
      while let unwrappedClass = currentClass {
          inheritanceClasses.append(NSStringFromClass(unwrappedClass))
          currentClass = unwrappedClass.superclass()
      }
      
      return inheritanceClasses
  }
}
