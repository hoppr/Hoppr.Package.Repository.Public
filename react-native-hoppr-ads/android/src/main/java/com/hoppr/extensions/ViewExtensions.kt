package com.hoppr.extensions

import android.content.res.Resources
import android.view.View
import android.widget.TextView
import com.hoppr.models.Node
import okhttp3.internal.toHexString

fun View.reLayout(measuredWidth: Int, measuredHeight: Int) {
  measure(
    View.MeasureSpec.makeMeasureSpec(measuredWidth, View.MeasureSpec.EXACTLY),
    View.MeasureSpec.makeMeasureSpec(measuredHeight, View.MeasureSpec.EXACTLY)
  )

  layout(left, top, measuredWidth, measuredHeight)
}

fun View.toNode() : Node {
  val result = Node(arrayListOf())

  result.className = this.javaClass.canonicalName
  result.id = this.id.toString()
  result.resourceId = (this.getResourceIdWithFallback())
  result.x = this.x
  result.y = this.y
  result.width = this.width
  result.height = this.height
  result.alpha = this.alpha
  result.tag = this.tag
  result.isFocused = this.isFocused
  result.isSelected = this.isSelected
  result.inheritanceClasses = this.getInheritanceClasses()

  if(this is TextView){
    result.text = this.text.toString()
    result.textColor = this.currentTextColor.toHexString()
//      result.textColor = this.textColors.defaultColor.toHexString()
  }

  when (this.visibility) {
    View.VISIBLE -> result.visibility = "visible"
    View.INVISIBLE -> result.visibility = "invisible"
    View.GONE -> result.visibility = "gone"
    else -> {}
  }

  return result
}

fun View.getResourceIdWithFallback(): String? {
  val viewId = this.id
  return try {
    this.getResourceId()
  } catch (e: Resources.NotFoundException) {
    // fall back to hex representation of the id
    viewId.toString()
//        "0x" + Integer.toString(viewId, 16)
//      "generatedId"
  }
}

fun View.getResourceId(): String? {
  val viewId = this.id
  if (viewId == View.NO_ID || isViewIdGenerated(viewId)) {
    throw Resources.NotFoundException()
  }
  val resources: Resources? = this.context.resources
  return if (resources != null) {
    resources.getResourceEntryName(viewId)
  } else ""
}

private fun isViewIdGenerated(id: Int): Boolean {
  return id and -0x1000000 == 0 && id and 0x00FFFFFF != 0
}
