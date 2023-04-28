package com.hoppr.extensions

fun StringBuilder.appendIfNotEmpty(prefix: String, value: String?) {
  value?.takeIf { it.isNotEmpty() && it != "null" }?.let { nonEmptyValue ->
    append(" | $prefix:$nonEmptyValue")
  }
}
