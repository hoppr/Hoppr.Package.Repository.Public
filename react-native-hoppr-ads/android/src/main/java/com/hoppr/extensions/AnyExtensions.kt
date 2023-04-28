package com.hoppr.extensions

fun Any.getInheritanceClasses(): ArrayList<String?> {
  val inheritanceClasses = arrayListOf<String?>()
  var currentClass: Class<*>? = this::class.java

  while (currentClass != null) {
    inheritanceClasses.add(currentClass.canonicalName)
    currentClass = currentClass.superclass
  }

  return inheritanceClasses
}
