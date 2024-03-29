import { Platform, View, Dimensions, Image, AppState, NativeModules, Linking, PixelRatio, Pressable, UIManager, requireNativeComponent } from 'react-native';
import 'react-native-get-random-values';
import React, { createRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AdType, UUIDUtils } from '@hoppr/hoppr-common';
import { ServicesClient } from '@hoppr/hoppr-services';
import { HopprInternalEvents, HopprAnalytics, HopprEvents } from '@hoppr/hoppr-analytics';
export { ContentTypes, HopprEvents, ScreenTypes, StreamTypes } from '@hoppr/hoppr-analytics';
import 'react-native-url-polyfill/auto';
import { WebView } from 'react-native-webview';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { releaseCapture, captureScreen } from 'react-native-view-shot';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var fails$k = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$j = fails$k;

var functionBindNative = !fails$j(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var NATIVE_BIND$3 = functionBindNative;

var FunctionPrototype$2 = Function.prototype;
var call$g = FunctionPrototype$2.call;
var uncurryThisWithBind = NATIVE_BIND$3 && FunctionPrototype$2.bind.bind(call$g, call$g);

var functionUncurryThisRaw = function (fn) {
  return NATIVE_BIND$3 ? uncurryThisWithBind(fn) : function () {
    return call$g.apply(fn, arguments);
  };
};

var uncurryThisRaw$1 = functionUncurryThisRaw;

var toString$8 = uncurryThisRaw$1({}.toString);
var stringSlice$6 = uncurryThisRaw$1(''.slice);

var classofRaw$2 = function (it) {
  return stringSlice$6(toString$8(it), 8, -1);
};

var classofRaw$1 = classofRaw$2;
var uncurryThisRaw = functionUncurryThisRaw;

var functionUncurryThis = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw$1(fn) === 'Function') return uncurryThisRaw(fn);
};

var uncurryThis$j = functionUncurryThis;
var fails$i = fails$k;
var classof$7 = classofRaw$2;

