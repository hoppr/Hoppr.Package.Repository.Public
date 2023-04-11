package com.hoppr.extensions

import android.view.KeyEvent

fun KeyEvent.isPowerKey() = keyCode == KeyEvent.KEYCODE_POWER

fun KeyEvent.isHomeKey() = keyCode == KeyEvent.KEYCODE_HOME

fun KeyEvent.isPlayKey() = when (keyCode) {
  KeyEvent.KEYCODE_MEDIA_PLAY_PAUSE,
  KeyEvent.KEYCODE_BUTTON_A,
  KeyEvent.KEYCODE_ENTER,
  KeyEvent.KEYCODE_NUMPAD_5,
  KeyEvent.KEYCODE_DPAD_CENTER -> true
  else -> false
}

fun KeyEvent.isPlayKeyDown() = isPlayKey() && action == KeyEvent.ACTION_DOWN

fun KeyEvent.isPlayKeyUp() = isPlayKey() && action == KeyEvent.ACTION_UP

fun KeyEvent.isHomeKeyDown() = isHomeKey() && action == KeyEvent.ACTION_DOWN

fun KeyEvent.isHomeKeyUp() = isHomeKey() && action == KeyEvent.ACTION_UP

fun KeyEvent.isPowerKeyDown() = isPowerKey() && action == KeyEvent.ACTION_DOWN

fun KeyEvent.isPowerKeyUp() = isPowerKey() && action == KeyEvent.ACTION_UP
