package com.hoppr.extensions

import android.app.Activity
import android.content.Context
import android.content.ContextWrapper

fun Context.getActivity(): Activity? {
  if (this is Activity) return this
  return if (this is ContextWrapper) baseContext.getActivity() else null
}
