package com.hoppr.models

import com.hoppr.extensions.appendIfNotEmpty


class Node(
  var children: ArrayList<Node>,
  var className: String? = "",
  var id: String? = "",
  var resourceId: String? = "",
  var visibility: String? = "",
  var text: String? = "",
  var x: Float? = 0f,
  var y: Float? = 0f,
  var width: Int? = 0,
  var height: Int? = 0,
  var alpha: Float? = 0f,
  var tag: Any? = null,
  var textColor: String? = "",
  var isFocused: Boolean? = null,
  var isSelected: Boolean? = null,
  var inheritanceClasses: ArrayList<String?>? = arrayListOf(),
) {
  fun getViewHierarchyString(depth: Int = 0): String {
    val depthSpaces = "  ".repeat(depth)
    val stringBuilder = StringBuilder("$depthSpaces$className")

    stringBuilder.apply {
      appendIfNotEmpty("id", id)
      appendIfNotEmpty("resourceId", resourceId)
      appendIfNotEmpty("visibility", visibility)
      appendIfNotEmpty("text", text)
      appendIfNotEmpty("x", x.toString())
      appendIfNotEmpty("y", y.toString())
      appendIfNotEmpty("width", width.toString())
      appendIfNotEmpty("height", height.toString())
      appendIfNotEmpty("alpha", alpha.toString())
      appendIfNotEmpty("tag", tag.toString())
      appendIfNotEmpty("isFocused", isFocused.toString())
      appendIfNotEmpty("isSelected", isSelected.toString())
      appendIfNotEmpty("textColor", textColor)
      appendIfNotEmpty("inheritanceClasses", inheritanceClasses.toString())
    }

    stringBuilder.append("\n")

    children.forEach { child ->
      stringBuilder.append(child.getViewHierarchyString(depth + 1))
    }

    return stringBuilder.toString()
  }
}
