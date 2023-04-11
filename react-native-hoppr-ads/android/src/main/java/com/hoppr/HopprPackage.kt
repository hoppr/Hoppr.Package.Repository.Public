package com.hoppr

import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ViewManager
import com.hoppr.viewManagers.HopprViewManager
import com.hoppr.viewManagers.NativeHopprVideoViewManager


class HopprPackage : ReactPackage {
  override fun createNativeModules(reactContext: ReactApplicationContext): List<NativeModule> {
    return emptyList()
  }

  override fun createViewManagers(reactContext: ReactApplicationContext): List<ViewManager<*, *>> {
    return listOf(HopprViewManager(), NativeHopprVideoViewManager(reactContext))
  }
}
