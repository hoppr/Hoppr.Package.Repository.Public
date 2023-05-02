//
//  Node.swift
//  DemoReactNativeSdk
//
//  Created by Maxence Bourdin on 26/4/2023.
//

import Foundation
import UIKit
import AVFoundation
import ObjectiveC

class Node {
    var children: [Node]
    var className: String?
    var id: String?
    var resourceId: String?
    var visibility: String?
    var text: String?
    var x: Double?
    var y: Double?
    var width: CGFloat?
    var height: CGFloat?
    var alpha: CGFloat?
    var tag: Any?
    var textColor: String?
    var isFocused: Bool?
    var isSelected: Bool?
    var inheritanceClasses: [String]?
    var nativeID: String?
    var reactTag: NSNumber?
    var rootTag: NSNumber?

    init(
        children: [Node] = [],
        className: String? = "",
        id: String? = "",
        resourceId: String? = "",
        visibility: String? = "",
        text: String? = "",
        x: Double? = 0,
        y: Double? = 0,
        width: CGFloat? = 0,
        height: CGFloat? = 0,
        alpha: CGFloat? = 0,
        tag: Any? = nil,
        textColor: String? = "",
        isFocused: Bool? = nil,
        isSelected: Bool? = nil,
        inheritanceClasses: [String]? = nil,
        nativeID: String? = "",
        reactTag: NSNumber? = 0,
        rootTag: NSNumber? = 0
    ) {
        self.children = children
        self.className = className
        self.id = id
        self.resourceId = resourceId
        self.visibility = visibility
        self.text = text
        self.x = x
        self.y = y
        self.width = width
        self.height = height
        self.alpha = alpha
        self.tag = tag
        self.textColor = textColor
        self.isFocused = isFocused
        self.isSelected = isSelected
        self.inheritanceClasses = inheritanceClasses
        self.nativeID = nativeID
        self.reactTag = reactTag
        self.rootTag = rootTag
    }

    func getViewHierarchyString(depth: Int = 0) -> String {
        let depthSpaces = String(repeating: "  ", count: depth)
        var stringBuilder = "\(depthSpaces)\(className ?? "")"

        stringBuilder.appendIfNotEmpty(prefix: "id", value: id)
        stringBuilder.appendIfNotEmpty(prefix: "nativeID", value: nativeID)
        stringBuilder.appendIfNotEmpty(prefix: "reactTag", value: reactTag?.stringValue)
        stringBuilder.appendIfNotEmpty(prefix: "rootTag", value: rootTag?.stringValue)
        stringBuilder.appendIfNotEmpty(prefix: "resourceId", value: resourceId)
        stringBuilder.appendIfNotEmpty(prefix: "visibility", value: visibility)
        stringBuilder.appendIfNotEmpty(prefix: "text", value: text)
        stringBuilder.appendIfNotEmpty(prefix: "x", value: x?.description)
        stringBuilder.appendIfNotEmpty(prefix: "y", value: y?.description)
        stringBuilder.appendIfNotEmpty(prefix: "width", value: width?.description)
        stringBuilder.appendIfNotEmpty(prefix: "height", value: height?.description)
        stringBuilder.appendIfNotEmpty(prefix: "alpha", value: alpha?.description)
        stringBuilder.appendIfNotEmpty(prefix: "tag", value: tag.map { "\($0)" })
        stringBuilder.appendIfNotEmpty(prefix: "isFocused", value: isFocused?.description)
        stringBuilder.appendIfNotEmpty(prefix: "isSelected", value: isSelected?.description)
        stringBuilder.appendIfNotEmpty(prefix: "textColor", value: textColor)
        stringBuilder.appendIfNotEmpty(prefix: "inheritanceClasses", value: inheritanceClasses?.joined(separator: " -> "))

        stringBuilder.append("\n")

        children.forEach { child in
            stringBuilder.append(contentsOf: child.getViewHierarchyString(depth: depth + 1))
        }

        return stringBuilder
    }
}