var $Object$4 = Object;
var split$3 = uncurryThis$j(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails$i(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object$4('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$7(it) == 'String' ? split$3(it, '') : $Object$4(it);
} : $Object$4;

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
var isNullOrUndefined$5 = function (it) {
  return it === null || it === undefined;
};

var isNullOrUndefined$4 = isNullOrUndefined$5;

var $TypeError$b = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible$6 = function (it) {
  if (isNullOrUndefined$4(it)) throw $TypeError$b("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings
var IndexedObject$1 = indexedObject;
var requireObjectCoercible$5 = requireObjectCoercible$6;

var toIndexedObject$5 = function (it) {
  return IndexedObject$1(requireObjectCoercible$5(it));
};

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global$g =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

var shared$4 = {exports: {}};

var isPure = false;

var global$f = global$g;

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$6 = Object.defineProperty;

var defineGlobalProperty$3 = function (key, value) {
  try {
    defineProperty$6(global$f, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global$f[key] = value;
  } return value;
};

var global$e = global$g;
var defineGlobalProperty$2 = defineGlobalProperty$3;

var SHARED = '__core-js_shared__';
var store$3 = global$e[SHARED] || defineGlobalProperty$2(SHARED, {});

var sharedStore = store$3;

var store$2 = sharedStore;

(shared$4.exports = function (key, value) {
  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.25.5',
  mode: 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.25.5/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

var requireObjectCoercible$4 = requireObjectCoercible$6;

var $Object$3 = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject$5 = function (argument) {
  return $Object$3(requireObjectCoercible$4(argument));
};

var uncurryThis$i = functionUncurryThis;
var toObject$4 = toObject$5;

var hasOwnProperty = uncurryThis$i({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$4(it), key);
};

var uncurryThis$h = functionUncurryThis;

var id = 0;
var postfix = Math.random();
var toString$7 = uncurryThis$h(1.0.toString);

var uid$2 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$7(++id + postfix, 36);
};

var documentAll$2 = typeof document == 'object' && document.all;

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var IS_HTMLDDA = typeof documentAll$2 == 'undefined' && documentAll$2 !== undefined;

var documentAll_1 = {
  all: documentAll$2,
  IS_HTMLDDA: IS_HTMLDDA
};

var $documentAll$1 = documentAll_1;

var documentAll$1 = $documentAll$1.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
var isCallable$j = $documentAll$1.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll$1;
} : function (argument) {
  return typeof argument == 'function';
};

var global$d = global$g;
var isCallable$i = isCallable$j;

var aFunction = function (argument) {
  return isCallable$i(argument) ? argument : undefined;
};

var getBuiltIn$5 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$d[namespace]) : global$d[namespace] && global$d[namespace][method];
};

var getBuiltIn$4 = getBuiltIn$5;

var engineUserAgent = getBuiltIn$4('navigator', 'userAgent') || '';

var global$c = global$g;
var userAgent = engineUserAgent;

var process = global$c.process;
var Deno = global$c.Deno;
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
var fails$h = fails$k;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$h(function () {
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

var global$b = global$g;
var shared$3 = shared$4.exports;
var hasOwn$b = hasOwnProperty_1;
var uid$1 = uid$2;
var NATIVE_SYMBOL = symbolConstructorDetection;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

var WellKnownSymbolsStore = shared$3('wks');
var Symbol$1 = global$b.Symbol;
var symbolFor = Symbol$1 && Symbol$1['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID$1 ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;

var wellKnownSymbol$g = function (name) {
  if (!hasOwn$b(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn$b(Symbol$1, name)) {
      WellKnownSymbolsStore[name] = Symbol$1[name];
    } else if (USE_SYMBOL_AS_UID$1 && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};

var isCallable$h = isCallable$j;
var $documentAll = documentAll_1;

var documentAll = $documentAll.all;

var isObject$8 = $documentAll.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable$h(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable$h(it);
};

var isObject$7 = isObject$8;

var $String$3 = String;
var $TypeError$a = TypeError;

// `Assert: Type(argument) is Object`
var anObject$e = function (argument) {
  if (isObject$7(argument)) return argument;
  throw $TypeError$a($String$3(argument) + ' is not an object');
};

var objectDefineProperties = {};

var fails$g = fails$k;

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails$g(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

var DESCRIPTORS$b = descriptors;
var fails$f = fails$k;

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
var v8PrototypeDefineBug = DESCRIPTORS$b && fails$f(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});

var objectDefineProperty = {};

var global$a = global$g;
var isObject$6 = isObject$8;

var document$1 = global$a.document;
// typeof document.createElement is 'object' in old IE
var EXISTS$1 = isObject$6(document$1) && isObject$6(document$1.createElement);

var documentCreateElement$2 = function (it) {
  return EXISTS$1 ? document$1.createElement(it) : {};
};

var DESCRIPTORS$a = descriptors;
var fails$e = fails$k;
var createElement = documentCreateElement$2;

// Thanks to IE8 for its funny defineProperty
var ie8DomDefine = !DESCRIPTORS$a && !fails$e(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

var NATIVE_BIND$2 = functionBindNative;

var call$f = Function.prototype.call;

var functionCall = NATIVE_BIND$2 ? call$f.bind(call$f) : function () {
  return call$f.apply(call$f, arguments);
};

var uncurryThis$g = functionUncurryThis;

var objectIsPrototypeOf = uncurryThis$g({}.isPrototypeOf);

var getBuiltIn$3 = getBuiltIn$5;
var isCallable$g = isCallable$j;
var isPrototypeOf$2 = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID = useSymbolAsUid;

var $Object$2 = Object;

var isSymbol$2 = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$3('Symbol');
  return isCallable$g($Symbol) && isPrototypeOf$2($Symbol.prototype, $Object$2(it));
};

var $String$2 = String;

var tryToString$2 = function (argument) {
  try {
    return $String$2(argument);
  } catch (error) {
    return 'Object';
  }
};

var isCallable$f = isCallable$j;
var tryToString$1 = tryToString$2;

var $TypeError$9 = TypeError;

// `Assert: IsCallable(argument) is true`
var aCallable$3 = function (argument) {
  if (isCallable$f(argument)) return argument;
  throw $TypeError$9(tryToString$1(argument) + ' is not a function');
};

var aCallable$2 = aCallable$3;
var isNullOrUndefined$3 = isNullOrUndefined$5;

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
var getMethod$5 = function (V, P) {
  var func = V[P];
  return isNullOrUndefined$3(func) ? undefined : aCallable$2(func);
};

var call$e = functionCall;
var isCallable$e = isCallable$j;
var isObject$5 = isObject$8;

var $TypeError$8 = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$e(fn = input.toString) && !isObject$5(val = call$e(fn, input))) return val;
  if (isCallable$e(fn = input.valueOf) && !isObject$5(val = call$e(fn, input))) return val;
  if (pref !== 'string' && isCallable$e(fn = input.toString) && !isObject$5(val = call$e(fn, input))) return val;
  throw $TypeError$8("Can't convert object to primitive value");
};

var call$d = functionCall;
var isObject$4 = isObject$8;
var isSymbol$1 = isSymbol$2;
var getMethod$4 = getMethod$5;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$f = wellKnownSymbol$g;

var $TypeError$7 = TypeError;
var TO_PRIMITIVE = wellKnownSymbol$f('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
var toPrimitive$1 = function (input, pref) {
  if (!isObject$4(input) || isSymbol$1(input)) return input;
  var exoticToPrim = getMethod$4(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$d(exoticToPrim, input, pref);
    if (!isObject$4(result) || isSymbol$1(result)) return result;
    throw $TypeError$7("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

var toPrimitive = toPrimitive$1;
var isSymbol = isSymbol$2;

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
var toPropertyKey$3 = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};

var DESCRIPTORS$9 = descriptors;
var IE8_DOM_DEFINE$1 = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
var anObject$d = anObject$e;
var toPropertyKey$2 = toPropertyKey$3;

var $TypeError$6 = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE$1 = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
objectDefineProperty.f = DESCRIPTORS$9 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
  anObject$d(O);
  P = toPropertyKey$2(P);
  anObject$d(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor$1(O, P);
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
  anObject$d(O);
  P = toPropertyKey$2(P);
  anObject$d(Attributes);
  if (IE8_DOM_DEFINE$1) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError$6('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var ceil = Math.ceil;
var floor$4 = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
var mathTrunc = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor$4 : ceil)(n);
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

var max$2 = Math.max;
var min$2 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex$2 = function (index, length) {
  var integer = toIntegerOrInfinity$3(index);
  return integer < 0 ? max$2(integer + length, 0) : min$2(integer, length);
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
var lengthOfArrayLike$3 = function (obj) {
  return toLength$2(obj.length);
};

var toIndexedObject$4 = toIndexedObject$5;
var toAbsoluteIndex$1 = toAbsoluteIndex$2;
var lengthOfArrayLike$2 = lengthOfArrayLike$3;

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod$1 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$4($this);
    var length = lengthOfArrayLike$2(O);
    var index = toAbsoluteIndex$1(fromIndex, length);
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

var hiddenKeys$4 = {};

var uncurryThis$f = functionUncurryThis;
var hasOwn$a = hasOwnProperty_1;
var toIndexedObject$3 = toIndexedObject$5;
var indexOf$1 = arrayIncludes.indexOf;
var hiddenKeys$3 = hiddenKeys$4;

var push$4 = uncurryThis$f([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$3(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$a(hiddenKeys$3, key) && hasOwn$a(O, key) && push$4(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn$a(O, key = names[i++])) {
    ~indexOf$1(result, key) || push$4(result, key);
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

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
var objectKeys$2 = Object.keys || function keys(O) {
  return internalObjectKeys$1(O, enumBugKeys$2);
};

var DESCRIPTORS$8 = descriptors;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var definePropertyModule$4 = objectDefineProperty;
var anObject$c = anObject$e;
var toIndexedObject$2 = toIndexedObject$5;
var objectKeys$1 = objectKeys$2;

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
objectDefineProperties.f = DESCRIPTORS$8 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$c(O);
  var props = toIndexedObject$2(Properties);
  var keys = objectKeys$1(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule$4.f(O, key = keys[index++], props[key]);
  return O;
};

var getBuiltIn$2 = getBuiltIn$5;

var html$1 = getBuiltIn$2('document', 'documentElement');

var shared$2 = shared$4.exports;
var uid = uid$2;

var keys = shared$2('keys');

var sharedKey$3 = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

/* global ActiveXObject -- old IE, WSH */

var anObject$b = anObject$e;
var definePropertiesModule = objectDefineProperties;
var enumBugKeys$1 = enumBugKeys$3;
var hiddenKeys$2 = hiddenKeys$4;
var html = html$1;
var documentCreateElement$1 = documentCreateElement$2;
var sharedKey$2 = sharedKey$3;

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO$1 = sharedKey$2('IE_PROTO');

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
  var iframe = documentCreateElement$1('iframe');
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
  var length = enumBugKeys$1.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys$1[length]];
  return NullProtoObject();
};

hiddenKeys$2[IE_PROTO$1] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
var objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject$b(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};

var wellKnownSymbol$e = wellKnownSymbol$g;
var create$3 = objectCreate;
var defineProperty$5 = objectDefineProperty.f;

var UNSCOPABLES = wellKnownSymbol$e('unscopables');
var ArrayPrototype$1 = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype$1[UNSCOPABLES] == undefined) {
  defineProperty$5(ArrayPrototype$1, UNSCOPABLES, {
    configurable: true,
    value: create$3(null)
  });
}

// add a key to Array.prototype[@@unscopables]
var addToUnscopables$2 = function (key) {
  ArrayPrototype$1[UNSCOPABLES][key] = true;
};

var iterators = {};

var global$9 = global$g;
var isCallable$d = isCallable$j;

var WeakMap$1 = global$9.WeakMap;

var weakMapBasicDetection = isCallable$d(WeakMap$1) && /native code/.test(String(WeakMap$1));

var createPropertyDescriptor$5 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var DESCRIPTORS$7 = descriptors;
var definePropertyModule$3 = objectDefineProperty;
var createPropertyDescriptor$4 = createPropertyDescriptor$5;

var createNonEnumerableProperty$5 = DESCRIPTORS$7 ? function (object, key, value) {
  return definePropertyModule$3.f(object, key, createPropertyDescriptor$4(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var NATIVE_WEAK_MAP = weakMapBasicDetection;
var global$8 = global$g;
var isObject$3 = isObject$8;
var createNonEnumerableProperty$4 = createNonEnumerableProperty$5;
var hasOwn$9 = hasOwnProperty_1;
var shared$1 = sharedStore;
var sharedKey$1 = sharedKey$3;
var hiddenKeys$1 = hiddenKeys$4;

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$3 = global$8.TypeError;
var WeakMap = global$8.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$3(it) || (state = get(it)).type !== TYPE) {
      throw TypeError$3('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared$1.state) {
  var store$1 = shared$1.state || (shared$1.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store$1.get = store$1.get;
  store$1.has = store$1.has;
  store$1.set = store$1.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store$1.has(it)) throw TypeError$3(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store$1.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store$1.get(it) || {};
  };
  has = function (it) {
    return store$1.has(it);
  };
} else {
  var STATE = sharedKey$1('state');
  hiddenKeys$1[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn$9(it, STATE)) throw TypeError$3(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$4(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn$9(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn$9(it, STATE);
  };
}

var internalState = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};

var objectGetOwnPropertyDescriptor = {};

var objectPropertyIsEnumerable = {};

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor$2 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$2(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

var DESCRIPTORS$6 = descriptors;
var call$c = functionCall;
var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
var createPropertyDescriptor$3 = createPropertyDescriptor$5;
var toIndexedObject$1 = toIndexedObject$5;
var toPropertyKey$1 = toPropertyKey$3;
var hasOwn$8 = hasOwnProperty_1;
var IE8_DOM_DEFINE = ie8DomDefine;

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$6 ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$1(O);
  P = toPropertyKey$1(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn$8(O, P)) return createPropertyDescriptor$3(!call$c(propertyIsEnumerableModule$1.f, O, P), O[P]);
};

var makeBuiltIn$3 = {exports: {}};

var DESCRIPTORS$5 = descriptors;
var hasOwn$7 = hasOwnProperty_1;

var FunctionPrototype$1 = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS$5 && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn$7(FunctionPrototype$1, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS$5 || (DESCRIPTORS$5 && getDescriptor(FunctionPrototype$1, 'name').configurable));

var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var uncurryThis$e = functionUncurryThis;
var isCallable$c = isCallable$j;
var store = sharedStore;

var functionToString = uncurryThis$e(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable$c(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource$2 = store.inspectSource;

var fails$d = fails$k;
var isCallable$b = isCallable$j;
var hasOwn$6 = hasOwnProperty_1;
var DESCRIPTORS$4 = descriptors;
var CONFIGURABLE_FUNCTION_NAME$1 = functionName.CONFIGURABLE;
var inspectSource$1 = inspectSource$2;
var InternalStateModule$4 = internalState;

var enforceInternalState = InternalStateModule$4.enforce;
var getInternalState$3 = InternalStateModule$4.get;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$4 = Object.defineProperty;

var CONFIGURABLE_LENGTH = DESCRIPTORS$4 && !fails$d(function () {
  return defineProperty$4(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn$2 = makeBuiltIn$3.exports = function (value, name, options) {
  if (String(name).slice(0, 7) === 'Symbol(') {
    name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn$6(value, 'name') || (CONFIGURABLE_FUNCTION_NAME$1 && value.name !== name)) {
    if (DESCRIPTORS$4) defineProperty$4(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn$6(options, 'arity') && value.length !== options.arity) {
    defineProperty$4(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn$6(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS$4) defineProperty$4(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn$6(state, 'source')) {
    state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn$2(function toString() {
  return isCallable$b(this) && getInternalState$3(this).source || inspectSource$1(this);
}, 'toString');

var isCallable$a = isCallable$j;
var definePropertyModule$2 = objectDefineProperty;
var makeBuiltIn$1 = makeBuiltIn$3.exports;
var defineGlobalProperty$1 = defineGlobalProperty$3;

var defineBuiltIn$8 = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable$a(value)) makeBuiltIn$1(value, name, options);
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

var internalObjectKeys = objectKeysInternal;
var enumBugKeys = enumBugKeys$3;

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};

var objectGetOwnPropertySymbols = {};

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

var getBuiltIn$1 = getBuiltIn$5;
var uncurryThis$d = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
var anObject$a = anObject$e;

var concat$2 = uncurryThis$d([].concat);

// all object keys, includes non-enumerable and symbols
var ownKeys$1 = getBuiltIn$1('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject$a(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
  return getOwnPropertySymbols ? concat$2(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn$5 = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule$1 = objectDefineProperty;

var copyConstructorProperties$1 = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule$1.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn$5(target, key) && !(exceptions && hasOwn$5(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var fails$c = fails$k;
var isCallable$9 = isCallable$j;

var replacement = /#|\.prototype\./;

var isForced$1 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable$9(detection) ? fails$c(detection)
    : !!detection;
};

var normalize = isForced$1.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$1.data = {};
var NATIVE = isForced$1.NATIVE = 'N';
var POLYFILL = isForced$1.POLYFILL = 'P';

var isForced_1 = isForced$1;

var global$7 = global$g;
var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty$3 = createNonEnumerableProperty$5;
var defineBuiltIn$7 = defineBuiltIn$8;
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
    target = global$7;
  } else if (STATIC) {
    target = global$7[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global$7[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor$1(target, key);
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
      createNonEnumerableProperty$3(sourceProperty, 'sham', true);
    }
    defineBuiltIn$7(target, key, sourceProperty, options);
  }
};

var fails$b = fails$k;

var correctPrototypeGetter = !fails$b(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var hasOwn$4 = hasOwnProperty_1;
var isCallable$8 = isCallable$j;
var toObject$3 = toObject$5;
var sharedKey = sharedKey$3;
var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

var IE_PROTO = sharedKey('IE_PROTO');
var $Object$1 = Object;
var ObjectPrototype = $Object$1.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? $Object$1.getPrototypeOf : function (O) {
  var object = toObject$3(O);
  if (hasOwn$4(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable$8(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object$1 ? ObjectPrototype : null;
};

var fails$a = fails$k;
var isCallable$7 = isCallable$j;
var isObject$2 = isObject$8;
var getPrototypeOf$1 = objectGetPrototypeOf;
var defineBuiltIn$6 = defineBuiltIn$8;
var wellKnownSymbol$d = wellKnownSymbol$g;

var ITERATOR$6 = wellKnownSymbol$d('iterator');
var BUGGY_SAFARI_ITERATORS$1 = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf$1(getPrototypeOf$1(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = !isObject$2(IteratorPrototype$2) || fails$a(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype$2[ITERATOR$6].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable$7(IteratorPrototype$2[ITERATOR$6])) {
  defineBuiltIn$6(IteratorPrototype$2, ITERATOR$6, function () {
    return this;
  });
}

var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$2,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};

var defineProperty$3 = objectDefineProperty.f;
var hasOwn$3 = hasOwnProperty_1;
var wellKnownSymbol$c = wellKnownSymbol$g;

var TO_STRING_TAG$3 = wellKnownSymbol$c('toStringTag');

var setToStringTag$4 = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn$3(target, TO_STRING_TAG$3)) {
    defineProperty$3(target, TO_STRING_TAG$3, { configurable: true, value: TAG });
  }
};

var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
var create$2 = objectCreate;
var createPropertyDescriptor$2 = createPropertyDescriptor$5;
var setToStringTag$3 = setToStringTag$4;
var Iterators$4 = iterators;

var returnThis$1 = function () { return this; };

var iteratorCreateConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create$2(IteratorPrototype$1, { next: createPropertyDescriptor$2(+!ENUMERABLE_NEXT, next) });
  setToStringTag$3(IteratorConstructor, TO_STRING_TAG, false);
  Iterators$4[TO_STRING_TAG] = returnThis$1;
  return IteratorConstructor;
};

var isCallable$6 = isCallable$j;

var $String$1 = String;
var $TypeError$5 = TypeError;

var aPossiblePrototype$1 = function (argument) {
  if (typeof argument == 'object' || isCallable$6(argument)) return argument;
  throw $TypeError$5("Can't set " + $String$1(argument) + ' as a prototype');
};

/* eslint-disable no-proto -- safe */

var uncurryThis$c = functionUncurryThis;
var anObject$9 = anObject$e;
var aPossiblePrototype = aPossiblePrototype$1;

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = uncurryThis$c(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject$9(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var $$6 = _export;
var call$b = functionCall;
var FunctionName = functionName;
var isCallable$5 = isCallable$j;
var createIteratorConstructor$1 = iteratorCreateConstructor;
var getPrototypeOf = objectGetPrototypeOf;
var setPrototypeOf = objectSetPrototypeOf;
var setToStringTag$2 = setToStringTag$4;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$5;
var defineBuiltIn$5 = defineBuiltIn$8;
var wellKnownSymbol$b = wellKnownSymbol$g;
var Iterators$3 = iterators;
var IteratorsCore = iteratorsCore;

var PROPER_FUNCTION_NAME$1 = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$5 = wellKnownSymbol$b('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

var iteratorDefine = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor$1(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR$5]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable$5(CurrentIteratorPrototype[ITERATOR$5])) {
          defineBuiltIn$5(CurrentIteratorPrototype, ITERATOR$5, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag$2(CurrentIteratorPrototype, TO_STRING_TAG, true);
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME$1 && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty$2(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call$b(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        defineBuiltIn$5(IterablePrototype, KEY, methods[KEY]);
      }
    } else $$6({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if (IterablePrototype[ITERATOR$5] !== defaultIterator) {
    defineBuiltIn$5(IterablePrototype, ITERATOR$5, defaultIterator, { name: DEFAULT });
  }
  Iterators$3[NAME] = defaultIterator;

  return methods;
};

// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
var createIterResultObject$2 = function (value, done) {
  return { value: value, done: done };
};

var toIndexedObject = toIndexedObject$5;
var addToUnscopables$1 = addToUnscopables$2;
var Iterators$2 = iterators;
var InternalStateModule$3 = internalState;
var defineProperty$2 = objectDefineProperty.f;
var defineIterator$1 = iteratorDefine;
var createIterResultObject$1 = createIterResultObject$2;
var DESCRIPTORS$3 = descriptors;

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState$3 = InternalStateModule$3.set;
var getInternalState$2 = InternalStateModule$3.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
var es_array_iterator = defineIterator$1(Array, 'Array', function (iterated, kind) {
  setInternalState$3(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState$2(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return createIterResultObject$1(undefined, true);
  }
  if (kind == 'keys') return createIterResultObject$1(index, false);
  if (kind == 'values') return createIterResultObject$1(target[index], false);
  return createIterResultObject$1([index, target[index]], false);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values = Iterators$2.Arguments = Iterators$2.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables$1('keys');
addToUnscopables$1('values');
addToUnscopables$1('entries');

// V8 ~ Chrome 45- bug
if (DESCRIPTORS$3 && values.name !== 'values') try {
  defineProperty$2(values, 'name', { value: 'values' });
} catch (error) { /* empty */ }

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
var domIterables = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};

// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = documentCreateElement$2;

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype$1 = classList && classList.constructor && classList.constructor.prototype;

var domTokenListPrototype = DOMTokenListPrototype$1 === Object.prototype ? undefined : DOMTokenListPrototype$1;

var global$6 = global$g;
var DOMIterables = domIterables;
var DOMTokenListPrototype = domTokenListPrototype;
var ArrayIteratorMethods = es_array_iterator;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$5;
var wellKnownSymbol$a = wellKnownSymbol$g;

var ITERATOR$4 = wellKnownSymbol$a('iterator');
var TO_STRING_TAG$2 = wellKnownSymbol$a('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR$4] !== ArrayValues) try {
      createNonEnumerableProperty$1(CollectionPrototype, ITERATOR$4, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR$4] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG$2]) {
      createNonEnumerableProperty$1(CollectionPrototype, TO_STRING_TAG$2, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty$1(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  handlePrototype(global$6[COLLECTION_NAME] && global$6[COLLECTION_NAME].prototype, COLLECTION_NAME);
}

handlePrototype(DOMTokenListPrototype, 'DOMTokenList');

var wellKnownSymbol$9 = wellKnownSymbol$g;

var TO_STRING_TAG$1 = wellKnownSymbol$9('toStringTag');
var test = {};

test[TO_STRING_TAG$1] = 'z';

var toStringTagSupport = String(test) === '[object z]';

var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var isCallable$4 = isCallable$j;
var classofRaw = classofRaw$2;
var wellKnownSymbol$8 = wellKnownSymbol$g;

var TO_STRING_TAG = wellKnownSymbol$8('toStringTag');
var $Object = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
var classof$6 = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable$4(O.callee) ? 'Arguments' : result;
};

var classof$5 = classof$6;

var $String = String;

var toString$6 = function (argument) {
  if (classof$5(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String(argument);
};

var anObject$8 = anObject$e;

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
var regexpFlags$1 = function () {
  var that = anObject$8(this);
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

var fails$9 = fails$k;
var global$5 = global$g;

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp$2 = global$5.RegExp;

var UNSUPPORTED_Y$1 = fails$9(function () {
  var re = $RegExp$2('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY = UNSUPPORTED_Y$1 || fails$9(function () {
  return !$RegExp$2('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y$1 || fails$9(function () {
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

var fails$8 = fails$k;
var global$4 = global$g;

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp$1 = global$4.RegExp;

var regexpUnsupportedDotAll = fails$8(function () {
  var re = $RegExp$1('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});

var fails$7 = fails$k;
var global$3 = global$g;

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global$3.RegExp;

var regexpUnsupportedNcg = fails$7(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call$a = functionCall;
var uncurryThis$b = functionUncurryThis;
var toString$5 = toString$6;
var regexpFlags = regexpFlags$1;
var stickyHelpers = regexpStickyHelpers;
var shared = shared$4.exports;
var create$1 = objectCreate;
var getInternalState$1 = internalState.get;
var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
var UNSUPPORTED_NCG = regexpUnsupportedNcg;

var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt$6 = uncurryThis$b(''.charAt);
var indexOf = uncurryThis$b(''.indexOf);
var replace$4 = uncurryThis$b(''.replace);
var stringSlice$5 = uncurryThis$b(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call$a(nativeExec, re1, 'a');
  call$a(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState$1(re);
    var str = toString$5(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call$a(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = call$a(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace$4(flags, 'y', '');
      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice$5(str, re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$6(str, re.lastIndex - 1) !== '\n')) {
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

    match = call$a(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice$5(match.input, charsAdded);
        match[0] = stringSlice$5(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
      call$a(nativeReplace, match[0], reCopy, function () {
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

var $$5 = _export;
var exec$3 = regexpExec$2;

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$$5({ target: 'RegExp', proto: true, forced: /./.exec !== exec$3 }, {
  exec: exec$3
});

// TODO: Remove from `core-js@4` since it's moved to entry points

var uncurryThis$a = functionUncurryThis;
var defineBuiltIn$4 = defineBuiltIn$8;
var regexpExec$1 = regexpExec$2;
var fails$6 = fails$k;
var wellKnownSymbol$7 = wellKnownSymbol$g;
var createNonEnumerableProperty = createNonEnumerableProperty$5;

var SPECIES = wellKnownSymbol$7('species');
var RegExpPrototype$2 = RegExp.prototype;

var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol$7(KEY);

  var DELEGATES_TO_SYMBOL = !fails$6(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$6(function () {
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
    var uncurriedNativeRegExpMethod = uncurryThis$a(/./[SYMBOL]);
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = uncurryThis$a(nativeMethod);
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

    defineBuiltIn$4(String.prototype, KEY, methods[0]);
    defineBuiltIn$4(RegExpPrototype$2, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype$2[SYMBOL], 'sham', true);
};

var uncurryThis$9 = functionUncurryThis;
var toIntegerOrInfinity$1 = toIntegerOrInfinity$4;
var toString$4 = toString$6;
var requireObjectCoercible$3 = requireObjectCoercible$6;

var charAt$5 = uncurryThis$9(''.charAt);
var charCodeAt$1 = uncurryThis$9(''.charCodeAt);
var stringSlice$4 = uncurryThis$9(''.slice);

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString$4(requireObjectCoercible$3($this));
    var position = toIntegerOrInfinity$1(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt$1(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt$1(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt$5(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice$4(S, position, position + 2)
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

var charAt$4 = stringMultibyte.charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
var advanceStringIndex$2 = function (S, index, unicode) {
  return index + (unicode ? charAt$4(S, index).length : 1);
};

var call$9 = functionCall;
var anObject$7 = anObject$e;
var isCallable$3 = isCallable$j;
var classof$4 = classofRaw$2;
var regexpExec = regexpExec$2;

var $TypeError$4 = TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
var regexpExecAbstract = function (R, S) {
  var exec = R.exec;
  if (isCallable$3(exec)) {
    var result = call$9(exec, R, S);
    if (result !== null) anObject$7(result);
    return result;
  }
  if (classof$4(R) === 'RegExp') return call$9(regexpExec, R, S);
  throw $TypeError$4('RegExp#exec called on incompatible receiver');
};

var call$8 = functionCall;
var fixRegExpWellKnownSymbolLogic$1 = fixRegexpWellKnownSymbolLogic;
var anObject$6 = anObject$e;
var isNullOrUndefined$2 = isNullOrUndefined$5;
var toLength$1 = toLength$3;
var toString$3 = toString$6;
var requireObjectCoercible$2 = requireObjectCoercible$6;
var getMethod$3 = getMethod$5;
var advanceStringIndex$1 = advanceStringIndex$2;
var regExpExec$1 = regexpExecAbstract;

// @@match logic
fixRegExpWellKnownSymbolLogic$1('match', function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible$2(this);
      var matcher = isNullOrUndefined$2(regexp) ? undefined : getMethod$3(regexp, MATCH);
      return matcher ? call$8(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString$3(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject$6(this);
      var S = toString$3(string);
      var res = maybeCallNative(nativeMatch, rx, S);

      if (res.done) return res.value;

      if (!rx.global) return regExpExec$1(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec$1(rx, S)) !== null) {
        var matchStr = toString$3(result[0]);
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

var call$7 = functionCall;
var hasOwn$2 = hasOwnProperty_1;
var isPrototypeOf$1 = objectIsPrototypeOf;
var regExpFlags = regexpFlags$1;

var RegExpPrototype$1 = RegExp.prototype;

var regexpGetFlags = function (R) {
  var flags = R.flags;
  return flags === undefined && !('flags' in RegExpPrototype$1) && !hasOwn$2(R, 'flags') && isPrototypeOf$1(RegExpPrototype$1, R)
    ? call$7(regExpFlags, R) : flags;
};

var PROPER_FUNCTION_NAME = functionName.PROPER;
var defineBuiltIn$3 = defineBuiltIn$8;
var anObject$5 = anObject$e;
var $toString$2 = toString$6;
var fails$5 = fails$k;
var getRegExpFlags = regexpGetFlags;

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails$5(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME && nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  defineBuiltIn$3(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject$5(this);
    var pattern = $toString$2(R.source);
    var flags = $toString$2(getRegExpFlags(R));
    return '/' + pattern + '/' + flags;
  }, { unsafe: true });
}

var EventType;
(function (EventType) {
  EventType["AdEvent"] = "AdEvent";
  EventType["LogEvent"] = "LogEvent";
  EventType["AdErrorEvent"] = "AdErrorEvent";
})(EventType || (EventType = {}));
var AdEventType;
(function (AdEventType) {
  AdEventType["ALL_ADS_COMPLETED"] = "ALL_ADS_COMPLETED";
  AdEventType["AD_BREAK_FETCH_ERROR"] = "AD_BREAK_FETCH_ERROR";
  AdEventType["CLICKED"] = "CLICKED";
  AdEventType["COMPLETED"] = "COMPLETED";
  AdEventType["CUEPOINTS_CHANGED"] = "CUEPOINTS_CHANGED";
  AdEventType["CONTENT_PAUSE_REQUESTED"] = "CONTENT_PAUSE_REQUESTED";
  AdEventType["CONTENT_RESUME_REQUESTED"] = "CONTENT_RESUME_REQUESTED";
  AdEventType["FIRST_QUARTILE"] = "FIRST_QUARTILE";
  AdEventType["LOG"] = "LOG";
  AdEventType["AD_BREAK_READY"] = "AD_BREAK_READY";
  AdEventType["MIDPOINT"] = "MIDPOINT";
  AdEventType["PAUSED"] = "PAUSED";
  AdEventType["RESUMED"] = "RESUMED";
  AdEventType["SKIPPABLE_STATE_CHANGED"] = "SKIPPABLE_STATE_CHANGED";
  AdEventType["SKIPPED"] = "SKIPPED";
  AdEventType["STARTED"] = "STARTED";
  AdEventType["TAPPED"] = "TAPPED";
  AdEventType["ICON_TAPPED"] = "ICON_TAPPED";
  AdEventType["ICON_FALLBACK_IMAGE_CLOSED"] = "ICON_FALLBACK_IMAGE_CLOSED";
  AdEventType["THIRD_QUARTILE"] = "THIRD_QUARTILE";
  AdEventType["LOADED"] = "LOADED";
  AdEventType["AD_PROGRESS"] = "AD_PROGRESS";
  AdEventType["AD_BUFFERING"] = "AD_BUFFERING";
  AdEventType["AD_BREAK_STARTED"] = "AD_BREAK_STARTED";
  AdEventType["AD_BREAK_ENDED"] = "AD_BREAK_ENDED";
  AdEventType["AD_PERIOD_STARTED"] = "AD_PERIOD_STARTED";
  AdEventType["AD_PERIOD_ENDED"] = "AD_PERIOD_ENDED";
})(AdEventType || (AdEventType = {}));

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
  static getImaRecord(imaAnalytics) {
    const record = AnalyticsUtils.getStandardProperties();
    record['adTag'] = imaAnalytics.adTag;
    record['scaleMode'] = imaAnalytics.scaleMode;
    record['useSoftwareDecoder'] = imaAnalytics.useSoftwareDecoder;
    record['hopprAdUnitId'] = imaAnalytics.hopprAdUnitId;
    record['width'] = imaAnalytics.width;
    record['height'] = imaAnalytics.height;
    record['errorMessage'] = imaAnalytics.errorMessage;
    return record;
  }
  static getImaEvent(adEventType) {
    switch (adEventType) {
      case AdEventType.CLICKED:
        return HopprInternalEvents.HopprInternalImaClick;
      case AdEventType.LOADED:
        return HopprInternalEvents.HopprInternalImaLoaded;
      case AdEventType.STARTED:
        return HopprInternalEvents.HopprInternalImaStarted;
      case AdEventType.COMPLETED:
        return HopprInternalEvents.HopprInternalImaComplete;
      case AdEventType.ALL_ADS_COMPLETED:
        return HopprInternalEvents.HopprInternalImaAllAdsCompleted;
      case AdEventType.FIRST_QUARTILE:
        return HopprInternalEvents.HopprInternalImaFirstQuartlie;
      case AdEventType.MIDPOINT:
        return HopprInternalEvents.HopprInternalImaMidPoint;
      case AdEventType.THIRD_QUARTILE:
        return HopprInternalEvents.HopprInternalImaThirdQuartile;
      case AdEventType.AD_BREAK_FETCH_ERROR:
        return HopprInternalEvents.HopprInternalAdBreakFetchError;
      case AdEventType.PAUSED:
        return HopprInternalEvents.HopprInternalImaPaused;
      case AdEventType.RESUMED:
        return HopprInternalEvents.HopprInternalImaResumed;
      case AdEventType.SKIPPED:
        return HopprInternalEvents.HopprInternalImaSkipped;
      case AdEventType.SKIPPABLE_STATE_CHANGED:
        return HopprInternalEvents.HopprInternalImaSkippableStateChanged;
    }
    return null;
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

var charAt$3 = stringMultibyte.charAt;
var toString$2 = toString$6;
var InternalStateModule$2 = internalState;
var defineIterator = iteratorDefine;
var createIterResultObject = createIterResultObject$2;

var STRING_ITERATOR = 'String Iterator';
var setInternalState$2 = InternalStateModule$2.set;
var getInternalState = InternalStateModule$2.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState$2(this, {
    type: STRING_ITERATOR,
    string: toString$2(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return createIterResultObject(undefined, true);
  point = charAt$3(string, index);
  state.index += point.length;
  return createIterResultObject(point, false);
});

var fails$4 = fails$k;
var wellKnownSymbol$6 = wellKnownSymbol$g;
var IS_PURE = isPure;

var ITERATOR$3 = wellKnownSymbol$6('iterator');

var urlConstructorDetection = !fails$4(function () {
  // eslint-disable-next-line unicorn/relative-url-style -- required for testing
  var url = new URL('b?a=1&b=2&c=3', 'http://a');
  var searchParams = url.searchParams;
  var result = '';
  url.pathname = 'c%20d';
  searchParams.forEach(function (value, key) {
    searchParams['delete']('b');
    result += key + value;
  });
  return (IS_PURE && !url.toJSON)
    || !searchParams.sort
    || url.href !== 'http://a/c%20d?a=1&c=3'
    || searchParams.get('c') !== '3'
    || String(new URLSearchParams('?a=1')) !== 'a=1'
    || !searchParams[ITERATOR$3]
    // throws in Edge
    || new URL('https://a@b').username !== 'a'
    || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b'
    // not punycoded in Edge
    || new URL('http://тест').host !== 'xn--e1aybc'
    // not escaped in Chrome 62-
    || new URL('http://a#б').hash !== '#%D0%B1'
    // fails in Chrome 66-
    || result !== 'a1c3'
    // throws in Safari
    || new URL('http://x', undefined).host !== 'x';
});

var uncurryThis$8 = functionUncurryThis;
var aCallable$1 = aCallable$3;
var NATIVE_BIND$1 = functionBindNative;

var bind$3 = uncurryThis$8(uncurryThis$8.bind);

// optional / simple context binding
var functionBindContext = function (fn, that) {
  aCallable$1(fn);
  return that === undefined ? fn : NATIVE_BIND$1 ? bind$3(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var makeBuiltIn = makeBuiltIn$3.exports;
var defineProperty$1 = objectDefineProperty;

var defineBuiltInAccessor$1 = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty$1.f(target, name, descriptor);
};

var isPrototypeOf = objectIsPrototypeOf;

var $TypeError$3 = TypeError;

var anInstance$2 = function (it, Prototype) {
  if (isPrototypeOf(Prototype, it)) return it;
  throw $TypeError$3('Incorrect invocation');
};

var DESCRIPTORS$2 = descriptors;
var uncurryThis$7 = functionUncurryThis;
var call$6 = functionCall;
var fails$3 = fails$k;
var objectKeys = objectKeys$2;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var toObject$2 = toObject$5;
var IndexedObject = indexedObject;

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty = Object.defineProperty;
var concat$1 = uncurryThis$7([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
var objectAssign = !$assign || fails$3(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS$2 && $assign({ b: 1 }, $assign(defineProperty({}, 'a', {
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
  var T = toObject$2(target);
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
      if (!DESCRIPTORS$2 || call$6(propertyIsEnumerable, S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;

var call$5 = functionCall;
var anObject$4 = anObject$e;
var getMethod$2 = getMethod$5;

var iteratorClose$1 = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject$4(iterator);
  try {
    innerResult = getMethod$2(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call$5(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject$4(innerResult);
  return value;
};

var anObject$3 = anObject$e;
var iteratorClose = iteratorClose$1;

// call something on iterator step with safe closing on error
var callWithSafeIterationClosing$1 = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject$3(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose(iterator, 'throw', error);
  }
};

var wellKnownSymbol$5 = wellKnownSymbol$g;
var Iterators$1 = iterators;

var ITERATOR$2 = wellKnownSymbol$5('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
var isArrayIteratorMethod$1 = function (it) {
  return it !== undefined && (Iterators$1.Array === it || ArrayPrototype[ITERATOR$2] === it);
};

var uncurryThis$6 = functionUncurryThis;
var fails$2 = fails$k;
var isCallable$2 = isCallable$j;
var classof$3 = classof$6;
var getBuiltIn = getBuiltIn$5;
var inspectSource = inspectSource$2;

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec$2 = uncurryThis$6(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable$2(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable$2(argument)) return false;
  switch (classof$3(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec$2(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
var isConstructor$1 = !construct || fails$2(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;

var toPropertyKey = toPropertyKey$3;
var definePropertyModule = objectDefineProperty;
var createPropertyDescriptor$1 = createPropertyDescriptor$5;

var createProperty$2 = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor$1(0, value));
  else object[propertyKey] = value;
};

var classof$2 = classof$6;
var getMethod$1 = getMethod$5;
var isNullOrUndefined$1 = isNullOrUndefined$5;
var Iterators = iterators;
var wellKnownSymbol$4 = wellKnownSymbol$g;

var ITERATOR$1 = wellKnownSymbol$4('iterator');

var getIteratorMethod$3 = function (it) {
  if (!isNullOrUndefined$1(it)) return getMethod$1(it, ITERATOR$1)
    || getMethod$1(it, '@@iterator')
    || Iterators[classof$2(it)];
};

var call$4 = functionCall;
var aCallable = aCallable$3;
var anObject$2 = anObject$e;
var tryToString = tryToString$2;
var getIteratorMethod$2 = getIteratorMethod$3;

var $TypeError$2 = TypeError;

var getIterator$2 = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$2(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject$2(call$4(iteratorMethod, argument));
  throw $TypeError$2(tryToString(argument) + ' is not iterable');
};

var bind$2 = functionBindContext;
var call$3 = functionCall;
var toObject$1 = toObject$5;
var callWithSafeIterationClosing = callWithSafeIterationClosing$1;
var isArrayIteratorMethod = isArrayIteratorMethod$1;
var isConstructor = isConstructor$1;
var lengthOfArrayLike$1 = lengthOfArrayLike$3;
var createProperty$1 = createProperty$2;
var getIterator$1 = getIterator$2;
var getIteratorMethod$1 = getIteratorMethod$3;

var $Array$1 = Array;

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
var arrayFrom$1 = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject$1(arrayLike);
  var IS_CONSTRUCTOR = isConstructor(this);
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  if (mapping) mapfn = bind$2(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
  var iteratorMethod = getIteratorMethod$1(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod && !(this === $Array$1 && isArrayIteratorMethod(iteratorMethod))) {
    iterator = getIterator$1(O, iteratorMethod);
    next = iterator.next;
    result = IS_CONSTRUCTOR ? new this() : [];
    for (;!(step = call$3(next, iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty$1(result, index, value);
    }
  } else {
    length = lengthOfArrayLike$1(O);
    result = IS_CONSTRUCTOR ? new this(length) : $Array$1(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty$1(result, index, value);
    }
  }
  result.length = index;
  return result;
};

var toAbsoluteIndex = toAbsoluteIndex$2;
var lengthOfArrayLike = lengthOfArrayLike$3;
var createProperty = createProperty$2;

var $Array = Array;
var max$1 = Math.max;

var arraySliceSimple = function (O, start, end) {
  var length = lengthOfArrayLike(O);
  var k = toAbsoluteIndex(start, length);
  var fin = toAbsoluteIndex(end === undefined ? length : end, length);
  var result = $Array(max$1(fin - k, 0));
  for (var n = 0; k < fin; k++, n++) createProperty(result, n, O[k]);
  result.length = n;
  return result;
};

// based on https://github.com/bestiejs/punycode.js/blob/master/punycode.js
var uncurryThis$5 = functionUncurryThis;

var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1
var base = 36;
var tMin = 1;
var tMax = 26;
var skew = 38;
var damp = 700;
var initialBias = 72;
var initialN = 128; // 0x80
var delimiter = '-'; // '\x2D'
var regexNonASCII = /[^\0-\u007E]/; // non-ASCII chars
var regexSeparators = /[.\u3002\uFF0E\uFF61]/g; // RFC 3490 separators
var OVERFLOW_ERROR = 'Overflow: input needs wider integers to process';
var baseMinusTMin = base - tMin;

var $RangeError = RangeError;
var exec$1 = uncurryThis$5(regexSeparators.exec);
var floor$3 = Math.floor;
var fromCharCode = String.fromCharCode;
var charCodeAt = uncurryThis$5(''.charCodeAt);
var join$2 = uncurryThis$5([].join);
var push$3 = uncurryThis$5([].push);
var replace$3 = uncurryThis$5(''.replace);
var split$2 = uncurryThis$5(''.split);
var toLowerCase$1 = uncurryThis$5(''.toLowerCase);

/**
 * Creates an array containing the numeric code points of each Unicode
 * character in the string. While JavaScript uses UCS-2 internally,
 * this function will convert a pair of surrogate halves (each of which
 * UCS-2 exposes as separate characters) into a single code point,
 * matching UTF-16.
 */
var ucs2decode = function (string) {
  var output = [];
  var counter = 0;
  var length = string.length;
  while (counter < length) {
    var value = charCodeAt(string, counter++);
    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
      // It's a high surrogate, and there is a next character.
      var extra = charCodeAt(string, counter++);
      if ((extra & 0xFC00) == 0xDC00) { // Low surrogate.
        push$3(output, ((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
      } else {
        // It's an unmatched surrogate; only append this code unit, in case the
        // next code unit is the high surrogate of a surrogate pair.
        push$3(output, value);
        counter--;
      }
    } else {
      push$3(output, value);
    }
  }
  return output;
};

/**
 * Converts a digit/integer into a basic code point.
 */
var digitToBasic = function (digit) {
  //  0..25 map to ASCII a..z or A..Z
  // 26..35 map to ASCII 0..9
  return digit + 22 + 75 * (digit < 26);
};

/**
 * Bias adaptation function as per section 3.4 of RFC 3492.
 * https://tools.ietf.org/html/rfc3492#section-3.4
 */
var adapt = function (delta, numPoints, firstTime) {
  var k = 0;
  delta = firstTime ? floor$3(delta / damp) : delta >> 1;
  delta += floor$3(delta / numPoints);
  while (delta > baseMinusTMin * tMax >> 1) {
    delta = floor$3(delta / baseMinusTMin);
    k += base;
  }
  return floor$3(k + (baseMinusTMin + 1) * delta / (delta + skew));
};

/**
 * Converts a string of Unicode symbols (e.g. a domain name label) to a
 * Punycode string of ASCII-only symbols.
 */
var encode = function (input) {
  var output = [];

  // Convert the input in UCS-2 to an array of Unicode code points.
  input = ucs2decode(input);

  // Cache the length.
  var inputLength = input.length;

  // Initialize the state.
  var n = initialN;
  var delta = 0;
  var bias = initialBias;
  var i, currentValue;

  // Handle the basic code points.
  for (i = 0; i < input.length; i++) {
    currentValue = input[i];
    if (currentValue < 0x80) {
      push$3(output, fromCharCode(currentValue));
    }
  }

  var basicLength = output.length; // number of basic code points.
  var handledCPCount = basicLength; // number of code points that have been handled;

  // Finish the basic string with a delimiter unless it's empty.
  if (basicLength) {
    push$3(output, delimiter);
  }

  // Main encoding loop:
  while (handledCPCount < inputLength) {
    // All non-basic code points < n have been handled already. Find the next larger one:
    var m = maxInt;
    for (i = 0; i < input.length; i++) {
      currentValue = input[i];
      if (currentValue >= n && currentValue < m) {
        m = currentValue;
      }
    }

    // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.
    var handledCPCountPlusOne = handledCPCount + 1;
    if (m - n > floor$3((maxInt - delta) / handledCPCountPlusOne)) {
      throw $RangeError(OVERFLOW_ERROR);
    }

    delta += (m - n) * handledCPCountPlusOne;
    n = m;

    for (i = 0; i < input.length; i++) {
      currentValue = input[i];
      if (currentValue < n && ++delta > maxInt) {
        throw $RangeError(OVERFLOW_ERROR);
      }
      if (currentValue == n) {
        // Represent delta as a generalized variable-length integer.
        var q = delta;
        var k = base;
        while (true) {
          var t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
          if (q < t) break;
          var qMinusT = q - t;
          var baseMinusT = base - t;
          push$3(output, fromCharCode(digitToBasic(t + qMinusT % baseMinusT)));
          q = floor$3(qMinusT / baseMinusT);
          k += base;
        }

        push$3(output, fromCharCode(digitToBasic(q)));
        bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
        delta = 0;
        handledCPCount++;
      }
    }

    delta++;
    n++;
  }
  return join$2(output, '');
};

var stringPunycodeToAscii = function (input) {
  var encoded = [];
  var labels = split$2(replace$3(toLowerCase$1(input), regexSeparators, '\u002E'), '.');
  var i, label;
  for (i = 0; i < labels.length; i++) {
    label = labels[i];
    push$3(encoded, exec$1(regexNonASCII, label) ? 'xn--' + encode(label) : label);
  }
  return join$2(encoded, '.');
};

var $TypeError$1 = TypeError;

var validateArgumentsLength$2 = function (passed, required) {
  if (passed < required) throw $TypeError$1('Not enough arguments');
  return passed;
};

var defineBuiltIn$2 = defineBuiltIn$8;

var defineBuiltIns$1 = function (target, src, options) {
  for (var key in src) defineBuiltIn$2(target, key, src[key], options);
  return target;
};

var arraySlice$1 = arraySliceSimple;

var floor$2 = Math.floor;

var mergeSort = function (array, comparefn) {
  var length = array.length;
  var middle = floor$2(length / 2);
  return length < 8 ? insertionSort(array, comparefn) : merge(
    array,
    mergeSort(arraySlice$1(array, 0, middle), comparefn),
    mergeSort(arraySlice$1(array, middle), comparefn),
    comparefn
  );
};

var insertionSort = function (array, comparefn) {
  var length = array.length;
  var i = 1;
  var element, j;

  while (i < length) {
    j = i;
    element = array[i];
    while (j && comparefn(array[j - 1], element) > 0) {
      array[j] = array[--j];
    }
    if (j !== i++) array[j] = element;
  } return array;
};

var merge = function (array, left, right, comparefn) {
  var llength = left.length;
  var rlength = right.length;
  var lindex = 0;
  var rindex = 0;

  while (lindex < llength || rindex < rlength) {
    array[lindex + rindex] = (lindex < llength && rindex < rlength)
      ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++]
      : lindex < llength ? left[lindex++] : right[rindex++];
  } return array;
};

var arraySort$1 = mergeSort;

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`

var $$4 = _export;
var global$2 = global$g;
var call$2 = functionCall;
var uncurryThis$4 = functionUncurryThis;
var DESCRIPTORS$1 = descriptors;
var USE_NATIVE_URL$1 = urlConstructorDetection;
var defineBuiltIn$1 = defineBuiltIn$8;
var defineBuiltIns = defineBuiltIns$1;
var setToStringTag$1 = setToStringTag$4;
var createIteratorConstructor = iteratorCreateConstructor;
var InternalStateModule$1 = internalState;
var anInstance$1 = anInstance$2;
var isCallable$1 = isCallable$j;
var hasOwn$1 = hasOwnProperty_1;
var bind$1 = functionBindContext;
var classof$1 = classof$6;
var anObject$1 = anObject$e;
var isObject$1 = isObject$8;
var $toString$1 = toString$6;
var create = objectCreate;
var createPropertyDescriptor = createPropertyDescriptor$5;
var getIterator = getIterator$2;
var getIteratorMethod = getIteratorMethod$3;
var validateArgumentsLength$1 = validateArgumentsLength$2;
var wellKnownSymbol$3 = wellKnownSymbol$g;
var arraySort = arraySort$1;

var ITERATOR = wellKnownSymbol$3('iterator');
var URL_SEARCH_PARAMS = 'URLSearchParams';
var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
var setInternalState$1 = InternalStateModule$1.set;
var getInternalParamsState = InternalStateModule$1.getterFor(URL_SEARCH_PARAMS);
var getInternalIteratorState = InternalStateModule$1.getterFor(URL_SEARCH_PARAMS_ITERATOR);
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Avoid NodeJS experimental warning
var safeGetBuiltIn = function (name) {
  if (!DESCRIPTORS$1) return global$2[name];
  var descriptor = getOwnPropertyDescriptor(global$2, name);
  return descriptor && descriptor.value;
};

var nativeFetch = safeGetBuiltIn('fetch');
var NativeRequest = safeGetBuiltIn('Request');
var Headers = safeGetBuiltIn('Headers');
var RequestPrototype = NativeRequest && NativeRequest.prototype;
var HeadersPrototype = Headers && Headers.prototype;
var RegExp$1 = global$2.RegExp;
var TypeError$2 = global$2.TypeError;
var decodeURIComponent = global$2.decodeURIComponent;
var encodeURIComponent$1 = global$2.encodeURIComponent;
var charAt$2 = uncurryThis$4(''.charAt);
var join$1 = uncurryThis$4([].join);
var push$2 = uncurryThis$4([].push);
var replace$2 = uncurryThis$4(''.replace);
var shift$1 = uncurryThis$4([].shift);
var splice = uncurryThis$4([].splice);
var split$1 = uncurryThis$4(''.split);
var stringSlice$3 = uncurryThis$4(''.slice);

var plus = /\+/g;
var sequences = Array(4);

var percentSequence = function (bytes) {
  return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp$1('((?:%[\\da-f]{2}){' + bytes + '})', 'gi'));
};

var percentDecode = function (sequence) {
  try {
    return decodeURIComponent(sequence);
  } catch (error) {
    return sequence;
  }
};

var deserialize = function (it) {
  var result = replace$2(it, plus, ' ');
  var bytes = 4;
  try {
    return decodeURIComponent(result);
  } catch (error) {
    while (bytes) {
      result = replace$2(result, percentSequence(bytes--), percentDecode);
    }
    return result;
  }
};

var find = /[!'()~]|%20/g;

var replacements = {
  '!': '%21',
  "'": '%27',
  '(': '%28',
  ')': '%29',
  '~': '%7E',
  '%20': '+'
};

var replacer = function (match) {
  return replacements[match];
};

var serialize = function (it) {
  return replace$2(encodeURIComponent$1(it), find, replacer);
};

var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
  setInternalState$1(this, {
    type: URL_SEARCH_PARAMS_ITERATOR,
    iterator: getIterator(getInternalParamsState(params).entries),
    kind: kind
  });
}, 'Iterator', function next() {
  var state = getInternalIteratorState(this);
  var kind = state.kind;
  var step = state.iterator.next();
  var entry = step.value;
  if (!step.done) {
    step.value = kind === 'keys' ? entry.key : kind === 'values' ? entry.value : [entry.key, entry.value];
  } return step;
}, true);

var URLSearchParamsState = function (init) {
  this.entries = [];
  this.url = null;

  if (init !== undefined) {
    if (isObject$1(init)) this.parseObject(init);
    else this.parseQuery(typeof init == 'string' ? charAt$2(init, 0) === '?' ? stringSlice$3(init, 1) : init : $toString$1(init));
  }
};

URLSearchParamsState.prototype = {
  type: URL_SEARCH_PARAMS,
  bindURL: function (url) {
    this.url = url;
    this.update();
  },
  parseObject: function (object) {
    var iteratorMethod = getIteratorMethod(object);
    var iterator, next, step, entryIterator, entryNext, first, second;

    if (iteratorMethod) {
      iterator = getIterator(object, iteratorMethod);
      next = iterator.next;
      while (!(step = call$2(next, iterator)).done) {
        entryIterator = getIterator(anObject$1(step.value));
        entryNext = entryIterator.next;
        if (
          (first = call$2(entryNext, entryIterator)).done ||
          (second = call$2(entryNext, entryIterator)).done ||
          !call$2(entryNext, entryIterator).done
        ) throw TypeError$2('Expected sequence with length 2');
        push$2(this.entries, { key: $toString$1(first.value), value: $toString$1(second.value) });
      }
    } else for (var key in object) if (hasOwn$1(object, key)) {
      push$2(this.entries, { key: key, value: $toString$1(object[key]) });
    }
  },
  parseQuery: function (query) {
    if (query) {
      var attributes = split$1(query, '&');
      var index = 0;
      var attribute, entry;
      while (index < attributes.length) {
        attribute = attributes[index++];
        if (attribute.length) {
          entry = split$1(attribute, '=');
          push$2(this.entries, {
            key: deserialize(shift$1(entry)),
            value: deserialize(join$1(entry, '='))
          });
        }
      }
    }
  },
  serialize: function () {
    var entries = this.entries;
    var result = [];
    var index = 0;
    var entry;
    while (index < entries.length) {
      entry = entries[index++];
      push$2(result, serialize(entry.key) + '=' + serialize(entry.value));
    } return join$1(result, '&');
  },
  update: function () {
    this.entries.length = 0;
    this.parseQuery(this.url.query);
  },
  updateURL: function () {
    if (this.url) this.url.update();
  }
};

// `URLSearchParams` constructor
// https://url.spec.whatwg.org/#interface-urlsearchparams
var URLSearchParamsConstructor = function URLSearchParams(/* init */) {
  anInstance$1(this, URLSearchParamsPrototype);
  var init = arguments.length > 0 ? arguments[0] : undefined;
  setInternalState$1(this, new URLSearchParamsState(init));
};

var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;

defineBuiltIns(URLSearchParamsPrototype, {
  // `URLSearchParams.prototype.append` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-append
  append: function append(name, value) {
    validateArgumentsLength$1(arguments.length, 2);
    var state = getInternalParamsState(this);
    push$2(state.entries, { key: $toString$1(name), value: $toString$1(value) });
    state.updateURL();
  },
  // `URLSearchParams.prototype.delete` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
  'delete': function (name) {
    validateArgumentsLength$1(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var key = $toString$1(name);
    var index = 0;
    while (index < entries.length) {
      if (entries[index].key === key) splice(entries, index, 1);
      else index++;
    }
    state.updateURL();
  },
  // `URLSearchParams.prototype.get` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-get
  get: function get(name) {
    validateArgumentsLength$1(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = $toString$1(name);
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) return entries[index].value;
    }
    return null;
  },
  // `URLSearchParams.prototype.getAll` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
  getAll: function getAll(name) {
    validateArgumentsLength$1(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = $toString$1(name);
    var result = [];
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) push$2(result, entries[index].value);
    }
    return result;
  },
  // `URLSearchParams.prototype.has` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-has
  has: function has(name) {
    validateArgumentsLength$1(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = $toString$1(name);
    var index = 0;
    while (index < entries.length) {
      if (entries[index++].key === key) return true;
    }
    return false;
  },
  // `URLSearchParams.prototype.set` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-set
  set: function set(name, value) {
    validateArgumentsLength$1(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var found = false;
    var key = $toString$1(name);
    var val = $toString$1(value);
    var index = 0;
    var entry;
    for (; index < entries.length; index++) {
      entry = entries[index];
      if (entry.key === key) {
        if (found) splice(entries, index--, 1);
        else {
          found = true;
          entry.value = val;
        }
      }
    }
    if (!found) push$2(entries, { key: key, value: val });
    state.updateURL();
  },
  // `URLSearchParams.prototype.sort` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
  sort: function sort() {
    var state = getInternalParamsState(this);
    arraySort(state.entries, function (a, b) {
      return a.key > b.key ? 1 : -1;
    });
    state.updateURL();
  },
  // `URLSearchParams.prototype.forEach` method
  forEach: function forEach(callback /* , thisArg */) {
    var entries = getInternalParamsState(this).entries;
    var boundFunction = bind$1(callback, arguments.length > 1 ? arguments[1] : undefined);
    var index = 0;
    var entry;
    while (index < entries.length) {
      entry = entries[index++];
      boundFunction(entry.value, entry.key, this);
    }
  },
  // `URLSearchParams.prototype.keys` method
  keys: function keys() {
    return new URLSearchParamsIterator(this, 'keys');
  },
  // `URLSearchParams.prototype.values` method
  values: function values() {
    return new URLSearchParamsIterator(this, 'values');
  },
  // `URLSearchParams.prototype.entries` method
  entries: function entries() {
    return new URLSearchParamsIterator(this, 'entries');
  }
}, { enumerable: true });

// `URLSearchParams.prototype[@@iterator]` method
defineBuiltIn$1(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries, { name: 'entries' });

// `URLSearchParams.prototype.toString` method
// https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
defineBuiltIn$1(URLSearchParamsPrototype, 'toString', function toString() {
  return getInternalParamsState(this).serialize();
}, { enumerable: true });

setToStringTag$1(URLSearchParamsConstructor, URL_SEARCH_PARAMS);

$$4({ global: true, constructor: true, forced: !USE_NATIVE_URL$1 }, {
  URLSearchParams: URLSearchParamsConstructor
});

// Wrap `fetch` and `Request` for correct work with polyfilled `URLSearchParams`
if (!USE_NATIVE_URL$1 && isCallable$1(Headers)) {
  var headersHas = uncurryThis$4(HeadersPrototype.has);
  var headersSet = uncurryThis$4(HeadersPrototype.set);

  var wrapRequestOptions = function (init) {
    if (isObject$1(init)) {
      var body = init.body;
      var headers;
      if (classof$1(body) === URL_SEARCH_PARAMS) {
        headers = init.headers ? new Headers(init.headers) : new Headers();
        if (!headersHas(headers, 'content-type')) {
          headersSet(headers, 'content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
        return create(init, {
          body: createPropertyDescriptor(0, $toString$1(body)),
          headers: createPropertyDescriptor(0, headers)
        });
      }
    } return init;
  };

  if (isCallable$1(nativeFetch)) {
    $$4({ global: true, enumerable: true, dontCallGetSet: true, forced: true }, {
      fetch: function fetch(input /* , init */) {
        return nativeFetch(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
      }
    });
  }

  if (isCallable$1(NativeRequest)) {
    var RequestConstructor = function Request(input /* , init */) {
      anInstance$1(this, RequestPrototype);
      return new NativeRequest(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
    };

    RequestPrototype.constructor = RequestConstructor;
    RequestConstructor.prototype = RequestPrototype;

    $$4({ global: true, constructor: true, dontCallGetSet: true, forced: true }, {
      Request: RequestConstructor
    });
  }
}

var web_urlSearchParams_constructor = {
  URLSearchParams: URLSearchParamsConstructor,
  getState: getInternalParamsState
};

// TODO: in core-js@4, move /modules/ dependencies to public entries for better optimization by tools like `preset-env`

var $$3 = _export;
var DESCRIPTORS = descriptors;
var USE_NATIVE_URL = urlConstructorDetection;
var global$1 = global$g;
var bind = functionBindContext;
var uncurryThis$3 = functionUncurryThis;
var defineBuiltIn = defineBuiltIn$8;
var defineBuiltInAccessor = defineBuiltInAccessor$1;
var anInstance = anInstance$2;
var hasOwn = hasOwnProperty_1;
var assign$1 = objectAssign;
var arrayFrom = arrayFrom$1;
var arraySlice = arraySliceSimple;
var codeAt = stringMultibyte.codeAt;
var toASCII = stringPunycodeToAscii;
var $toString = toString$6;
var setToStringTag = setToStringTag$4;
var validateArgumentsLength = validateArgumentsLength$2;
var URLSearchParamsModule = web_urlSearchParams_constructor;
var InternalStateModule = internalState;

var setInternalState = InternalStateModule.set;
var getInternalURLState = InternalStateModule.getterFor('URL');
var URLSearchParams$1 = URLSearchParamsModule.URLSearchParams;
var getInternalSearchParamsState = URLSearchParamsModule.getState;

var NativeURL = global$1.URL;
var TypeError$1 = global$1.TypeError;
var parseInt = global$1.parseInt;
var floor$1 = Math.floor;
var pow = Math.pow;
var charAt$1 = uncurryThis$3(''.charAt);
var exec = uncurryThis$3(/./.exec);
var join = uncurryThis$3([].join);
var numberToString = uncurryThis$3(1.0.toString);
var pop = uncurryThis$3([].pop);
var push$1 = uncurryThis$3([].push);
var replace$1 = uncurryThis$3(''.replace);
var shift = uncurryThis$3([].shift);
var split = uncurryThis$3(''.split);
var stringSlice$2 = uncurryThis$3(''.slice);
var toLowerCase = uncurryThis$3(''.toLowerCase);
var unshift = uncurryThis$3([].unshift);

var INVALID_AUTHORITY = 'Invalid authority';
var INVALID_SCHEME = 'Invalid scheme';
var INVALID_HOST = 'Invalid host';
var INVALID_PORT = 'Invalid port';

var ALPHA = /[a-z]/i;
// eslint-disable-next-line regexp/no-obscure-range -- safe
var ALPHANUMERIC = /[\d+-.a-z]/i;
var DIGIT = /\d/;
var HEX_START = /^0x/i;
var OCT = /^[0-7]+$/;
var DEC = /^\d+$/;
var HEX = /^[\da-f]+$/i;
/* eslint-disable regexp/no-control-character -- safe */
var FORBIDDEN_HOST_CODE_POINT = /[\0\t\n\r #%/:<>?@[\\\]^|]/;
var FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\0\t\n\r #/:<>?@[\\\]^|]/;
var LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE = /^[\u0000-\u0020]+|[\u0000-\u0020]+$/g;
var TAB_AND_NEW_LINE = /[\t\n\r]/g;
/* eslint-enable regexp/no-control-character -- safe */
var EOF;

// https://url.spec.whatwg.org/#ipv4-number-parser
var parseIPv4 = function (input) {
  var parts = split(input, '.');
  var partsLength, numbers, index, part, radix, number, ipv4;
  if (parts.length && parts[parts.length - 1] == '') {
    parts.length--;
  }
  partsLength = parts.length;
  if (partsLength > 4) return input;
  numbers = [];
  for (index = 0; index < partsLength; index++) {
    part = parts[index];
    if (part == '') return input;
    radix = 10;
    if (part.length > 1 && charAt$1(part, 0) == '0') {
      radix = exec(HEX_START, part) ? 16 : 8;
      part = stringSlice$2(part, radix == 8 ? 1 : 2);
    }
    if (part === '') {
      number = 0;
    } else {
      if (!exec(radix == 10 ? DEC : radix == 8 ? OCT : HEX, part)) return input;
      number = parseInt(part, radix);
    }
    push$1(numbers, number);
  }
  for (index = 0; index < partsLength; index++) {
    number = numbers[index];
    if (index == partsLength - 1) {
      if (number >= pow(256, 5 - partsLength)) return null;
    } else if (number > 255) return null;
  }
  ipv4 = pop(numbers);
  for (index = 0; index < numbers.length; index++) {
    ipv4 += numbers[index] * pow(256, 3 - index);
  }
  return ipv4;
};

// https://url.spec.whatwg.org/#concept-ipv6-parser
// eslint-disable-next-line max-statements -- TODO
var parseIPv6 = function (input) {
  var address = [0, 0, 0, 0, 0, 0, 0, 0];
  var pieceIndex = 0;
  var compress = null;
  var pointer = 0;
  var value, length, numbersSeen, ipv4Piece, number, swaps, swap;

  var chr = function () {
    return charAt$1(input, pointer);
  };

  if (chr() == ':') {
    if (charAt$1(input, 1) != ':') return;
    pointer += 2;
    pieceIndex++;
    compress = pieceIndex;
  }
  while (chr()) {
    if (pieceIndex == 8) return;
    if (chr() == ':') {
      if (compress !== null) return;
      pointer++;
      pieceIndex++;
      compress = pieceIndex;
      continue;
    }
    value = length = 0;
    while (length < 4 && exec(HEX, chr())) {
      value = value * 16 + parseInt(chr(), 16);
      pointer++;
      length++;
    }
    if (chr() == '.') {
      if (length == 0) return;
      pointer -= length;
      if (pieceIndex > 6) return;
      numbersSeen = 0;
      while (chr()) {
        ipv4Piece = null;
        if (numbersSeen > 0) {
          if (chr() == '.' && numbersSeen < 4) pointer++;
          else return;
        }
        if (!exec(DIGIT, chr())) return;
        while (exec(DIGIT, chr())) {
          number = parseInt(chr(), 10);
          if (ipv4Piece === null) ipv4Piece = number;
          else if (ipv4Piece == 0) return;
          else ipv4Piece = ipv4Piece * 10 + number;
          if (ipv4Piece > 255) return;
          pointer++;
        }
        address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
        numbersSeen++;
        if (numbersSeen == 2 || numbersSeen == 4) pieceIndex++;
      }
      if (numbersSeen != 4) return;
      break;
    } else if (chr() == ':') {
      pointer++;
      if (!chr()) return;
    } else if (chr()) return;
    address[pieceIndex++] = value;
  }
  if (compress !== null) {
    swaps = pieceIndex - compress;
    pieceIndex = 7;
    while (pieceIndex != 0 && swaps > 0) {
      swap = address[pieceIndex];
      address[pieceIndex--] = address[compress + swaps - 1];
      address[compress + --swaps] = swap;
    }
  } else if (pieceIndex != 8) return;
  return address;
};

var findLongestZeroSequence = function (ipv6) {
  var maxIndex = null;
  var maxLength = 1;
  var currStart = null;
  var currLength = 0;
  var index = 0;
  for (; index < 8; index++) {
    if (ipv6[index] !== 0) {
      if (currLength > maxLength) {
        maxIndex = currStart;
        maxLength = currLength;
      }
      currStart = null;
      currLength = 0;
    } else {
      if (currStart === null) currStart = index;
      ++currLength;
    }
  }
  if (currLength > maxLength) {
    maxIndex = currStart;
    maxLength = currLength;
  }
  return maxIndex;
};

// https://url.spec.whatwg.org/#host-serializing
var serializeHost = function (host) {
  var result, index, compress, ignore0;
  // ipv4
  if (typeof host == 'number') {
    result = [];
    for (index = 0; index < 4; index++) {
      unshift(result, host % 256);
      host = floor$1(host / 256);
    } return join(result, '.');
  // ipv6
  } else if (typeof host == 'object') {
    result = '';
    compress = findLongestZeroSequence(host);
    for (index = 0; index < 8; index++) {
      if (ignore0 && host[index] === 0) continue;
      if (ignore0) ignore0 = false;
      if (compress === index) {
        result += index ? ':' : '::';
        ignore0 = true;
      } else {
        result += numberToString(host[index], 16);
        if (index < 7) result += ':';
      }
    }
    return '[' + result + ']';
  } return host;
};

var C0ControlPercentEncodeSet = {};
var fragmentPercentEncodeSet = assign$1({}, C0ControlPercentEncodeSet, {
  ' ': 1, '"': 1, '<': 1, '>': 1, '`': 1
});
var pathPercentEncodeSet = assign$1({}, fragmentPercentEncodeSet, {
  '#': 1, '?': 1, '{': 1, '}': 1
});
var userinfoPercentEncodeSet = assign$1({}, pathPercentEncodeSet, {
  '/': 1, ':': 1, ';': 1, '=': 1, '@': 1, '[': 1, '\\': 1, ']': 1, '^': 1, '|': 1
});

var percentEncode = function (chr, set) {
  var code = codeAt(chr, 0);
  return code > 0x20 && code < 0x7F && !hasOwn(set, chr) ? chr : encodeURIComponent(chr);
};

// https://url.spec.whatwg.org/#special-scheme
var specialSchemes = {
  ftp: 21,
  file: null,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443
};

// https://url.spec.whatwg.org/#windows-drive-letter
var isWindowsDriveLetter = function (string, normalized) {
  var second;
  return string.length == 2 && exec(ALPHA, charAt$1(string, 0))
    && ((second = charAt$1(string, 1)) == ':' || (!normalized && second == '|'));
};

// https://url.spec.whatwg.org/#start-with-a-windows-drive-letter
var startsWithWindowsDriveLetter = function (string) {
  var third;
  return string.length > 1 && isWindowsDriveLetter(stringSlice$2(string, 0, 2)) && (
    string.length == 2 ||
    ((third = charAt$1(string, 2)) === '/' || third === '\\' || third === '?' || third === '#')
  );
};

// https://url.spec.whatwg.org/#single-dot-path-segment
var isSingleDot = function (segment) {
  return segment === '.' || toLowerCase(segment) === '%2e';
};

// https://url.spec.whatwg.org/#double-dot-path-segment
var isDoubleDot = function (segment) {
  segment = toLowerCase(segment);
  return segment === '..' || segment === '%2e.' || segment === '.%2e' || segment === '%2e%2e';
};

// States:
var SCHEME_START = {};
var SCHEME = {};
var NO_SCHEME = {};
var SPECIAL_RELATIVE_OR_AUTHORITY = {};
var PATH_OR_AUTHORITY = {};
var RELATIVE = {};
var RELATIVE_SLASH = {};
var SPECIAL_AUTHORITY_SLASHES = {};
var SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
var AUTHORITY = {};
var HOST = {};
var HOSTNAME = {};
var PORT = {};
var FILE = {};
var FILE_SLASH = {};
var FILE_HOST = {};
var PATH_START = {};
var PATH = {};
var CANNOT_BE_A_BASE_URL_PATH = {};
var QUERY = {};
var FRAGMENT = {};

var URLState = function (url, isBase, base) {
  var urlString = $toString(url);
  var baseState, failure, searchParams;
  if (isBase) {
    failure = this.parse(urlString);
    if (failure) throw TypeError$1(failure);
    this.searchParams = null;
  } else {
    if (base !== undefined) baseState = new URLState(base, true);
    failure = this.parse(urlString, null, baseState);
    if (failure) throw TypeError$1(failure);
    searchParams = getInternalSearchParamsState(new URLSearchParams$1());
    searchParams.bindURL(this);
    this.searchParams = searchParams;
  }
};

URLState.prototype = {
  type: 'URL',
  // https://url.spec.whatwg.org/#url-parsing
  // eslint-disable-next-line max-statements -- TODO
  parse: function (input, stateOverride, base) {
    var url = this;
    var state = stateOverride || SCHEME_START;
    var pointer = 0;
    var buffer = '';
    var seenAt = false;
    var seenBracket = false;
    var seenPasswordToken = false;
    var codePoints, chr, bufferCodePoints, failure;

    input = $toString(input);

    if (!stateOverride) {
      url.scheme = '';
      url.username = '';
      url.password = '';
      url.host = null;
      url.port = null;
      url.path = [];
      url.query = null;
      url.fragment = null;
      url.cannotBeABaseURL = false;
      input = replace$1(input, LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE, '');
    }

    input = replace$1(input, TAB_AND_NEW_LINE, '');

    codePoints = arrayFrom(input);

    while (pointer <= codePoints.length) {
      chr = codePoints[pointer];
      switch (state) {
        case SCHEME_START:
          if (chr && exec(ALPHA, chr)) {
            buffer += toLowerCase(chr);
            state = SCHEME;
          } else if (!stateOverride) {
            state = NO_SCHEME;
            continue;
          } else return INVALID_SCHEME;
          break;

        case SCHEME:
          if (chr && (exec(ALPHANUMERIC, chr) || chr == '+' || chr == '-' || chr == '.')) {
            buffer += toLowerCase(chr);
          } else if (chr == ':') {
            if (stateOverride && (
              (url.isSpecial() != hasOwn(specialSchemes, buffer)) ||
              (buffer == 'file' && (url.includesCredentials() || url.port !== null)) ||
              (url.scheme == 'file' && !url.host)
            )) return;
            url.scheme = buffer;
            if (stateOverride) {
              if (url.isSpecial() && specialSchemes[url.scheme] == url.port) url.port = null;
              return;
            }
            buffer = '';
            if (url.scheme == 'file') {
              state = FILE;
            } else if (url.isSpecial() && base && base.scheme == url.scheme) {
              state = SPECIAL_RELATIVE_OR_AUTHORITY;
            } else if (url.isSpecial()) {
              state = SPECIAL_AUTHORITY_SLASHES;
            } else if (codePoints[pointer + 1] == '/') {
              state = PATH_OR_AUTHORITY;
              pointer++;
            } else {
              url.cannotBeABaseURL = true;
              push$1(url.path, '');
              state = CANNOT_BE_A_BASE_URL_PATH;
            }
          } else if (!stateOverride) {
            buffer = '';
            state = NO_SCHEME;
            pointer = 0;
            continue;
          } else return INVALID_SCHEME;
          break;

        case NO_SCHEME:
          if (!base || (base.cannotBeABaseURL && chr != '#')) return INVALID_SCHEME;
          if (base.cannotBeABaseURL && chr == '#') {
            url.scheme = base.scheme;
            url.path = arraySlice(base.path);
            url.query = base.query;
            url.fragment = '';
            url.cannotBeABaseURL = true;
            state = FRAGMENT;
            break;
          }
          state = base.scheme == 'file' ? FILE : RELATIVE;
          continue;

        case SPECIAL_RELATIVE_OR_AUTHORITY:
          if (chr == '/' && codePoints[pointer + 1] == '/') {
            state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
            pointer++;
          } else {
            state = RELATIVE;
            continue;
          } break;

        case PATH_OR_AUTHORITY:
          if (chr == '/') {
            state = AUTHORITY;
            break;
          } else {
            state = PATH;
            continue;
          }

        case RELATIVE:
          url.scheme = base.scheme;
          if (chr == EOF) {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = arraySlice(base.path);
            url.query = base.query;
          } else if (chr == '/' || (chr == '\\' && url.isSpecial())) {
            state = RELATIVE_SLASH;
          } else if (chr == '?') {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = arraySlice(base.path);
            url.query = '';
            state = QUERY;
          } else if (chr == '#') {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = arraySlice(base.path);
            url.query = base.query;
            url.fragment = '';
            state = FRAGMENT;
          } else {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            url.path = arraySlice(base.path);
            url.path.length--;
            state = PATH;
            continue;
          } break;

        case RELATIVE_SLASH:
          if (url.isSpecial() && (chr == '/' || chr == '\\')) {
            state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
          } else if (chr == '/') {
            state = AUTHORITY;
          } else {
            url.username = base.username;
            url.password = base.password;
            url.host = base.host;
            url.port = base.port;
            state = PATH;
            continue;
          } break;

        case SPECIAL_AUTHORITY_SLASHES:
          state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
          if (chr != '/' || charAt$1(buffer, pointer + 1) != '/') continue;
          pointer++;
          break;

        case SPECIAL_AUTHORITY_IGNORE_SLASHES:
          if (chr != '/' && chr != '\\') {
            state = AUTHORITY;
            continue;
          } break;

        case AUTHORITY:
          if (chr == '@') {
            if (seenAt) buffer = '%40' + buffer;
            seenAt = true;
            bufferCodePoints = arrayFrom(buffer);
            for (var i = 0; i < bufferCodePoints.length; i++) {
              var codePoint = bufferCodePoints[i];
              if (codePoint == ':' && !seenPasswordToken) {
                seenPasswordToken = true;
                continue;
              }
              var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);
              if (seenPasswordToken) url.password += encodedCodePoints;
              else url.username += encodedCodePoints;
            }
            buffer = '';
          } else if (
            chr == EOF || chr == '/' || chr == '?' || chr == '#' ||
            (chr == '\\' && url.isSpecial())
          ) {
            if (seenAt && buffer == '') return INVALID_AUTHORITY;
            pointer -= arrayFrom(buffer).length + 1;
            buffer = '';
            state = HOST;
          } else buffer += chr;
          break;

        case HOST:
        case HOSTNAME:
          if (stateOverride && url.scheme == 'file') {
            state = FILE_HOST;
            continue;
          } else if (chr == ':' && !seenBracket) {
            if (buffer == '') return INVALID_HOST;
            failure = url.parseHost(buffer);
            if (failure) return failure;
            buffer = '';
            state = PORT;
            if (stateOverride == HOSTNAME) return;
          } else if (
            chr == EOF || chr == '/' || chr == '?' || chr == '#' ||
            (chr == '\\' && url.isSpecial())
          ) {
            if (url.isSpecial() && buffer == '') return INVALID_HOST;
            if (stateOverride && buffer == '' && (url.includesCredentials() || url.port !== null)) return;
            failure = url.parseHost(buffer);
            if (failure) return failure;
            buffer = '';
            state = PATH_START;
            if (stateOverride) return;
            continue;
          } else {
            if (chr == '[') seenBracket = true;
            else if (chr == ']') seenBracket = false;
            buffer += chr;
          } break;

        case PORT:
          if (exec(DIGIT, chr)) {
            buffer += chr;
          } else if (
            chr == EOF || chr == '/' || chr == '?' || chr == '#' ||
            (chr == '\\' && url.isSpecial()) ||
            stateOverride
          ) {
            if (buffer != '') {
              var port = parseInt(buffer, 10);
              if (port > 0xFFFF) return INVALID_PORT;
              url.port = (url.isSpecial() && port === specialSchemes[url.scheme]) ? null : port;
              buffer = '';
            }
            if (stateOverride) return;
            state = PATH_START;
            continue;
          } else return INVALID_PORT;
          break;

        case FILE:
          url.scheme = 'file';
          if (chr == '/' || chr == '\\') state = FILE_SLASH;
          else if (base && base.scheme == 'file') {
            if (chr == EOF) {
              url.host = base.host;
              url.path = arraySlice(base.path);
              url.query = base.query;
            } else if (chr == '?') {
              url.host = base.host;
              url.path = arraySlice(base.path);
              url.query = '';
              state = QUERY;
            } else if (chr == '#') {
              url.host = base.host;
              url.path = arraySlice(base.path);
              url.query = base.query;
              url.fragment = '';
              state = FRAGMENT;
            } else {
              if (!startsWithWindowsDriveLetter(join(arraySlice(codePoints, pointer), ''))) {
                url.host = base.host;
                url.path = arraySlice(base.path);
                url.shortenPath();
              }
              state = PATH;
              continue;
            }
          } else {
            state = PATH;
            continue;
          } break;

        case FILE_SLASH:
          if (chr == '/' || chr == '\\') {
            state = FILE_HOST;
            break;
          }
          if (base && base.scheme == 'file' && !startsWithWindowsDriveLetter(join(arraySlice(codePoints, pointer), ''))) {
            if (isWindowsDriveLetter(base.path[0], true)) push$1(url.path, base.path[0]);
            else url.host = base.host;
          }
          state = PATH;
          continue;

        case FILE_HOST:
          if (chr == EOF || chr == '/' || chr == '\\' || chr == '?' || chr == '#') {
            if (!stateOverride && isWindowsDriveLetter(buffer)) {
              state = PATH;
            } else if (buffer == '') {
              url.host = '';
              if (stateOverride) return;
              state = PATH_START;
            } else {
              failure = url.parseHost(buffer);
              if (failure) return failure;
              if (url.host == 'localhost') url.host = '';
              if (stateOverride) return;
              buffer = '';
              state = PATH_START;
            } continue;
          } else buffer += chr;
          break;

        case PATH_START:
          if (url.isSpecial()) {
            state = PATH;
            if (chr != '/' && chr != '\\') continue;
          } else if (!stateOverride && chr == '?') {
            url.query = '';
            state = QUERY;
          } else if (!stateOverride && chr == '#') {
            url.fragment = '';
            state = FRAGMENT;
          } else if (chr != EOF) {
            state = PATH;
            if (chr != '/') continue;
          } break;

        case PATH:
          if (
            chr == EOF || chr == '/' ||
            (chr == '\\' && url.isSpecial()) ||
            (!stateOverride && (chr == '?' || chr == '#'))
          ) {
            if (isDoubleDot(buffer)) {
              url.shortenPath();
              if (chr != '/' && !(chr == '\\' && url.isSpecial())) {
                push$1(url.path, '');
              }
            } else if (isSingleDot(buffer)) {
              if (chr != '/' && !(chr == '\\' && url.isSpecial())) {
                push$1(url.path, '');
              }
            } else {
              if (url.scheme == 'file' && !url.path.length && isWindowsDriveLetter(buffer)) {
                if (url.host) url.host = '';
                buffer = charAt$1(buffer, 0) + ':'; // normalize windows drive letter
              }
              push$1(url.path, buffer);
            }
            buffer = '';
            if (url.scheme == 'file' && (chr == EOF || chr == '?' || chr == '#')) {
              while (url.path.length > 1 && url.path[0] === '') {
                shift(url.path);
              }
            }
            if (chr == '?') {
              url.query = '';
              state = QUERY;
            } else if (chr == '#') {
              url.fragment = '';
              state = FRAGMENT;
            }
          } else {
            buffer += percentEncode(chr, pathPercentEncodeSet);
          } break;

        case CANNOT_BE_A_BASE_URL_PATH:
          if (chr == '?') {
            url.query = '';
            state = QUERY;
          } else if (chr == '#') {
            url.fragment = '';
            state = FRAGMENT;
          } else if (chr != EOF) {
            url.path[0] += percentEncode(chr, C0ControlPercentEncodeSet);
          } break;

        case QUERY:
          if (!stateOverride && chr == '#') {
            url.fragment = '';
            state = FRAGMENT;
          } else if (chr != EOF) {
            if (chr == "'" && url.isSpecial()) url.query += '%27';
            else if (chr == '#') url.query += '%23';
            else url.query += percentEncode(chr, C0ControlPercentEncodeSet);
          } break;

        case FRAGMENT:
          if (chr != EOF) url.fragment += percentEncode(chr, fragmentPercentEncodeSet);
          break;
      }

      pointer++;
    }
  },
  // https://url.spec.whatwg.org/#host-parsing
  parseHost: function (input) {
    var result, codePoints, index;
    if (charAt$1(input, 0) == '[') {
      if (charAt$1(input, input.length - 1) != ']') return INVALID_HOST;
      result = parseIPv6(stringSlice$2(input, 1, -1));
      if (!result) return INVALID_HOST;
      this.host = result;
    // opaque host
    } else if (!this.isSpecial()) {
      if (exec(FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT, input)) return INVALID_HOST;
      result = '';
      codePoints = arrayFrom(input);
      for (index = 0; index < codePoints.length; index++) {
        result += percentEncode(codePoints[index], C0ControlPercentEncodeSet);
      }
      this.host = result;
    } else {
      input = toASCII(input);
      if (exec(FORBIDDEN_HOST_CODE_POINT, input)) return INVALID_HOST;
      result = parseIPv4(input);
      if (result === null) return INVALID_HOST;
      this.host = result;
    }
  },
  // https://url.spec.whatwg.org/#cannot-have-a-username-password-port
  cannotHaveUsernamePasswordPort: function () {
    return !this.host || this.cannotBeABaseURL || this.scheme == 'file';
  },
  // https://url.spec.whatwg.org/#include-credentials
  includesCredentials: function () {
    return this.username != '' || this.password != '';
  },
  // https://url.spec.whatwg.org/#is-special
  isSpecial: function () {
    return hasOwn(specialSchemes, this.scheme);
  },
  // https://url.spec.whatwg.org/#shorten-a-urls-path
  shortenPath: function () {
    var path = this.path;
    var pathSize = path.length;
    if (pathSize && (this.scheme != 'file' || pathSize != 1 || !isWindowsDriveLetter(path[0], true))) {
      path.length--;
    }
  },
  // https://url.spec.whatwg.org/#concept-url-serializer
  serialize: function () {
    var url = this;
    var scheme = url.scheme;
    var username = url.username;
    var password = url.password;
    var host = url.host;
    var port = url.port;
    var path = url.path;
    var query = url.query;
    var fragment = url.fragment;
    var output = scheme + ':';
    if (host !== null) {
      output += '//';
      if (url.includesCredentials()) {
        output += username + (password ? ':' + password : '') + '@';
      }
      output += serializeHost(host);
      if (port !== null) output += ':' + port;
    } else if (scheme == 'file') output += '//';
    output += url.cannotBeABaseURL ? path[0] : path.length ? '/' + join(path, '/') : '';
    if (query !== null) output += '?' + query;
    if (fragment !== null) output += '#' + fragment;
    return output;
  },
  // https://url.spec.whatwg.org/#dom-url-href
  setHref: function (href) {
    var failure = this.parse(href);
    if (failure) throw TypeError$1(failure);
    this.searchParams.update();
  },
  // https://url.spec.whatwg.org/#dom-url-origin
  getOrigin: function () {
    var scheme = this.scheme;
    var port = this.port;
    if (scheme == 'blob') try {
      return new URLConstructor(scheme.path[0]).origin;
    } catch (error) {
      return 'null';
    }
    if (scheme == 'file' || !this.isSpecial()) return 'null';
    return scheme + '://' + serializeHost(this.host) + (port !== null ? ':' + port : '');
  },
  // https://url.spec.whatwg.org/#dom-url-protocol
  getProtocol: function () {
    return this.scheme + ':';
  },
  setProtocol: function (protocol) {
    this.parse($toString(protocol) + ':', SCHEME_START);
  },
  // https://url.spec.whatwg.org/#dom-url-username
  getUsername: function () {
    return this.username;
  },
  setUsername: function (username) {
    var codePoints = arrayFrom($toString(username));
    if (this.cannotHaveUsernamePasswordPort()) return;
    this.username = '';
    for (var i = 0; i < codePoints.length; i++) {
      this.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);
    }
  },
  // https://url.spec.whatwg.org/#dom-url-password
  getPassword: function () {
    return this.password;
  },
  setPassword: function (password) {
    var codePoints = arrayFrom($toString(password));
    if (this.cannotHaveUsernamePasswordPort()) return;
    this.password = '';
    for (var i = 0; i < codePoints.length; i++) {
      this.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);
    }
  },
  // https://url.spec.whatwg.org/#dom-url-host
  getHost: function () {
    var host = this.host;
    var port = this.port;
    return host === null ? ''
      : port === null ? serializeHost(host)
      : serializeHost(host) + ':' + port;
  },
  setHost: function (host) {
    if (this.cannotBeABaseURL) return;
    this.parse(host, HOST);
  },
  // https://url.spec.whatwg.org/#dom-url-hostname
  getHostname: function () {
    var host = this.host;
    return host === null ? '' : serializeHost(host);
  },
  setHostname: function (hostname) {
    if (this.cannotBeABaseURL) return;
    this.parse(hostname, HOSTNAME);
  },
  // https://url.spec.whatwg.org/#dom-url-port
  getPort: function () {
    var port = this.port;
    return port === null ? '' : $toString(port);
  },
  setPort: function (port) {
    if (this.cannotHaveUsernamePasswordPort()) return;
    port = $toString(port);
    if (port == '') this.port = null;
    else this.parse(port, PORT);
  },
  // https://url.spec.whatwg.org/#dom-url-pathname
  getPathname: function () {
    var path = this.path;
    return this.cannotBeABaseURL ? path[0] : path.length ? '/' + join(path, '/') : '';
  },
  setPathname: function (pathname) {
    if (this.cannotBeABaseURL) return;
    this.path = [];
    this.parse(pathname, PATH_START);
  },
  // https://url.spec.whatwg.org/#dom-url-search
  getSearch: function () {
    var query = this.query;
    return query ? '?' + query : '';
  },
  setSearch: function (search) {
    search = $toString(search);
    if (search == '') {
      this.query = null;
    } else {
      if ('?' == charAt$1(search, 0)) search = stringSlice$2(search, 1);
      this.query = '';
      this.parse(search, QUERY);
    }
    this.searchParams.update();
  },
  // https://url.spec.whatwg.org/#dom-url-searchparams
  getSearchParams: function () {
    return this.searchParams.facade;
  },
  // https://url.spec.whatwg.org/#dom-url-hash
  getHash: function () {
    var fragment = this.fragment;
    return fragment ? '#' + fragment : '';
  },
  setHash: function (hash) {
    hash = $toString(hash);
    if (hash == '') {
      this.fragment = null;
      return;
    }
    if ('#' == charAt$1(hash, 0)) hash = stringSlice$2(hash, 1);
    this.fragment = '';
    this.parse(hash, FRAGMENT);
  },
  update: function () {
    this.query = this.searchParams.serialize() || null;
  }
};

// `URL` constructor
// https://url.spec.whatwg.org/#url-class
var URLConstructor = function URL(url /* , base */) {
  var that = anInstance(this, URLPrototype);
  var base = validateArgumentsLength(arguments.length, 1) > 1 ? arguments[1] : undefined;
  var state = setInternalState(that, new URLState(url, false, base));
  if (!DESCRIPTORS) {
    that.href = state.serialize();
    that.origin = state.getOrigin();
    that.protocol = state.getProtocol();
    that.username = state.getUsername();
    that.password = state.getPassword();
    that.host = state.getHost();
    that.hostname = state.getHostname();
    that.port = state.getPort();
    that.pathname = state.getPathname();
    that.search = state.getSearch();
    that.searchParams = state.getSearchParams();
    that.hash = state.getHash();
  }
};

var URLPrototype = URLConstructor.prototype;

var accessorDescriptor = function (getter, setter) {
  return {
    get: function () {
      return getInternalURLState(this)[getter]();
    },
    set: setter && function (value) {
      return getInternalURLState(this)[setter](value);
    },
    configurable: true,
    enumerable: true
  };
};

if (DESCRIPTORS) {
  // `URL.prototype.href` accessors pair
  // https://url.spec.whatwg.org/#dom-url-href
  defineBuiltInAccessor(URLPrototype, 'href', accessorDescriptor('serialize', 'setHref'));
  // `URL.prototype.origin` getter
  // https://url.spec.whatwg.org/#dom-url-origin
  defineBuiltInAccessor(URLPrototype, 'origin', accessorDescriptor('getOrigin'));
  // `URL.prototype.protocol` accessors pair
  // https://url.spec.whatwg.org/#dom-url-protocol
  defineBuiltInAccessor(URLPrototype, 'protocol', accessorDescriptor('getProtocol', 'setProtocol'));
  // `URL.prototype.username` accessors pair
  // https://url.spec.whatwg.org/#dom-url-username
  defineBuiltInAccessor(URLPrototype, 'username', accessorDescriptor('getUsername', 'setUsername'));
  // `URL.prototype.password` accessors pair
  // https://url.spec.whatwg.org/#dom-url-password
  defineBuiltInAccessor(URLPrototype, 'password', accessorDescriptor('getPassword', 'setPassword'));
  // `URL.prototype.host` accessors pair
  // https://url.spec.whatwg.org/#dom-url-host
  defineBuiltInAccessor(URLPrototype, 'host', accessorDescriptor('getHost', 'setHost'));
  // `URL.prototype.hostname` accessors pair
  // https://url.spec.whatwg.org/#dom-url-hostname
  defineBuiltInAccessor(URLPrototype, 'hostname', accessorDescriptor('getHostname', 'setHostname'));
  // `URL.prototype.port` accessors pair
  // https://url.spec.whatwg.org/#dom-url-port
  defineBuiltInAccessor(URLPrototype, 'port', accessorDescriptor('getPort', 'setPort'));
  // `URL.prototype.pathname` accessors pair
  // https://url.spec.whatwg.org/#dom-url-pathname
  defineBuiltInAccessor(URLPrototype, 'pathname', accessorDescriptor('getPathname', 'setPathname'));
  // `URL.prototype.search` accessors pair
  // https://url.spec.whatwg.org/#dom-url-search
  defineBuiltInAccessor(URLPrototype, 'search', accessorDescriptor('getSearch', 'setSearch'));
  // `URL.prototype.searchParams` getter
  // https://url.spec.whatwg.org/#dom-url-searchparams
  defineBuiltInAccessor(URLPrototype, 'searchParams', accessorDescriptor('getSearchParams'));
  // `URL.prototype.hash` accessors pair
  // https://url.spec.whatwg.org/#dom-url-hash
  defineBuiltInAccessor(URLPrototype, 'hash', accessorDescriptor('getHash', 'setHash'));
}

// `URL.prototype.toJSON` method
// https://url.spec.whatwg.org/#dom-url-tojson
defineBuiltIn(URLPrototype, 'toJSON', function toJSON() {
  return getInternalURLState(this).serialize();
}, { enumerable: true });

// `URL.prototype.toString` method
// https://url.spec.whatwg.org/#URL-stringification-behavior
defineBuiltIn(URLPrototype, 'toString', function toString() {
  return getInternalURLState(this).serialize();
}, { enumerable: true });

if (NativeURL) {
  var nativeCreateObjectURL = NativeURL.createObjectURL;
  var nativeRevokeObjectURL = NativeURL.revokeObjectURL;
  // `URL.createObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
  if (nativeCreateObjectURL) defineBuiltIn(URLConstructor, 'createObjectURL', bind(nativeCreateObjectURL, NativeURL));
  // `URL.revokeObjectURL` method
  // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL
  if (nativeRevokeObjectURL) defineBuiltIn(URLConstructor, 'revokeObjectURL', bind(nativeRevokeObjectURL, NativeURL));
}

setToStringTag(URLConstructor, 'URL');

$$3({ global: true, constructor: true, forced: !USE_NATIVE_URL, sham: !DESCRIPTORS }, {
  URL: URLConstructor
});

class URLUtils {
  static appendParameters(url, userId, targeting) {
    const reqUrl = new URL(url);
    const previousCustParams = reqUrl.searchParams.get('cust_params');
    let newCustParams = '';
    reqUrl.searchParams.append('ppid', userId);
    reqUrl.searchParams.delete('cust_params');
    if (previousCustParams) newCustParams = previousCustParams;
    if (targeting) {
      newCustParams = newCustParams + '&';
      for (let [key, value] of targeting) {
        newCustParams = newCustParams + key + '=' + value + '&';
      }
      newCustParams = newCustParams.slice(0, -1);
    }
    if (newCustParams) {
      reqUrl.searchParams.append('cust_params', newCustParams);
    }
    return reqUrl.href;
  }
}

var $$2 = _export;
var assign = objectAssign;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$$2({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign }, {
  assign: assign
});

class VideoComponent extends React.Component {
  // private videoViewRef: RefObject<ElementRef<typeof NativeHopprVideoView>>;
  constructor(props) {
    super(props);
    this.state = {
      play: false
    };
    // this.videoViewRef = React.createRef();
    this._onNativeEventReceived = this._onNativeEventReceived.bind(this);
  }
  render() {
    const viewStyle = this.props.style;
    return /*#__PURE__*/jsx(NativeHopprVideoView
    // ref={this.videoViewRef}
    , {
      style: Object.assign({}, viewStyle),
      onChange: this._onNativeEventReceived,
      play: this.state.play,
      adTag: this.props.adTag,
      scaleMode: this.props.scaleMode,
      useSoftwareDecoder: this.props.useSoftwareDecoder,
      ppid: this.props.ppid,
      properties: {
        scaleMode: this.props.scaleMode,
        adTag: this.props.adTag,
        ppid: this.props.ppid
      }
    });
  }
  play() {
    this.setState({
      play: true
    });
  }
  _onNativeEventReceived(event) {
    try {
      var message = '';
      if (Platform.OS == 'ios') {
        message = JSON.stringify(event['nativeEvent']);
      } else {
        message = event['nativeEvent']['message'];
      }
      var reactNativeEvent = JSON.parse(message);
      this.handleEvent(reactNativeEvent);
    } catch (e) {
      console.error('Error parsing event', e, event);
    }
  }
  handleEvent(nativeEvent) {
    switch (nativeEvent.eventType) {
      case EventType.AdEvent:
        {
          this.handleAdEvent(nativeEvent.adEventType);
          break;
        }
      case EventType.AdErrorEvent:
        {
          this.handleAdErrorEvent(nativeEvent.errorMessage);
          break;
        }
      case EventType.LogEvent:
        {
          console.log('message', nativeEvent.message);
          break;
        }
    }
  }
  sendAnalyticsEvent(HopprInternalEvents, imaAnalytics) {
    imaAnalytics.scaleMode = this.props.scaleMode;
    imaAnalytics.adTag = this.props.adTag;
    imaAnalytics.hopprAdUnitId = this.props.videoAdUnitId;
    imaAnalytics.useSoftwareDecoder = this.props.useSoftwareDecoder;
    HopprAnalytics.logInternalEvent(HopprInternalEvents, AnalyticsUtils.getImaRecord(imaAnalytics));
  }
  handleAdErrorEvent(errorMessage) {
    var imaAnalytics = {
      errorMessage: errorMessage
    };
    this.sendAnalyticsEvent(HopprInternalEvents.HopprInternalImaError, imaAnalytics);
    this.props.onError();
  }
  handleAdEvent(adEventType) {
    console.log('Ad Event', adEventType);
    var analyticsEvent = AnalyticsUtils.getImaEvent(adEventType);
    if (analyticsEvent) {
      this.sendAnalyticsEvent(analyticsEvent, {});
    }
    switch (adEventType) {
      case AdEventType.ALL_ADS_COMPLETED:
        {
          this.props.onAllAdsCompleted();
          break;
        }
      case AdEventType.AD_BREAK_FETCH_ERROR:
        {
          this.props.onError();
          break;
        }
      case AdEventType.LOADED:
        {
          this.props.onAdLoaded();
          break;
        }
    }
  }
  // forceClear = () => {
  //   console.log('forceClear');
  //   UIManager.dispatchViewManagerCommand(
  //     findNodeHandle(this.videoViewRef.current), // 1
  //     UIManager.getViewManagerConfig('NativeHopprVideoView').Commands
  //       .updateFromManager, // 2
  //     [3] // 3
  //   );
  // };
  componentDidMount() {
    console.log('componentDidMount VideoComponent');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount VideoComponent');
    // this.forceClear();
  }
}

class OverlayComponent extends React.Component {
  constructor(props) {
    super(props);
    this.videoComponentRef = /*#__PURE__*/createRef();
    this.isVideoAdLoaded = false;
    this.videoAdUnitId = '';
    this.state = {
      loadVideo: false,
      playVideo: false,
      adTagUrl: '',
      ppid: ''
    };
    this.addBanner();
  }
  render() {
    return /*#__PURE__*/jsx(View, {
      children: this.getVideoView()
    });
  }
  calculatePercentage(percentage, total) {
    return percentage * total / 100;
  }
  getVideoView() {
    if (this.state.loadVideo) {
      return /*#__PURE__*/jsx(VideoComponent, {
        ref: this.videoComponentRef,
        style: {
          position: 'absolute',
          right: 0,
          bottom: 0,
          // left: 0,
          // top: 0,
          display: this.state.playVideo ? 'flex' : 'none',
          // width: Dimensions.get('window').width,
          // height: 400,
          width: this.calculatePercentage(90, Dimensions.get('window').width),
          height: this.calculatePercentage(90, Dimensions.get('window').height)
          // width: 711.11,
          // height: 400,
        },
        onAllAdsCompleted: () => {
          this.hideVideo();
          this.onFinishCallback();
        },
        onError: () => {
          this.hideVideo();
          this.onFinishCallback();
        },
        videoAdUnitId: this.videoAdUnitId,
        onAdLoaded: () => {
          this.isVideoAdLoaded = true;
        },
        adTag: this.state.adTagUrl,
        scaleMode: 'zoom',
        useSoftwareDecoder: false,
        ppid: this.state.ppid
      });
    } else {
      return /*#__PURE__*/jsx(View, {});
    }
  }
  loadVideo(adUnitId, videoLoadOptons) {
    var _a;
    this.typedContext = JSON.parse(JSON.stringify(this.context));
    if (this.typedContext && this.typedContext.adSlots) {
      this.matchingAdSlots = (_a = JSON.parse(this.typedContext.adSlots)) === null || _a === void 0 ? void 0 : _a.filter(ad => ad.hopprAdUnit === adUnitId);
      if (this.matchingAdSlots && this.matchingAdSlots.length > 0 && this.matchingAdSlots[0].adType == AdType.IMA) {
        if (this.videoAdUnitId == adUnitId || this.state.playVideo) {
          console.log('return');
          return;
        }
        this.isVideoAdLoaded = false;
        this.videoAdUnitId = adUnitId;
        const adTagUrl = URLUtils.appendParameters(this.matchingAdSlots[0].gamAdUnit, this.typedContext.config.userId, videoLoadOptons === null || videoLoadOptons === void 0 ? void 0 : videoLoadOptons.targeting);
        this.setState({
          loadVideo: true,
          playVideo: false,
          adTagUrl: adTagUrl,
          ppid: this.typedContext.config.userId
        });
      }
    }
  }
  playVideo(adUnitId, videoOptions) {
    var _a;
    this.videoOptions = videoOptions;
    if (this.isVideoAdLoaded && this.videoAdUnitId == adUnitId) {
      this.setState({
        playVideo: true
      });
      (_a = this.videoComponentRef.current) === null || _a === void 0 ? void 0 : _a.play();
    } else {
      console.log('Ad not loaded yet');
      this.onFinishCallback();
    }
  }
  hideVideo() {
    // this.videoComponentRef.current?.forceClear();
    this.isVideoAdLoaded = false;
    this.videoAdUnitId = '';
    this.setState({
      playVideo: false,
      loadVideo: false
    });
  }
  onFinishCallback() {
    var _a, _b;
    if ((_a = this.videoOptions) === null || _a === void 0 ? void 0 : _a.onFinish) (_b = this.videoOptions) === null || _b === void 0 ? void 0 : _b.onFinish();
  }
  clear() {
    this.hideVideo();
  }
  addBanner() {}
  closeBanner() {}
}
OverlayComponent.contextType = HopprAdContext;

class PIPComponent extends React.Component {
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

const {
  HierarchyReaderModule,
  KeyEventModule
} = NativeModules;
class HopprAdProvider extends React.Component {
  constructor(props) {
    super(props);
    this.isInternalUserIdReady = false;
    this.isAdSlotsReady = false;
    this.adSlots = '';
    this.hopprInternalUserId = '';
    this.pipComponentRef = /*#__PURE__*/createRef();
    // private viewShotRef: RefObject<ViewShot> = createRef();
    // private screenshotInterval: NodeJS.Timer | null = null;
    this.hierarchyInterval = null;
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
  // traverseHierarchy(component: any, depth = 0) {
  //   if (!component) {
  //     console.log('no component');
  //   }
  //   if (!component.props) {
  //     console.log('no props');
  //   }
  //   var componentName = '';
  //   if (component.type) {
  //     componentName =
  //       component.type === React.Fragment
  //         ? 'React.Fragment'
  //         : component.type.displayName || component.type.name || 'Unknown';
  //   } else {
  //     componentName = 'No Type';
  //   }
  //   console.log(' '.repeat(depth * 2), componentName);
  //   const processChildren = (children: any) => {
  //     if (React.isValidElement(children)) {
  //       this.traverseHierarchy(children, depth + 1);
  //     } else if (Array.isArray(children)) {
  //       children.forEach((child) => this.traverseHierarchy(child, depth + 1));
  //     } else {
  //       console.log('A', children);
  //     }
  //   };
  //   if (typeof component.props.children === 'function') {
  //     const children = component.props.children();
  //     processChildren(children);
  //   } else if (component.props.children) {
  //     React.Children.forEach(component.props.children, (child) => {
  //       this.traverseHierarchy(child, depth + 1);
  //     });
  //   } else if (component.props.render) {
  //     const renderedComponent = component.props.render();
  //     processChildren(renderedComponent);
  //   } else if (component.props.childrenToRender) {
  //     const renderedComponent = component.props.childrenToRender();
  //     processChildren(renderedComponent);
  //   } else {
  //     console.log('B', this.safeStringify(component));
  //   }
  // }
  safeStringify(obj, cache = new Set()) {
    return JSON.stringify(obj, (key, value) => {
      if (typeof value === 'object' && value !== null) {
        if (cache.has(value)) {
          // Omit circular references
          return;
        }
        cache.add(value);
      }
      return value;
    });
  }
  // private onCapture = (uri: string) => {
  //   console.log('onCapture', uri);
  //   this.hopprPIPRef?.current?.updateImageUrl(uri);
  // };
  render() {
    return /*#__PURE__*/jsxs(HopprAdContext.Provider, {
      value: this.state,
      children: [this.props.children, this.getPIPComponent(), /*#__PURE__*/jsx(OverlayComponent, {
        ref: HopprAdProvider.overlayComponent
      }), /*#__PURE__*/jsx(View, {})]
    });
  }
  getPIPComponent() {
    if (this.props.config.enablePIP) {
      return /*#__PURE__*/jsx(PIPComponent, {
        ref: this.pipComponentRef
      });
    } else {
      return /*#__PURE__*/jsx(View, {});
    }
  }
  componentDidMount() {
    this.startHierarchyInterval();
    this.appStateSubscription = AppState.addEventListener('change', nextAppState => {
      var _a, _b, _c, _d, _e, _f;
      console.log('HopprAdProvider', nextAppState);
      if (nextAppState.match(/inactive|background/)) {
        HopprAnalytics.sendBeaconNative(); // We send remainings event when app become inactive or in background
        (_b = (_a = this.pipComponentRef) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.clearScreenshotInterval();
        (_d = (_c = HopprAdProvider.overlayComponent) === null || _c === void 0 ? void 0 : _c.current) === null || _d === void 0 ? void 0 : _d.clear();
        // this.clearScreenshotInterval();
        this.clearHierarchyInterval();
      } else if (nextAppState.match(/active/)) {
        (_f = (_e = this.pipComponentRef) === null || _e === void 0 ? void 0 : _e.current) === null || _f === void 0 ? void 0 : _f.startScreenshotInterval();
        // this.startScreenshotInterval();
        this.startHierarchyInterval();
      } else {
        // this.clearScreenshotInterval();
        this.clearHierarchyInterval();
      }
    });
  }
  componentWillUnmount() {
    var _a, _b, _c;
    HopprAdProvider.overlayComponent = null;
    (_a = this.appStateSubscription) === null || _a === void 0 ? void 0 : _a.remove();
    (_c = (_b = this.pipComponentRef) === null || _b === void 0 ? void 0 : _b.current) === null || _c === void 0 ? void 0 : _c.clearScreenshotInterval();
    this.clearHierarchyInterval();
    // this.clearScreenshotInterval();
  }

  clearHierarchyInterval() {
    if (this.hierarchyInterval) {
      clearInterval(this.hierarchyInterval);
      this.hierarchyInterval = null;
    }
  }
  startHierarchyInterval() {
    if (!this.hierarchyInterval) {
      this.hierarchyInterval = setInterval(() => {
        // this.traverseHierarchy(this);
        // KeyEventModule.pressOk();
        HierarchyReaderModule.getViewHierarchy(b => {
          console.log(b);
        });
      }, 5000);
    }
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
  static loadVideo(adUnitId, videoLoadOptons) {
    var _a, _b;
    (_b = (_a = HopprAdProvider.overlayComponent) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.loadVideo(adUnitId, videoLoadOptons);
  }
  static playVideo(adUnitId, videoOptions) {
    var _a, _b;
    (_b = (_a = HopprAdProvider.overlayComponent) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.playVideo(adUnitId, videoOptions);
  }
}
HopprAdProvider.overlayComponent = /*#__PURE__*/createRef();

var $$1 = _export;
var $includes = arrayIncludes.includes;
var fails$1 = fails$k;
var addToUnscopables = addToUnscopables$2;

// FF99+ bug
var BROKEN_ON_SPARSE = fails$1(function () {
  return !Array(1).includes();
});

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$$1({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');

var isObject = isObject$8;
var classof = classofRaw$2;
var wellKnownSymbol$2 = wellKnownSymbol$g;

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

var wellKnownSymbol$1 = wellKnownSymbol$g;

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

var $ = _export;
var uncurryThis$2 = functionUncurryThis;
var notARegExp = notARegexp;
var requireObjectCoercible$1 = requireObjectCoercible$6;
var toString$1 = toString$6;
var correctIsRegExpLogic = correctIsRegexpLogic;

var stringIndexOf$1 = uncurryThis$2(''.indexOf);

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~stringIndexOf$1(
      toString$1(requireObjectCoercible$1(this)),
      toString$1(notARegExp(searchString)),
      arguments.length > 1 ? arguments[1] : undefined
    );
  }
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
var toObject = toObject$5;

var floor = Math.floor;
var charAt = uncurryThis$1(''.charAt);
var replace = uncurryThis$1(''.replace);
var stringSlice$1 = uncurryThis$1(''.slice);
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
var fails = fails$k;
var anObject = anObject$e;
var isCallable = isCallable$j;
var isNullOrUndefined = isNullOrUndefined$5;
var toIntegerOrInfinity = toIntegerOrInfinity$4;
var toLength = toLength$3;
var toString = toString$6;
var requireObjectCoercible = requireObjectCoercible$6;
var advanceStringIndex = advanceStringIndex$2;
var getMethod = getMethod$5;
var getSubstitution = getSubstitution$1;
var regExpExec = regexpExecAbstract;
var wellKnownSymbol = wellKnownSymbol$g;

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

// import { ElementRef, ForwardedRef, LegacyRef } from 'react';
const LINKING_ERROR = `The package 'react-native-hoppr' doesn't seem to be linked. Make sure: \n\n` + Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo Go\n';
const ComponentName2 = 'NativeHopprVideoView';
const NativeHopprVideoView = UIManager.getViewManagerConfig(ComponentName2) != null ? requireNativeComponent(ComponentName2) : () => {
  throw new Error(LINKING_ERROR);
};

export { HierarchyReaderModule, HopprAdProvider, HopprAnalyticsLogger, HopprBannerAd, KeyEventModule, NativeHopprVideoView };
