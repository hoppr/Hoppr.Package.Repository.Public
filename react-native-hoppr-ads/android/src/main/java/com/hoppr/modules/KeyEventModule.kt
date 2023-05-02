package com.hoppr.modules

import android.view.KeyEvent
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule


class KeyEventModule(private val reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

  override fun getName() = "KeyEventModule"

  companion object {
    @JvmField
    var keyEventModuleInstance : KeyEventModule? = null

    @JvmStatic
    fun initKeyEventModule(reactContext: ReactApplicationContext): KeyEventModule {
      keyEventModuleInstance = KeyEventModule(reactContext)
      return keyEventModuleInstance!!
    }

    @JvmStatic
    fun getInstance(): KeyEventModule? {
      return keyEventModuleInstance
    }
  }

  fun dispatchKeyEvent(keyEvent: KeyEvent?): Boolean {
    if (!reactContext.hasActiveReactInstance()) {
      return false
    }

    // if(keyEvent?.isPlayKey() == true){
    //   if(keyEvent.isPlayKeyDown() == true){
    //     currentActivity?.currentFocus?.performClick() // todo works but not yet ready for production
    //   }

    //   return true
    // }else{
    //   return false
    // }

    return false
  }
}
