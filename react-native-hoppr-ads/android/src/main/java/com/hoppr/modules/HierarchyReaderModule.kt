package com.hoppr.modules

import android.view.View
import android.view.ViewGroup
import com.facebook.react.bridge.Callback
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.hoppr.extensions.toNode
import com.hoppr.models.Node

class HierarchyReaderModule(private val reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

  override fun getName() = "HierarchyReaderModule"

  @ReactMethod
  fun getViewHierarchy(callback: Callback) {
    val activity = currentActivity
    val window = activity?.window
    val decorView = window?.decorView

    decorView?.javaClass?.canonicalName

    var result = ""
    decorView?.let {
      val parentNode = it.toNode()
      addChildren(it, parentNode)
      result = parentNode.getViewHierarchyString()
    }

    callback.invoke(result)
  }


  private fun addChildren(
    view: View,
    parentNode: Node
  ) {
    if (view !is ViewGroup) {
      return
    }
    val viewGroup = view as ViewGroup
    val childCount = viewGroup.childCount
    if (childCount == 0) {
      return
    }
    val children = arrayListOf<Node>()
    for (i in 0 until childCount) {
      val child: View? = viewGroup.getChildAt(i)
      if (child != null) {
        val childNode = child.toNode()

        children.add(childNode)
        addChildren(child, childNode)
      }
    }
    parentNode.children = children
  }




//  private var listenerCount = 0
//
//  @ReactMethod
//  fun addListener(eventName: String) {
//    if (listenerCount == 0) {
//      // Set up any upstream listeners or background tasks as necessary
//    }
//
//    listenerCount += 1
//  }
//
//  @ReactMethod
//  fun removeListeners(count: Int) {
//    listenerCount -= count
//    if (listenerCount == 0) {
//      // Remove upstream listeners, stop unnecessary background tasks
//    }
//  }


}


