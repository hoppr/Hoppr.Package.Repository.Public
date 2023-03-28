import { Platform, Dimensions, View, Image, StyleSheet, requireNativeComponent, AppState, Linking, PixelRatio, Pressable } from 'react-native';
import 'react-native-get-random-values';
import React, { createRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UUIDUtils } from '@hoppr/hoppr-common';
import { ServicesClient } from '@hoppr/hoppr-services';
import { HopprInternalEvents, HopprAnalytics, HopprEvents } from '@hoppr/hoppr-analytics';
export { ContentTypes, HopprEvents, ScreenTypes, StreamTypes } from '@hoppr/hoppr-analytics';
import { releaseCapture, captureScreen } from 'react-native-view-shot';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { WebView } from 'react-native-webview';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global$d =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

var objectGetOwnPropertyDescriptor = {};

var fails$g = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$f = fails$g;

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails$f(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

var fails$e = fails$g;

var functionBindNative = !fails$e(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var NATIVE_BIND$2 = functionBindNative;

var call$b = Function.prototype.call;

var functionCall = NATIVE_BIND$2 ? call$b.bind(call$b) : function () {
  return call$b.apply(call$b, arguments);
};

var objectPropertyIsEnumerable = {};

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor$1 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$1(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

var createPropertyDescriptor$2 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var NATIVE_BIND$1 = functionBindNative;

var FunctionPrototype$2 = Function.prototype;
var call$a = FunctionPrototype$2.call;
var uncurryThisWithBind = NATIVE_BIND$1 && FunctionPrototype$2.bind.bind(call$a, call$a);

var functionUncurryThis = NATIVE_BIND$1 ? uncurryThisWithBind : function (fn) {
  return function () {
    return call$a.apply(fn, arguments);
  };
};

var uncurryThis$g = functionUncurryThis;

var toString$7 = uncurryThis$g({}.toString);
var stringSlice$5 = uncurryThis$g(''.slice);

var classofRaw$2 = function (it) {
  return stringSlice$5(toString$7(it), 8, -1);
};

var uncurryThis$f = functionUncurryThis;
var fails$d = fails$g;
var classof$4 = classofRaw$2;

var $Object$3 = Object;
var split = uncurryThis$f(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails$d(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object$3('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$4(it) == 'String' ? split(it, '') : $Object$3(it);
} : $Object$3;

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
var isNullOrUndefined$4 = function (it) {
  return it === null || it === undefined;
};

var isNullOrUndefined$3 = isNullOrUndefined$4;

var $TypeError$7 = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible$6 = function (it) {
  if (isNullOrUndefined$3(it)) throw $TypeError$7("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings
var IndexedObject$1 = indexedObject;
var requireObjectCoercible$5 = requireObjectCoercible$6;

var toIndexedObject$4 = function (it) {
  return IndexedObject$1(requireObjectCoercible$5(it));
};

var documentAll$2 = typeof document == 'object' && document.all;

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
var IS_HTMLDDA = typeof documentAll$2 == 'undefined' && documentAll$2 !== undefined;

var documentAll_1 = {
  all: documentAll$2,
  IS_HTMLDDA: IS_HTMLDDA
};

var $documentAll$1 = documentAll_1;

var documentAll$1 = $documentAll$1.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
var isCallable$d = $documentAll$1.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll$1;
} : function (argument) {
  return typeof argument == 'function';
};

var isCallable$c = isCallable$d;
var $documentAll = documentAll_1;

var documentAll = $documentAll.all;

var isObject$6 = $documentAll.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable$c(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable$c(it);
};

var global$c = global$d;
var isCallable$b = isCallable$d;

var aFunction = function (argument) {
  return isCallable$b(argument) ? argument : undefined;
};

var getBuiltIn$3 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$c[namespace]) : global$c[namespace] && global$c[namespace][method];
};

var uncurryThis$e = functionUncurryThis;

var objectIsPrototypeOf = uncurryThis$e({}.isPrototypeOf);

var engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

var global$b = global$d;
var userAgent = engineUserAgent;

var process = global$b.process;
var Deno = global$b.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

var engineV8Version = version;

/* eslint-disable es/no-symbol -- required for testing */

var V8_VERSION = engineV8Version;
var fails$c = fails$g;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$c(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

/* eslint-disable es/no-symbol -- required for testing */

var NATIVE_SYMBOL$1 = symbolConstructorDetection;

var useSymbolAsUid = NATIVE_SYMBOL$1
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';

var getBuiltIn$2 = getBuiltIn$3;
var isCallable$a = isCallable$d;
var isPrototypeOf$1 = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

var $Object$2 = Object;

var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$2('Symbol');
  return isCallable$a($Symbol) && isPrototypeOf$1($Symbol.prototype, $Object$2(it));
};

var $String$3 = String;

var tryToString$1 = function (argument) {
  try {
    return $String$3(argument);
  } catch (error) {
    return 'Object';
  }
};

var isCallable$9 = isCallable$d;
var tryToString = tryToString$1;

var $TypeError$6 = TypeError;

// `Assert: IsCallable(argument) is true`
var aCallable$1 = function (argument) {
  if (isCallable$9(argument)) return argument;
  throw $TypeError$6(tryToString(argument) + ' is not a function');
};

var aCallable = aCallable$1;
var isNullOrUndefined$2 = isNullOrUndefined$4;

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
var getMethod$3 = function (V, P) {
  var func = V[P];
  return isNullOrUndefined$2(func) ? undefined : aCallable(func);
};

var call$9 = functionCall;
var isCallable$8 = isCallable$d;
var isObject$5 = isObject$6;

var $TypeError$5 = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$8(fn = input.toString) && !isObject$5(val = call$9(fn, input))) return val;
  if (isCallable$8(fn = input.valueOf) && !isObject$5(val = call$9(fn, input))) return val;
  if (pref !== 'string' && isCallable$8(fn = input.toString) && !isObject$5(val = call$9(fn, input))) return val;
  throw $TypeError$5("Can't convert object to primitive value");
};

var shared$4 = {exports: {}};

var global$a = global$d;

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$3 = Object.defineProperty;

var defineGlobalProperty$3 = function (key, value) {
  try {
    defineProperty$3(global$a, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global$a[key] = value;
  } return value;
};

var global$9 = global$d;
var defineGlobalProperty$2 = defineGlobalProperty$3;

var SHARED = '__core-js_shared__';
var store$3 = global$9[SHARED] || defineGlobalProperty$2(SHARED, {});

var sharedStore = store$3;

var store$2 = sharedStore;

(shared$4.exports = function (key, value) {
  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.29.1',
  mode: 'global',
  copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.29.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

var requireObjectCoercible$4 = requireObjectCoercible$6;

var $Object$1 = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject$3 = function (argument) {
  return $Object$1(requireObjectCoercible$4(argument));
};

var uncurryThis$d = functionUncurryThis;
var toObject$2 = toObject$3;

var hasOwnProperty = uncurryThis$d({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$2(it), key);
};

var uncurryThis$c = functionUncurryThis;

var id = 0;
var postfix = Math.random();
var toString$6 = uncurryThis$c(1.0.toString);

var uid$2 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$6(++id + postfix, 36);
};

var global$8 = global$d;
var shared$3 = shared$4.exports;
var hasOwn$7 = hasOwnProperty_1;
var uid$1 = uid$2;
var NATIVE_SYMBOL = symbolConstructorDetection;
var USE_SYMBOL_AS_UID = useSymbolAsUid;

var Symbol$1 = global$8.Symbol;
var WellKnownSymbolsStore = shared$3('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1['for'] || Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;

var wellKnownSymbol$8 = function (name) {
  if (!hasOwn$7(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn$7(Symbol$1, name)
      ? Symbol$1[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};

var call$8 = functionCall;
var isObject$4 = isObject$6;
var isSymbol$1 = isSymbol$2;
var getMethod$2 = getMethod$3;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$7 = wellKnownSymbol$8;

var $TypeError$4 = TypeError;
var TO_PRIMITIVE = wellKnownSymbol$7('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
var toPrimitive$1 = function (input, pref) {
  if (!isObject$4(input) || isSymbol$1(input)) return input;
  var exoticToPrim = getMethod$2(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$8(exoticToPrim, input, pref);
    if (!isObject$4(result) || isSymbol$1(result)) return result;
    throw $TypeError$4("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

var toPrimitive = toPrimitive$1;
var isSymbol = isSymbol$2;

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
var toPropertyKey$2 = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};

var global$7 = global$d;
var isObject$3 = isObject$6;

var document$1 = global$7.document;
// typeof document.createElement is 'object' in old IE
var EXISTS$1 = isObject$3(document$1) && isObject$3(document$1.createElement);

var documentCreateElement$1 = function (it) {
  return EXISTS$1 ? document$1.createElement(it) : {};
};

var DESCRIPTORS$8 = descriptors;
var fails$b = fails$g;
var createElement = documentCreateElement$1;

// Thanks to IE8 for its funny defineProperty
var ie8DomDefine = !DESCRIPTORS$8 && !fails$b(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

var DESCRIPTORS$7 = descriptors;
var call$7 = functionCall;
var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
var createPropertyDescriptor$1 = createPropertyDescriptor$2;
var toIndexedObject$3 = toIndexedObject$4;
var toPropertyKey$1 = toPropertyKey$2;
var hasOwn$6 = hasOwnProperty_1;
var IE8_DOM_DEFINE$1 = ie8DomDefine;

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$7 ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$3(O);
  P = toPropertyKey$1(P);
  if (IE8_DOM_DEFINE$1) try {
    return $getOwnPropertyDescriptor$1(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn$6(O, P)) return createPropertyDescriptor$1(!call$7(propertyIsEnumerableModule$1.f, O, P), O[P]);
};

var objectDefineProperty = {};

var DESCRIPTORS$6 = descriptors;
var fails$a = fails$g;

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
var v8PrototypeDefineBug = DESCRIPTORS$6 && fails$a(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});

var isObject$2 = isObject$6;

var $String$2 = String;
var $TypeError$3 = TypeError;

// `Assert: Type(argument) is Object`
var anObject$9 = function (argument) {
  if (isObject$2(argument)) return argument;
  throw $TypeError$3($String$2(argument) + ' is not an object');
};

var DESCRIPTORS$5 = descriptors;
var IE8_DOM_DEFINE = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
var anObject$8 = anObject$9;
var toPropertyKey = toPropertyKey$2;

var $TypeError$2 = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE$1 = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
objectDefineProperty.f = DESCRIPTORS$5 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
  anObject$8(O);
  P = toPropertyKey(P);
  anObject$8(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject$8(O);
  P = toPropertyKey(P);
  anObject$8(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError$2('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var DESCRIPTORS$4 = descriptors;
var definePropertyModule$3 = objectDefineProperty;
var createPropertyDescriptor = createPropertyDescriptor$2;

var createNonEnumerableProperty$3 = DESCRIPTORS$4 ? function (object, key, value) {
  return definePropertyModule$3.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var makeBuiltIn$2 = {exports: {}};

var DESCRIPTORS$3 = descriptors;
var hasOwn$5 = hasOwnProperty_1;

var FunctionPrototype$1 = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS$3 && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn$5(FunctionPrototype$1, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS$3 || (DESCRIPTORS$3 && getDescriptor(FunctionPrototype$1, 'name').configurable));

var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var uncurryThis$b = functionUncurryThis;
var isCallable$7 = isCallable$d;
var store$1 = sharedStore;

var functionToString = uncurryThis$b(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable$7(store$1.inspectSource)) {
  store$1.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource$1 = store$1.inspectSource;

var global$6 = global$d;
var isCallable$6 = isCallable$d;

var WeakMap$1 = global$6.WeakMap;

var weakMapBasicDetection = isCallable$6(WeakMap$1) && /native code/.test(String(WeakMap$1));

var shared$2 = shared$4.exports;
var uid = uid$2;

var keys = shared$2('keys');

var sharedKey$2 = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

var hiddenKeys$4 = {};

var NATIVE_WEAK_MAP = weakMapBasicDetection;
var global$5 = global$d;
var isObject$1 = isObject$6;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$3;
var hasOwn$4 = hasOwnProperty_1;
var shared$1 = sharedStore;
var sharedKey$1 = sharedKey$2;
var hiddenKeys$3 = hiddenKeys$4;

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$1 = global$5.TypeError;
var WeakMap = global$5.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$1(it) || (state = get(it)).type !== TYPE) {
      throw TypeError$1('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared$1.state) {
  var store = shared$1.state || (shared$1.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw TypeError$1(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey$1('state');
  hiddenKeys$3[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn$4(it, STATE)) throw TypeError$1(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$2(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn$4(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn$4(it, STATE);
  };
}

var internalState = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

var uncurryThis$a = functionUncurryThis;
var fails$9 = fails$g;
var isCallable$5 = isCallable$d;
var hasOwn$3 = hasOwnProperty_1;
var DESCRIPTORS$2 = descriptors;
var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
var inspectSource = inspectSource$1;
var InternalStateModule = internalState;

var enforceInternalState = InternalStateModule.enforce;
var getInternalState$1 = InternalStateModule.get;
var $String$1 = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$2 = Object.defineProperty;
var stringSlice$4 = uncurryThis$a(''.slice);
var replace$2 = uncurryThis$a(''.replace);
var join = uncurryThis$a([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS$2 && !fails$9(function () {
  return defineProperty$2(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn$1 = makeBuiltIn$2.exports = function (value, name, options) {
  if (stringSlice$4($String$1(name), 0, 7) === 'Symbol(') {
    name = '[' + replace$2($String$1(name), /^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn$3(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS$2) defineProperty$2(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn$3(options, 'arity') && value.length !== options.arity) {
    defineProperty$2(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn$3(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS$2) defineProperty$2(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn$3(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn$1(function toString() {
  return isCallable$5(this) && getInternalState$1(this).source || inspectSource(this);
}, 'toString');

var isCallable$4 = isCallable$d;
var definePropertyModule$2 = objectDefineProperty;
var makeBuiltIn = makeBuiltIn$2.exports;
var defineGlobalProperty$1 = defineGlobalProperty$3;

var defineBuiltIn$3 = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable$4(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty$1(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule$2.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};

var objectGetOwnPropertyNames = {};

var ceil = Math.ceil;
var floor$1 = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
var mathTrunc = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor$1 : ceil)(n);
};

var trunc = mathTrunc;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
var toIntegerOrInfinity$4 = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};

var toIntegerOrInfinity$3 = toIntegerOrInfinity$4;

var max$1 = Math.max;
var min$2 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex$1 = function (index, length) {
  var integer = toIntegerOrInfinity$3(index);
  return integer < 0 ? max$1(integer + length, 0) : min$2(integer, length);
};

var toIntegerOrInfinity$2 = toIntegerOrInfinity$4;

var min$1 = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength$3 = function (argument) {
  return argument > 0 ? min$1(toIntegerOrInfinity$2(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength$2 = toLength$3;

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
var lengthOfArrayLike$1 = function (obj) {
  return toLength$2(obj.length);
};

var toIndexedObject$2 = toIndexedObject$4;
var toAbsoluteIndex = toAbsoluteIndex$1;
var lengthOfArrayLike = lengthOfArrayLike$1;

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod$1 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$2($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod$1(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$1(false)
};

var uncurryThis$9 = functionUncurryThis;
var hasOwn$2 = hasOwnProperty_1;
var toIndexedObject$1 = toIndexedObject$4;
var indexOf$1 = arrayIncludes.indexOf;
var hiddenKeys$2 = hiddenKeys$4;

var push$1 = uncurryThis$9([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$1(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$2(hiddenKeys$2, key) && hasOwn$2(O, key) && push$1(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn$2(O, key = names[i++])) {
    ~indexOf$1(result, key) || push$1(result, key);
  }
  return result;
};

// IE8- don't enum bug keys
var enumBugKeys$3 = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];

var internalObjectKeys$1 = objectKeysInternal;
var enumBugKeys$2 = enumBugKeys$3;

var hiddenKeys$1 = enumBugKeys$2.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys$1(O, hiddenKeys$1);
};

var objectGetOwnPropertySymbols = {};

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

var getBuiltIn$1 = getBuiltIn$3;
var uncurryThis$8 = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
var anObject$7 = anObject$9;

var concat$2 = uncurryThis$8([].concat);

// all object keys, includes non-enumerable and symbols
var ownKeys$1 = getBuiltIn$1('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject$7(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
  return getOwnPropertySymbols ? concat$2(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn$1 = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule$1 = objectDefineProperty;

var copyConstructorProperties$1 = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule$1.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn$1(target, key) && !(exceptions && hasOwn$1(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var fails$8 = fails$g;
var isCallable$3 = isCallable$d;

var replacement = /#|\.prototype\./;

var isForced$1 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable$3(detection) ? fails$8(detection)
    : !!detection;
};

var normalize = isForced$1.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$1.data = {};
var NATIVE = isForced$1.NATIVE = 'N';
var POLYFILL = isForced$1.POLYFILL = 'P';

var isForced_1 = isForced$1;

var global$4 = global$d;
var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$3;
var defineBuiltIn$2 = defineBuiltIn$3;
var defineGlobalProperty = defineGlobalProperty$3;
var copyConstructorProperties = copyConstructorProperties$1;
var isForced = isForced_1;

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global$4;
  } else if (STATIC) {
    target = global$4[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global$4[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty$1(sourceProperty, 'sham', true);
    }
    defineBuiltIn$2(target, key, sourceProperty, options);
  }
};

var wellKnownSymbol$6 = wellKnownSymbol$8;

var TO_STRING_TAG$1 = wellKnownSymbol$6('toStringTag');
var test = {};

test[TO_STRING_TAG$1] = 'z';

var toStringTagSupport = String(test) === '[object z]';

var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var isCallable$2 = isCallable$d;
var classofRaw$1 = classofRaw$2;
var wellKnownSymbol$5 = wellKnownSymbol$8;

var TO_STRING_TAG = wellKnownSymbol$5('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw$1(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
var classof$3 = TO_STRING_TAG_SUPPORT ? classofRaw$1 : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw$1(O)
    // ES3 arguments fallback
    : (result = classofRaw$1(O)) == 'Object' && isCallable$2(O.callee) ? 'Arguments' : result;
};

var classof$2 = classof$3;

var $String = String;

var toString$5 = function (argument) {
  if (classof$2(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};

var anObject$6 = anObject$9;

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
var regexpFlags$1 = function () {
  var that = anObject$6(this);
  var result = '';
  if (that.hasIndices) result += 'd';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.unicodeSets) result += 'v';
  if (that.sticky) result += 'y';
  return result;
};

var fails$7 = fails$g;
var global$3 = global$d;

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp$2 = global$3.RegExp;

var UNSUPPORTED_Y$1 = fails$7(function () {
  var re = $RegExp$2('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY = UNSUPPORTED_Y$1 || fails$7(function () {
  return !$RegExp$2('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y$1 || fails$7(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp$2('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});

var regexpStickyHelpers = {
  BROKEN_CARET: BROKEN_CARET,
  MISSED_STICKY: MISSED_STICKY,
  UNSUPPORTED_Y: UNSUPPORTED_Y$1
};

var objectDefineProperties = {};

var internalObjectKeys = objectKeysInternal;
var enumBugKeys$1 = enumBugKeys$3;

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
var objectKeys$2 = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys$1);
};

var DESCRIPTORS$1 = descriptors;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var definePropertyModule = objectDefineProperty;
var anObject$5 = anObject$9;
var toIndexedObject = toIndexedObject$4;
var objectKeys$1 = objectKeys$2;

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
objectDefineProperties.f = DESCRIPTORS$1 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$5(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys$1(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};

var getBuiltIn = getBuiltIn$3;

var html$1 = getBuiltIn('document', 'documentElement');

/* global ActiveXObject -- old IE, WSH */

var anObject$4 = anObject$9;
var definePropertiesModule = objectDefineProperties;
var enumBugKeys = enumBugKeys$3;
var hiddenKeys = hiddenKeys$4;
var html = html$1;
var documentCreateElement = documentCreateElement$1;
var sharedKey = sharedKey$2;

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
var objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject$4(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};

var fails$6 = fails$g;
var global$2 = global$d;

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp$1 = global$2.RegExp;

var regexpUnsupportedDotAll = fails$6(function () {
  var re = $RegExp$1('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});

var fails$5 = fails$g;
var global$1 = global$d;

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global$1.RegExp;

var regexpUnsupportedNcg = fails$5(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call$6 = functionCall;
var uncurryThis$7 = functionUncurryThis;
var toString$4 = toString$5;
var regexpFlags = regexpFlags$1;
var stickyHelpers = regexpStickyHelpers;
var shared = shared$4.exports;
var create$1 = objectCreate;
var getInternalState = internalState.get;
var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
var UNSUPPORTED_NCG = regexpUnsupportedNcg;

var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt$3 = uncurryThis$7(''.charAt);
var indexOf = uncurryThis$7(''.indexOf);
var replace$1 = uncurryThis$7(''.replace);
var stringSlice$3 = uncurryThis$7(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call$6(nativeExec, re1, 'a');
  call$6(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString$4(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call$6(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = call$6(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace$1(flags, 'y', '');
      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice$3(str, re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$3(str, re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = call$6(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice$3(match.input, charsAdded);
        match[0] = stringSlice$3(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
      call$6(nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create$1(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

var regexpExec$2 = patchedExec;

var $$3 = _export;
var exec = regexpExec$2;

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$$3({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});

var classofRaw = classofRaw$2;
var uncurryThis$6 = functionUncurryThis;

var functionUncurryThisClause = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw(fn) === 'Function') return uncurryThis$6(fn);
};

// TODO: Remove from `core-js@4` since it's moved to entry points

var uncurryThis$5 = functionUncurryThisClause;
var defineBuiltIn$1 = defineBuiltIn$3;
var regexpExec$1 = regexpExec$2;
var fails$4 = fails$g;
var wellKnownSymbol$4 = wellKnownSymbol$8;
var createNonEnumerableProperty = createNonEnumerableProperty$3;

var SPECIES = wellKnownSymbol$4('species');
var RegExpPrototype$2 = RegExp.prototype;

var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol$4(KEY);

  var DELEGATES_TO_SYMBOL = !fails$4(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$4(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    FORCED
  ) {
    var uncurriedNativeRegExpMethod = uncurryThis$5(/./[SYMBOL]);
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = uncurryThis$5(nativeMethod);
      var $exec = regexp.exec;
      if ($exec === regexpExec$1 || $exec === RegExpPrototype$2.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: uncurriedNativeRegExpMethod(regexp, str, arg2) };
        }
        return { done: true, value: uncurriedNativeMethod(str, regexp, arg2) };
      }
      return { done: false };
    });

    defineBuiltIn$1(String.prototype, KEY, methods[0]);
    defineBuiltIn$1(RegExpPrototype$2, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype$2[SYMBOL], 'sham', true);
};

var uncurryThis$4 = functionUncurryThis;
var toIntegerOrInfinity$1 = toIntegerOrInfinity$4;
var toString$3 = toString$5;
var requireObjectCoercible$3 = requireObjectCoercible$6;

var charAt$2 = uncurryThis$4(''.charAt);
var charCodeAt = uncurryThis$4(''.charCodeAt);
var stringSlice$2 = uncurryThis$4(''.slice);

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString$3(requireObjectCoercible$3($this));
    var position = toIntegerOrInfinity$1(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt$2(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice$2(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

var stringMultibyte = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};

var charAt$1 = stringMultibyte.charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
var advanceStringIndex$2 = function (S, index, unicode) {
  return index + (unicode ? charAt$1(S, index).length : 1);
};

var call$5 = functionCall;
var anObject$3 = anObject$9;
var isCallable$1 = isCallable$d;
var classof$1 = classofRaw$2;
var regexpExec = regexpExec$2;

var $TypeError$1 = TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
var regexpExecAbstract = function (R, S) {
  var exec = R.exec;
  if (isCallable$1(exec)) {
    var result = call$5(exec, R, S);
    if (result !== null) anObject$3(result);
    return result;
  }
  if (classof$1(R) === 'RegExp') return call$5(regexpExec, R, S);
  throw $TypeError$1('RegExp#exec called on incompatible receiver');
};

var call$4 = functionCall;
var fixRegExpWellKnownSymbolLogic$1 = fixRegexpWellKnownSymbolLogic;
var anObject$2 = anObject$9;
var isNullOrUndefined$1 = isNullOrUndefined$4;
var toLength$1 = toLength$3;
var toString$2 = toString$5;
var requireObjectCoercible$2 = requireObjectCoercible$6;
var getMethod$1 = getMethod$3;
var advanceStringIndex$1 = advanceStringIndex$2;
var regExpExec$1 = regexpExecAbstract;

// @@match logic
fixRegExpWellKnownSymbolLogic$1('match', function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible$2(this);
      var matcher = isNullOrUndefined$1(regexp) ? undefined : getMethod$1(regexp, MATCH);
      return matcher ? call$4(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString$2(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject$2(this);
      var S = toString$2(string);
      var res = maybeCallNative(nativeMatch, rx, S);

      if (res.done) return res.value;

      if (!rx.global) return regExpExec$1(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec$1(rx, S)) !== null) {
        var matchStr = toString$2(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex$1(S, toLength$1(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

const mapAdSlotResponseToAdSlot = adSlotResponse => {
  const sizeArray = [];
  adSlotResponse.adSize.forEach(element => {
    sizeArray.push([element.width, element.height]);
  });
  const adSlot = {
    adSize: sizeArray,
    adType: adSlotResponse.adType,
    gamAdUnit: adSlotResponse.adUnit,
    hopprAdUnit: adSlotResponse.adSlotId
    // googletagSlot: null,
  };

  return adSlot;
};

const config = {
  adSlots: '',
  config: {
    appId: '',
    apiKey: '',
    userId: '',
    enablePIP: false
  },
  hopprInternalUserId: ''
};
const HopprAdContext = /*#__PURE__*/React.createContext(config);

var call$3 = functionCall;
var hasOwn = hasOwnProperty_1;
var isPrototypeOf = objectIsPrototypeOf;
var regExpFlags = regexpFlags$1;

var RegExpPrototype$1 = RegExp.prototype;

var regexpGetFlags = function (R) {
  var flags = R.flags;
  return flags === undefined && !('flags' in RegExpPrototype$1) && !hasOwn(R, 'flags') && isPrototypeOf(RegExpPrototype$1, R)
    ? call$3(regExpFlags, R) : flags;
};

var PROPER_FUNCTION_NAME = functionName.PROPER;
var defineBuiltIn = defineBuiltIn$3;
var anObject$1 = anObject$9;
var $toString = toString$5;
var fails$3 = fails$g;
var getRegExpFlags = regexpGetFlags;

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails$3(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME && nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  defineBuiltIn(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject$1(this);
    var pattern = $toString(R.source);
    var flags = $toString(getRegExpFlags(R));
    return '/' + pattern + '/' + flags;
  }, { unsafe: true });
}

class AnalyticsUtils {
  static getStandardProperties() {
    const record = {};
    record['platformOs'] = Platform.OS;
    record['isTv'] = Platform.isTV;
    record['platformVersion'] = Platform.Version;
    record['reactNativeVersion'] = Platform.constants.reactNativeVersion.major + '.' + Platform.constants.reactNativeVersion.minor + '.' + Platform.constants.reactNativeVersion.patch;
    return record;
  }
  static getStandardBannerProperties(instanceUUID, userAgent, props, state) {
    var _a, _b;
    const record = this.getStandardProperties();
    record['hopprAdUnitId'] = props.adUnitId;
    record['uuid'] = instanceUUID;
    if (props.adUnitSizes) record['sizes'] = (_a = props.adUnitSizes) === null || _a === void 0 ? void 0 : _a.toString();
    if (state.adSize) record['determinedSize'] = (_b = state.adSize) === null || _b === void 0 ? void 0 : _b.toString();
    if (userAgent) record['userAgent'] = userAgent;
    if (props.targetProperties) {
      record['targeting'] = JSON.stringify(props.targetProperties);
    }
    return record;
  }
  static getDeepLinkRecord(instanceUUID, userAgent, props, state, url, supported, clickThruLink) {
    const record = this.getStandardBannerProperties(instanceUUID, userAgent, props, state);
    record['url'] = url;
    record['supported'] = supported;
    if (clickThruLink) {
      record['clickThruLink'] = clickThruLink;
    }
    return record;
  }
  static getDeepLinkErrorRecord(instanceUUID, userAgent, props, state, error) {
    const record = this.getStandardBannerProperties(instanceUUID, userAgent, props, state);
    record['error'] = error;
    return record;
  }
  static mapGptEventNameToHopprEvent(eventName) {
    switch (eventName) {
      case 'impressionViewable':
        return HopprInternalEvents.HopprInternalGptImpressionView;
      case 'slotOnload':
        return HopprInternalEvents.HopprInternalGptSlotOnLoad;
      case 'slotRenderEnded':
        return HopprInternalEvents.HopprInternalGptRenderEnded;
      case 'slotRequested':
        return HopprInternalEvents.HopprInternalGptRequested;
      case 'slotResponseReceived':
        return HopprInternalEvents.HopprInternalGptResponseReceived;
      case 'slotVisibilityChanged':
        return HopprInternalEvents.HopprInternalGptVisibilityChange;
    }
    return null;
  }
  static getGptEventRecord(instanceUUID, userAgent, props, state, gptEvent) {
    const record = this.getStandardBannerProperties(instanceUUID, userAgent, props, state);
    const responseInfo = gptEvent.responseInfo;
    record['adPath'] = gptEvent.adPath;
    record['serviceName'] = gptEvent.event.serviceName;
    if (gptEvent.targeting) {
      //const objFromMap = Object.fromEntries(targeting);
      record['gptTargeting'] = JSON.stringify(gptEvent.targeting);
    }
    if (responseInfo) {
      if (responseInfo.advertiserId) record['advertiserId'] = responseInfo.advertiserId;
      if (responseInfo.campaignId) record['campaignId'] = responseInfo.campaignId;
      if (responseInfo.lineItemId) record['lineItemId'] = responseInfo.lineItemId;
      if (responseInfo.creativeTemplateId) record['creativeTemplateId'] = responseInfo.creativeTemplateId;
      if (responseInfo.creativeId) record['creativeId'] = responseInfo.creativeId;
    }
    switch (gptEvent.name) {
      case 'slotVisibilityChanged':
        {
          const slotVisibilityChangedEvent = gptEvent.event;
          record['inViewPercentage'] = slotVisibilityChangedEvent.inViewPercentage;
          break;
        }
      case 'slotRenderEnded':
        {
          const slotRenderEndedEvent = gptEvent.event;
          record['slotContentChanged'] = slotRenderEndedEvent.slotContentChanged; // if content of slot was changed
          record['isEmpty'] = slotRenderEndedEvent.isEmpty;
          // if (slotRenderEndedEvent.size)
          //   record['size'] = slotRenderEndedEvent.size;
          break;
        }
    }
    return record;
  }
}

/* eslint-disable @typescript-eslint/no-var-requires */
class HopprPIP extends React.Component {
  constructor(props) {
    super(props);
    this.pipWidth = 0;
    this.pipHeight = 0;
    this.screenshotInterval = null;
    this.screenRatio = 0;
    this.state = {
      imageUrl: '',
      previousImageUrl: ''
    };
    this.screenRatio = Dimensions.get('window').width / Dimensions.get('window').height;
    if (!Platform.isTV) {
      this.pipWidth = 100;
    } else {
      this.pipWidth = 300;
    }
    this.pipHeight = this.pipWidth / this.screenRatio;
    this.startScreenshotInterval();
  }
  render() {
    if (this.state.imageUrl && this.state.imageUrl != '' && this.state.previousImageUrl && this.state.previousImageUrl != '') {
      return /*#__PURE__*/jsxs(View, {
        style: {
          position: 'absolute',
          marginLeft: Dimensions.get('window').width - this.pipWidth
          // width: this.pipWidth,
          // height: this.pipHeight,
          // backgroundColor: 'tr',
        },
        children: [/*#__PURE__*/jsx(Image, {
          fadeDuration: 0,
          style: {
            width: this.pipWidth,
            height: this.pipHeight,
            resizeMode: 'cover',
            position: 'absolute',
            borderColor: 'black',
            borderWidth: 2
          }
          // resizeMethod="auto"
          ,
          source: {
            uri: this.state.previousImageUrl
          }
        }), /*#__PURE__*/jsx(Image, {
          fadeDuration: 0,
          style: {
            width: this.pipWidth,
            height: this.pipHeight,
            resizeMode: 'cover',
            position: 'absolute',
            borderColor: 'black',
            borderWidth: 2
          }
          // resizeMethod="auto"
          ,
          source: {
            uri: this.state.imageUrl
          }
        })]
      });
    } else {
      return /*#__PURE__*/jsx(View, {});
    }
  }
  updateImageUrl(newImageUrl) {
    this.setState({
      previousImageUrl: this.state.imageUrl,
      imageUrl: newImageUrl
    });
    releaseCapture(this.state.previousImageUrl);
  }
  componentWillUnmount() {
    this.clearScreenshotInterval();
  }
  clearScreenshotInterval() {
    if (this.screenshotInterval) {
      clearInterval(this.screenshotInterval);
      this.screenshotInterval = null;
    }
  }
  startScreenshotInterval() {
    if (!this.screenshotInterval) {
      this.screenshotInterval = setInterval(() => {
        captureScreen({
          format: 'jpg',
          // format: 'raw',
          quality: 0.1
        }).then(uri => {
          // this.hopprPIPRef?.current?.updateImageUrl(uri);
          this.updateImageUrl(uri);
        }, error => console.log('Oops, snapshot failed', error));
      }, 200);
    }
  }
}

const videoStyle = StyleSheet.create({
  video: {
    width: 500,
    height: 500
  }
});
const HopprView = requireNativeComponent('HopprView');
class HopprAdProvider extends React.Component {
  // private viewShotRef: RefObject<ViewShot> = createRef();
  // private screenshotInterval: NodeJS.Timer | null = null;
  constructor(props) {
    super(props);
    this.isInternalUserIdReady = false;
    this.isAdSlotsReady = false;
    this.adSlots = '';
    this.hopprInternalUserId = '';
    this.hopprPIPRef = /*#__PURE__*/createRef();
    this.initHoppr = () => __awaiter(this, void 0, void 0, function* () {
      var _a, _b, _c;
      const request = {
        appID: this.props.config.appId,
        clientid: this.props.config.userId
      };
      try {
        console.log('initHoppr');
        const value = yield ServicesClient.get().update(request);
        console.log('initHoppr finish', (_b = (_a = value.data) === null || _a === void 0 ? void 0 : _a.advertSlots) === null || _b === void 0 ? void 0 : _b.length);
        if (value.data && !value.error) {
          const advertSlots = [];
          (_c = value.data) === null || _c === void 0 ? void 0 : _c.advertSlots.forEach(ad => {
            const advertSlot = mapAdSlotResponseToAdSlot(ad);
            advertSlots.push(advertSlot);
          });
          this.setAdSlots(JSON.stringify(advertSlots));
        } else {
          console.error('Error initializing Hoppr SDK', value.error);
        }
      } catch (err) {
        console.error('Error initializing Hoppr SDK', err);
      }
    });
    this.initAnalytics = (appId, apiKey, userId) => __awaiter(this, void 0, void 0, function* () {
      let hopprInternalUserId = '';
      try {
        const hopprId = yield AsyncStorage.getItem('hopprInternalUserId');
        if (hopprId !== null) {
          hopprInternalUserId = hopprId;
        } else {
          hopprInternalUserId = UUIDUtils.getID();
          try {
            yield AsyncStorage.setItem('hopprInternalUserId', hopprInternalUserId);
          } catch (e) {
            console.error('Unable to save data in AsyncStorage');
          }
        }
      } catch (e) {
        console.error('Unable to get data from AsyncStorage');
      }
      this.setHopprInternalUserId(hopprInternalUserId);
      const hopprUserAnalyticsDetails = {
        ppId: userId,
        userId: userId,
        hopprInternalUserId: hopprInternalUserId
      };
      const analyticsRequest = {
        apiKey: apiKey,
        appId: appId,
        appVersion: '0.0.1',
        user: hopprUserAnalyticsDetails,
        events: []
      };
      try {
        HopprAnalytics.init(analyticsRequest);
        HopprAnalytics.logInternalEvent(HopprInternalEvents.HopprInternalInit, AnalyticsUtils.getStandardProperties());
      } catch (err) {
        console.log('Error initializing analytics', err);
      }
    });
    this.state = {
      adSlots: '',
      config: props.config,
      hopprInternalUserId: ''
    };
    this.initHoppr();
    this.initAnalytics(props.config.appId, props.config.apiKey, props.config.userId);
  }
  // private onCapture = (uri: string) => {
  //   console.log('onCapture', uri);
  //   this.hopprPIPRef?.current?.updateImageUrl(uri);
  // };
  render() {
    return /*#__PURE__*/jsxs(HopprAdContext.Provider, {
      value: this.state,
      children: [this.props.children, this.getPIPComponent(), /*#__PURE__*/jsx(HopprView, {
        color: "#32a852",
        style: videoStyle.video
      }), /*#__PURE__*/jsx(View, {})]
    });
  }
  getPIPComponent() {
    if (this.props.config.enablePIP) {
      return /*#__PURE__*/jsx(HopprPIP, {
        ref: this.hopprPIPRef
      });
    } else {
      return /*#__PURE__*/jsx(View, {});
    }
  }
  componentDidMount() {
    this.appStateSubscription = AppState.addEventListener('change', nextAppState => {
      var _a, _b, _c, _d;
      console.log('HopprAdProvider', nextAppState);
      if (nextAppState.match(/inactive|background/)) {
        HopprAnalytics.sendBeaconNative(); // We send remainings event when app become inactive or in background
        (_b = (_a = this.hopprPIPRef) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.clearScreenshotInterval();
        // this.clearScreenshotInterval();
      } else if (nextAppState.match(/active/)) {
        (_d = (_c = this.hopprPIPRef) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.startScreenshotInterval();
        // this.startScreenshotInterval();
      } else ;
    });
  }
  componentWillUnmount() {
    var _a, _b, _c;
    (_a = this.appStateSubscription) === null || _a === void 0 ? void 0 : _a.remove();
    (_c = (_b = this.hopprPIPRef) === null || _b === void 0 ? void 0 : _b.current) === null || _c === void 0 ? void 0 : _c.clearScreenshotInterval();
    // this.clearScreenshotInterval();
  }
  // private clearScreenshotInterval() {
  //   if (this.screenshotInterval) {
  //     clearInterval(this.screenshotInterval);
  //     this.screenshotInterval = null;
  //   }
  // }
  // private startScreenshotInterval() {
  //   if (!this.screenshotInterval) {
  //     this.screenshotInterval = setInterval(() => {
  //       // captureScreen({
  //       //   format: 'jpg',
  //       //   // format: 'raw',
  //       //   quality: 0.2,
  //       // }).then(
  //       //   (uri) => {
  //       //     this.hopprPIPRef?.current?.updateImageUrl(uri);
  //       //   },
  //       //   (error) => console.log('Oops, snapshot failed', error)
  //       // );
  //       if (this.viewShotRef?.current?.capture) {
  //         this.viewShotRef.current.capture()?.then((uri) => {
  //           // console.log("do something with ", uri);
  //           this.hopprPIPRef?.current?.updateImageUrl(uri);
  //         });
  //       }
  //     }, 500);
  //   }
  // }
  setAdSlots(adSlots) {
    this.isAdSlotsReady = true;
    this.adSlots = adSlots;
    this.tryUpdateState();
  }
  setHopprInternalUserId(hopprInternalUserId) {
    this.isInternalUserIdReady = true;
    this.hopprInternalUserId = hopprInternalUserId;
    this.tryUpdateState();
  }
  tryUpdateState() {
    if (this.isInternalUserIdReady && this.isAdSlotsReady) {
      console.log('HopprAdProvider setState');
      this.setState({
        // TODO is it necessary? will be better in banners
        hopprInternalUserId: this.hopprInternalUserId,
        adSlots: this.adSlots
      });
    }
  }
}

var wellKnownSymbol$3 = wellKnownSymbol$8;
var create = objectCreate;
var defineProperty$1 = objectDefineProperty.f;

var UNSCOPABLES = wellKnownSymbol$3('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  defineProperty$1(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
var addToUnscopables$1 = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};

var $$2 = _export;
var $includes = arrayIncludes.includes;
var fails$2 = fails$g;
var addToUnscopables = addToUnscopables$1;

// FF99+ bug
var BROKEN_ON_SPARSE = fails$2(function () {
  // eslint-disable-next-line es/no-array-prototype-includes -- detection
  return !Array(1).includes();
});

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$$2({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');

var isObject = isObject$6;
var classof = classofRaw$2;
var wellKnownSymbol$2 = wellKnownSymbol$8;

var MATCH$1 = wellKnownSymbol$2('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
var isRegexp = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH$1]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};

var isRegExp = isRegexp;

var $TypeError = TypeError;

var notARegexp = function (it) {
  if (isRegExp(it)) {
    throw $TypeError("The method doesn't accept regular expressions");
  } return it;
};

var wellKnownSymbol$1 = wellKnownSymbol$8;

var MATCH = wellKnownSymbol$1('match');

var correctIsRegexpLogic = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};

var $$1 = _export;
var uncurryThis$3 = functionUncurryThis;
var notARegExp = notARegexp;
var requireObjectCoercible$1 = requireObjectCoercible$6;
var toString$1 = toString$5;
var correctIsRegExpLogic = correctIsRegexpLogic;

var stringIndexOf$1 = uncurryThis$3(''.indexOf);

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$$1({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~stringIndexOf$1(
      toString$1(requireObjectCoercible$1(this)),
      toString$1(notARegExp(searchString)),
      arguments.length > 1 ? arguments[1] : undefined
    );
  }
});

var DESCRIPTORS = descriptors;
var uncurryThis$2 = functionUncurryThis;
var call$2 = functionCall;
var fails$1 = fails$g;
var objectKeys = objectKeys$2;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var toObject$1 = toObject$3;
var IndexedObject = indexedObject;

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty = Object.defineProperty;
var concat$1 = uncurryThis$2([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
var objectAssign = !$assign || fails$1(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line es/no-symbol -- safe
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject$1(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? concat$1(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || call$2(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;

var $ = _export;
var assign = objectAssign;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign }, {
  assign: assign
});

var NATIVE_BIND = functionBindNative;

var FunctionPrototype = Function.prototype;
var apply$1 = FunctionPrototype.apply;
var call$1 = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call$1.bind(apply$1) : function () {
  return call$1.apply(apply$1, arguments);
});

var uncurryThis$1 = functionUncurryThis;
var toObject = toObject$3;

var floor = Math.floor;
var charAt = uncurryThis$1(''.charAt);
var replace = uncurryThis$1(''.replace);
var stringSlice$1 = uncurryThis$1(''.slice);
// eslint-disable-next-line redos/no-vulnerable -- safe
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
var getSubstitution$1 = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace(replacement, symbols, function (match, ch) {
    var capture;
    switch (charAt(ch, 0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return stringSlice$1(str, 0, position);
      case "'": return stringSlice$1(str, tailPos);
      case '<':
        capture = namedCaptures[stringSlice$1(ch, 1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};

var apply = functionApply;
var call = functionCall;
var uncurryThis = functionUncurryThis;
var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
var fails = fails$g;
var anObject = anObject$9;
var isCallable = isCallable$d;
var isNullOrUndefined = isNullOrUndefined$4;
var toIntegerOrInfinity = toIntegerOrInfinity$4;
var toLength = toLength$3;
var toString = toString$5;
var requireObjectCoercible = requireObjectCoercible$6;
var advanceStringIndex = advanceStringIndex$2;
var getMethod = getMethod$3;
var getSubstitution = getSubstitution$1;
var regExpExec = regexpExecAbstract;
var wellKnownSymbol = wellKnownSymbol$8;

var REPLACE = wellKnownSymbol('replace');
var max = Math.max;
var min = Math.min;
var concat = uncurryThis([].concat);
var push = uncurryThis([].push);
var stringIndexOf = uncurryThis(''.indexOf);
var stringSlice = uncurryThis(''.slice);

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
  return 'a'.replace(/./, '$0') === '$0';
})();

// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive
  return ''.replace(re, '$<a>') !== '7';
});

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = isNullOrUndefined(searchValue) ? undefined : getMethod(searchValue, REPLACE);
      return replacer
        ? call(replacer, searchValue, O, replaceValue)
        : call(nativeReplace, toString(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject(this);
      var S = toString(string);

      if (
        typeof replaceValue == 'string' &&
        stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 &&
        stringIndexOf(replaceValue, '$<') === -1
      ) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable(replaceValue);
      if (!functionalReplace) replaceValue = toString(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        push(results, result);
        if (!global) break;

        var matchStr = toString(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = toString(result[0]);
        var position = max(min(toIntegerOrInfinity(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat([matched], captures, position, S);
          if (namedCaptures !== undefined) push(replacerArgs, namedCaptures);
          var replacement = toString(apply(replaceValue, undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + stringSlice(S, nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

const stringTemplate = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <base href="/" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="initial-scale=%INITIAL_SCALE%, user-scalable=no">

  <style>
    html,
    body {
      margin: 0;
      padding: 0;
    }
  </style>

  <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>

  <script type="text/javascript">
    var adUnit = '%AD_UNIT_ID%';
    var adSize = "%AD_SIZES%";
    var kvPairs = "%TARGETING_PROPERTIES%";
    var ppid = '%USER_ID%';

    window.googletag = window.googletag || { cmd: [] };
    googletag.cmd.push(function () {
      //googletag.pubads().setCentering(true);
      googletag.pubads().enableSingleRequest();
      googletag.pubads().setPublisherProvidedId(ppid);

      var eventId = Date.now() + Math.random();

      listenToGptEvent(eventId, googletag, 'impressionViewable');
      listenToGptEvent(eventId, googletag, 'slotOnload');
      listenToGptEvent(eventId, googletag, 'slotRenderEnded');
      listenToGptEvent(eventId, googletag, 'slotRequested');
      listenToGptEvent(eventId, googletag, 'slotResponseReceived');
      listenToGptEvent(eventId, googletag, 'slotVisibilityChanged');

      var adObj = googletag.defineSlot(adUnit, adSize, "hoppr-div");

      if (kvPairs) {
        Object.keys(kvPairs).forEach(function (key) {
          adObj.setTargeting(key, kvPairs[key]);
        });
      }

      adObj.addService(googletag.pubads());

      googletag.enableServices();
    });

    function listenToGptEvent(eventId, googletag, name) {
      googletag.pubads().addEventListener(name, function (event) {
        //sendGptEvent(eventId, "GPT_" + name, event)
        console.log(name, event);
        console.log('stringify', JSON.stringify(event));

        if (
          window.ReactNativeWebView &&
          window.ReactNativeWebView.postMessage
        ) {
          var responseInfo = event.slot.getResponseInformation();
          var adPath = event.slot.getAdUnitPath();
          var targeting = {};

          event.slot.getTargetingKeys().forEach((key) => {
            //targeting.set(key, event.slot.getTargeting(key));
            targeting[key] = event.slot.getTargeting(key);
          });

          const message = {
            type: 'GptEvent',
            gptEvent: {
              name: name,
              event: event,
              responseInfo: responseInfo,
              adPath: adPath,
              targeting: JSON.stringify(targeting)
            },
          };

          window.ReactNativeWebView.postMessage(
            \`\${JSON.stringify(message)}\`
          );
        }
      });
    }

    const updateUserAgentMessage = {
      type: 'UpdateUserAgent',
      userAgent: window.navigator.userAgent
    };

    window.ReactNativeWebView.postMessage(
      \`\${JSON.stringify(updateUserAgentMessage)}\`
    );
  </script>
</head>

<body>
  <div id="hoppr-div">
    <script>
      googletag.cmd.push(function () {
        googletag.display("hoppr-div");
      });
    </script>
  </div>
</body>

</html>
`;

var WindowMessageType;
(function (WindowMessageType) {
  WindowMessageType["InitializeInteractivity"] = "InitializeInteractivity";
  WindowMessageType["TriggerInteractivity"] = "TriggerInteractivity";
  WindowMessageType["SetAdSizes"] = "SetAdSizes";
  WindowMessageType["GptEvent"] = "GptEvent";
  WindowMessageType["UpdateUserAgent"] = "UpdateUserAgent";
  WindowMessageType["Log"] = "Log";
})(WindowMessageType || (WindowMessageType = {}));

var InteractiveBehavior;
(function (InteractiveBehavior) {
  InteractiveBehavior["Deeplink"] = "Deeplink";
})(InteractiveBehavior || (InteractiveBehavior = {}));

class HopprBannerAd extends React.Component {
  // private adProperties: AdProperties = new AdProperties();
  constructor(props) {
    super(props);
    this.instanceUUID = UUIDUtils.getID();
    this.userAgent = '';
    this.webView = /*#__PURE__*/createRef();
    this.onShouldStartLoadWithRequest = ({
      url,
      canGoBack,
      isTopFrame
    }) => {
      if (url.includes('googleads.g.doubleclick.net') || url.includes('adclick.g.doubleclick.net') && Platform.OS == 'ios') {
        // const urlParams = new URLSearchParams(url);
        // const myParam = urlParams.get('adurl');
        this.openExternalLink(url);
        return false;
      }
      return true;
    };
    this.openExternalLink = (url, clickThruLink) => {
      Linking.canOpenURL(url).then(supported => {
        this.logDeeplinkClicked(url, supported, clickThruLink);
        if (Platform.isTV && clickThruLink && this.userAgent) {
          ServicesClient.get().invokeClickThrough(this.userAgent, clickThruLink);
        }
        Linking.openURL(url);
      }).catch(err => {
        this.logDeeplinkError('Error opening', err);
      });
    };
    this.onMessage = data => {
      try {
        const message = JSON.parse(data.nativeEvent.data);
        switch (message.type) {
          case WindowMessageType.Log:
            {
              console.log('WindowMessage', message.message);
              break;
            }
          case WindowMessageType.InitializeInteractivity:
            {
              this.interactivity = message;
              break;
            }
          case WindowMessageType.GptEvent:
            {
              if (message.gptEvent && message.gptEvent.name) {
                if (message.gptEvent.name === 'slotRenderEnded') {
                  const sizes = message.gptEvent.event.size;
                  if (sizes) {
                    if (Array.isArray(sizes)) {
                      this.setAdSize(sizes);
                    }
                  }
                }
                // else if (message.gptEvent.name === 'slotResponseReceived') {
                //   if (
                //     message.gptEvent.responseInfo?.creativeId &&
                //     message.gptEvent.responseInfo?.campaignId
                //   ) {
                //     this.adProperties.setAdEventParams({
                //       CampaignId:
                //         message.gptEvent.responseInfo.campaignId.toString(),
                //       CreativeId:
                //         message.gptEvent.responseInfo.creativeId.toString(),
                //     });
                //   }
                // } else if (message.gptEvent.name === 'impressionViewable') {
                //   this.injectAdProperties();
                // }
                this.logGptEvent(message.gptEvent);
              }
              break;
            }
          case WindowMessageType.TriggerInteractivity:
            {
              this.triggerInteractivity();
              break;
            }
          case WindowMessageType.UpdateUserAgent:
            {
              this.userAgent = message.userAgent;
              break;
            }
        }
      } catch (e) {
        // console.log('onMessage error parsing ', data, e);
      }
    };
    this.state = {
      adSize: [0, 0],
      isSelected: false
    };
    if (!this.isAppleTV()) {
      HopprAnalytics.logInternalEvent(HopprInternalEvents.HopprInternalConstructorBanner, AnalyticsUtils.getStandardBannerProperties(this.instanceUUID, this.userAgent, this.props, this.state));
    }
  }
  render() {
    var _a, _b, _c, _d;
    if (!this.isAppleTV()) {
      const template = this.generateTemplate();
      const viewStyle = this.props.style;
      var width = (_a = this.state.adSize) === null || _a === void 0 ? void 0 : _a[0];
      var height = (_b = this.state.adSize) === null || _b === void 0 ? void 0 : _b[1];
      let opacity = 0;
      if (width > 0) {
        opacity = 1;
        if (Platform.isTV) {
          var pixelRatio = PixelRatio.get();
          width = width / pixelRatio;
          height = height / pixelRatio;
        }
      }
      if (Platform.isTV) {
        return /*#__PURE__*/jsxs(Pressable, {
          style: Object.assign(Object.assign({}, viewStyle), {
            opacity: opacity,
            width: width,
            height: height
          }),
          onPress: e => {
            this.triggerInteractivity();
          },
          onFocus: () => {
            this.setIsSelected(true);
          },
          onBlur: () => {
            this.setIsSelected(false);
          },
          children: [this.getWebView(template, width, height), /*#__PURE__*/jsx(View, {
            style: {
              width: width,
              height: height,
              position: 'absolute',
              borderColor: (_c = this.props.selectedBorderColor) !== null && _c !== void 0 ? _c : 'red',
              borderWidth: this.state.isSelected ? (_d = this.props.selectedBorderWidth) !== null && _d !== void 0 ? _d : 1 : 0
            }
          })]
        });
      } else {
        return /*#__PURE__*/jsx(View, {
          style: Object.assign(Object.assign({}, viewStyle), {
            opacity: opacity,
            backgroundColor: 'transparent',
            width: width,
            height: height
          }),
          children: this.getWebView(template, width, height)
        });
      }
    } else {
      return /*#__PURE__*/jsx(Fragment, {});
    }
  }
  setPressOk() {
    this.triggerInteractivity();
  }
  setIsSelected(value) {
    if (value != this.state.isSelected) {
      this.setState({
        isSelected: value
      });
    }
  }
  getWebView(template, width, height) {
    return /*#__PURE__*/jsx(WebView, {
      style: {
        backgroundColor: 'transparent',
        flex: 1,
        width: width,
        height: height
      },
      ref: this.webView,
      injectedJavaScriptForMainFrameOnly: false,
      injectedJavaScriptBeforeContentLoadedForMainFrameOnly: false,
      javaScriptEnabled: true,
      javaScriptCanOpenWindowsAutomatically: true,
      onShouldStartLoadWithRequest: this.onShouldStartLoadWithRequest,
      showsHorizontalScrollIndicator: false,
      showsVerticalScrollIndicator: false,
      originWhitelist: ['*'],
      onMessage: this.onMessage,
      source: {
        html: template,
        baseUrl: 'http://localhost' // Fix suggested for localStorage access issue https://github.com/react-native-webview/react-native-webview/issues/1635#issuecomment-1021425071
      }
    });
  }

  getStringifiedSizes() {
    if (this.props.adUnitSizes && this.props.adUnitSizes.length > 0) {
      return `${JSON.stringify(this.props.adUnitSizes)}`;
    } else {
      if (this.matchingAdSlots && this.matchingAdSlots.length > 0) {
        return `${JSON.stringify(this.matchingAdSlots[0].adSize)}`;
      }
    }
    return 'null';
  }
  getStringifiedTargetProperties() {
    var _a, _b, _c, _d, _e, _f;
    var properties = {};
    var userId = (_b = (_a = this.typedContext) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.userId;
    var baseApiUrl = ServicesClient.get().getBaseApiUrl();
    if (this.props.targetProperties) {
      properties = this.props.targetProperties;
    }
    if (userId) {
      properties['ppid'] = userId;
    }
    if ((_d = (_c = this.typedContext) === null || _c === void 0 ? void 0 : _c.config) === null || _d === void 0 ? void 0 : _d.apiKey) {
      properties['apiKey'] = (_f = (_e = this.typedContext) === null || _e === void 0 ? void 0 : _e.config) === null || _f === void 0 ? void 0 : _f.apiKey;
    }
    properties['baseApiUrl'] = baseApiUrl;
    return JSON.stringify(properties);
  }
  generateTemplate() {
    var _a, _b;
    let template = '';
    this.typedContext = JSON.parse(JSON.stringify(this.context));
    // this.adProperties.setPropertiesData({
    //   apiKey: [this.typedContext?.config?.apiKey ?? ''],
    //   ppid: [this.typedContext?.config?.userId ?? ''],
    //   appVersion: ['0.0.1'],
    //   baseApiUrl: [
    //     'https://us-central1-hoppr-androidtv-test.cloudfunctions.net/',
    //   ],
    //   appId: [this.typedContext?.config?.appId ?? ''],
    // });
    if (this.typedContext && this.typedContext.adSlots) {
      this.matchingAdSlots = (_a = JSON.parse(this.typedContext.adSlots)) === null || _a === void 0 ? void 0 : _a.filter(ad => ad.hopprAdUnit === this.props.adUnitId);
      if (this.matchingAdSlots && this.matchingAdSlots.length > 0) {
        template = stringTemplate.replace(/(%AD_UNIT_ID%)/g, this.matchingAdSlots[0].gamAdUnit).replace(/("%TARGETING_PROPERTIES%")/g, this.getStringifiedTargetProperties()).replace(/("%AD_SIZES%")/g, this.getStringifiedSizes()).replace(/(%USER_ID%)/g, (_b = this.typedContext.config) === null || _b === void 0 ? void 0 : _b.userId).replace(/(%INITIAL_SCALE%)/g, Platform.isTV ? '0.5' : '1.0');
      }
    }
    return template;
  }
  isAppleTV() {
    return Platform.OS == 'ios' && Platform.isTV;
  }
  setAdSize(adSize) {
    const width = adSize === null || adSize === void 0 ? void 0 : adSize[0];
    const height = adSize === null || adSize === void 0 ? void 0 : adSize[1];
    if (this.state.adSize[0] !== width || this.state.adSize[1] !== height) {
      this.setState({
        adSize: adSize
      });
    }
  }
  triggerInteractivity() {
    var _a, _b, _c;
    // const url =
    //   'https://play.google.com/store/apps/details?id=com.amazon.amazonvideo.livingroom';
    // const url = 'market://details?id=com.amazon.amazonvideo.livingroom';
    // const url = 'nflx://www.netflix.com/';
    // const url = 'https://www.disneyplus.com/';
    const url = (_a = this.interactivity) === null || _a === void 0 ? void 0 : _a.url;
    const behavior = (_b = this.interactivity) === null || _b === void 0 ? void 0 : _b.behavior;
    if (url && behavior) {
      switch (behavior) {
        case InteractiveBehavior.Deeplink:
          {
            this.openExternalLink(url, (_c = this.interactivity) === null || _c === void 0 ? void 0 : _c.clickThruLink);
            break;
          }
      }
    } else {
      this.logDeeplinkError('Interactivity not initalized correctly - empty URL or behavior');
    }
  }
  // private injectAdProperties() {
  //   this.webView.current?.injectJavaScript(
  //     `
  //       var element = document.getElementById("hoppr-div");
  //       var firstIframe = element.querySelector('iframe');
  //       var secondIframe = firstIframe?.contentWindow?.document.querySelector('iframe');
  //       secondIframe?.contentWindow?.postMessage(${this.adProperties.getAdEventParams()}, '*');
  //       secondIframe?.contentWindow?.postMessage(${this.adProperties.getPropertiesData()}, '*');
  //       `
  //   );
  // }
  logDeeplinkError(error, errorObject) {
    console.error(error, errorObject);
    if (errorObject) error += JSON.stringify(errorObject);
    HopprAnalytics.logInternalEvent(HopprInternalEvents.HopprInternalDeeplinkError, AnalyticsUtils.getDeepLinkErrorRecord(this.instanceUUID, this.userAgent, this.props, this.state, error));
  }
  logDeeplinkClicked(url, supported, clickThruLink) {
    HopprAnalytics.logInternalEvent(HopprInternalEvents.HopprInternalDeeplinkClicked, AnalyticsUtils.getDeepLinkRecord(this.instanceUUID, this.userAgent, this.props, this.state, url, supported, clickThruLink));
  }
  logGptEvent(gptEvent) {
    const eventType = AnalyticsUtils.mapGptEventNameToHopprEvent(gptEvent.name);
    if (eventType) {
      HopprAnalytics.logInternalEvent(eventType, AnalyticsUtils.getGptEventRecord(this.instanceUUID, this.userAgent, this.props, this.state, gptEvent));
    }
  }
}
HopprBannerAd.contextType = HopprAdContext;

var _a;
class HopprAnalyticsLogger {}
_a = HopprAnalyticsLogger;
HopprAnalyticsLogger.log = (eventId, eventDetails) => __awaiter(void 0, void 0, void 0, function* () {
  const record = _a.assignStandardProperties(eventDetails);
  HopprAnalytics.logEvent(eventId, record, Object.values(HopprEvents));
});
HopprAnalyticsLogger.setUserProperties = properties => __awaiter(void 0, void 0, void 0, function* () {
  HopprAnalytics.logEvent(HopprEvents.UpdateUserProperties, properties, Object.values(HopprEvents));
});
HopprAnalyticsLogger.assignStandardProperties = eventDetails => {
  let record = AnalyticsUtils.getStandardProperties();
  return Object.assign(Object.assign(Object.assign({}, record), eventDetails));
};

`The package 'react-native-hoppr' doesn't seems to be linked. Make sure: \n\n` + Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo Go\n';
// export const HopprView = getHopprView();
// console.log('test a', UIManager.getViewManagerConfig(ComponentName));
// console.log('test b', UIManager.hasViewManagerConfig(ComponentName));
// export const HopprView =
//   UIManager.getViewManagerConfig(ComponentName) != null
//     ? requireNativeComponent<HopprProps>(ComponentName)
//     : () => {
//         throw new Error(LINKING_ERROR);
//       };
// function getHopprView() {
//   try {
//     return requireNativeComponent<HopprProps>(ComponentName);
//   } catch (e) {
//     console.log('error', e);
//   }
//   return null;
// }
// export const HopprVideoView =
//   UIManager.getViewManagerConfig(ComponentName2) != null
//     ? requireNativeComponent<HopprVdeoProps>(ComponentName2)
//     : () => {
//         throw new Error(LINKING_ERROR);
//       };

export { HopprAdProvider, HopprAnalyticsLogger, HopprBannerAd };
