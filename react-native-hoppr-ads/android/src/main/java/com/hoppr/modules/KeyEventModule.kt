package com.hoppr.modules

import android.app.Instrumentation
import android.os.Handler
import android.util.Log
import android.view.KeyEvent
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import java.util.*


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

    Log.d("maxdebug",  "dispatchKeyEvent source " + keyEvent?.source)

    if(keyEvent?.source == 89653){
      return false
    }

    var shouldExecuteKey = false
    Log.d("maxdebug", "shouldExecuteKey $shouldExecuteKey ${keyEvent.hashCode()}")

    if(shouldExecuteKey){
      Log.d("maxdebug", "B")

      return false
    }else{
      holdedKeyEvents.add(keyEvent)
      keyEvent?.source = 89653
      Handler().postDelayed({
        Thread {
          // might require this permission at a system level or inject key in other apps: android.permission.INJECT_EVENTS
          var ins = Instrumentation()
          ins.sendKeySync(keyEvent)
        }.start()
      }, 2000)

      Log.d("maxdebug", "C $currentActivity")

      return true
    }
  }
}



