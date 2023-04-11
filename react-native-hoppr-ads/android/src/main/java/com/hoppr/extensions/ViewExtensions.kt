package com.hoppr.extensions

import android.view.View

fun View.reLayout(measuredWidth: Int, measuredHeight: Int) {
  measure(
    View.MeasureSpec.makeMeasureSpec(measuredWidth, View.MeasureSpec.EXACTLY),
    View.MeasureSpec.makeMeasureSpec(measuredHeight, View.MeasureSpec.EXACTLY)
  )

  layout(left, top, measuredWidth, measuredHeight)
}
