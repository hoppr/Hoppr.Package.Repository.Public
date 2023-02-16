import 'react-native-get-random-values';
import React, { createRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UUIDUtils } from '@hoppr/hoppr-common';
import { ServicesClient } from '@hoppr/hoppr-services';
import { HopprInternalEvents, HopprAnalytics, HopprEvents } from '@hoppr/hoppr-analytics';
export { ContentTypes, HopprEvents, ScreenTypes, StreamTypes } from '@hoppr/hoppr-analytics';
import { Platform, Linking, Pressable, View } from 'react-native';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { WebView } from 'react-native-webview';

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
    userId: ''
  },
  hopprInternalUserId: ''
};
const HopprAdContext = /*#__PURE__*/React.createContext(config);

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var fails$k = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$j = fails$k;

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails$j(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

var fails$i = fails$k;

var functionBindNative = !fails$i(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var NATIVE_BIND$3 = functionBindNative;

var FunctionPrototype$2 = Function.prototype;
var call$d = FunctionPrototype$2.call;
var uncurryThisWithBind = NATIVE_BIND$3 && FunctionPrototype$2.bind.bind(call$d, call$d);

var functionUncurryThisRaw = function (fn) {
  return NATIVE_BIND$3 ? uncurryThisWithBind(fn) : function () {
    return call$d.apply(fn, arguments);
  };
};

var uncurryThisRaw$1 = functionUncurryThisRaw;

var toString$7 = uncurryThisRaw$1({}.toString);
var stringSlice$6 = uncurryThisRaw$1(''.slice);

var classofRaw$2 = function (it) {
  return stringSlice$6(toString$7(it), 8, -1);
};

var classofRaw$1 = classofRaw$2;
var uncurryThisRaw = functionUncurryThisRaw;

var functionUncurryThis = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw$1(fn) === 'Function') return uncurryThisRaw(fn);
};

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
var isNullOrUndefined$4 = function (it) {
  return it === null || it === undefined;
};

var isNullOrUndefined$3 = isNullOrUndefined$4;

var $TypeError$b = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible$5 = function (it) {
  if (isNullOrUndefined$3(it)) throw $TypeError$b("Can't call method on " + it);
  return it;
};

var requireObjectCoercible$4 = requireObjectCoercible$5;

var $Object$4 = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject$4 = function (argument) {
  return $Object$4(requireObjectCoercible$4(argument));
};

var uncurryThis$h = functionUncurryThis;
var toObject$3 = toObject$4;

var hasOwnProperty = uncurryThis$h({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$3(it), key);
};

var DESCRIPTORS$c = descriptors;
var hasOwn$b = hasOwnProperty_1;

var FunctionPrototype$1 = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS$c && Object.getOwnPropertyDescriptor;

var EXISTS$1 = hasOwn$b(FunctionPrototype$1, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS$1 && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE$1 = EXISTS$1 && (!DESCRIPTORS$c || (DESCRIPTORS$c && getDescriptor(FunctionPrototype$1, 'name').configurable));

var functionName = {
  EXISTS: EXISTS$1,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE$1
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

var objectDefineProperty = {};

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

var isCallable$i = isCallable$j;
var $documentAll = documentAll_1;

var documentAll = $documentAll.all;

var isObject$9 = $documentAll.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable$i(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable$i(it);
};

var global$f = global$g;
var isObject$8 = isObject$9;

var document$1 = global$f.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject$8(document$1) && isObject$8(document$1.createElement);

var documentCreateElement$2 = function (it) {
  return EXISTS ? document$1.createElement(it) : {};
};

var DESCRIPTORS$b = descriptors;
var fails$h = fails$k;
var createElement = documentCreateElement$2;

// Thanks to IE8 for its funny defineProperty
var ie8DomDefine = !DESCRIPTORS$b && !fails$h(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

var DESCRIPTORS$a = descriptors;
var fails$g = fails$k;

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
var v8PrototypeDefineBug = DESCRIPTORS$a && fails$g(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});

var isObject$7 = isObject$9;

var $String$3 = String;
var $TypeError$a = TypeError;

// `Assert: Type(argument) is Object`
var anObject$b = function (argument) {
  if (isObject$7(argument)) return argument;
  throw $TypeError$a($String$3(argument) + ' is not an object');
};

var NATIVE_BIND$2 = functionBindNative;

var call$c = Function.prototype.call;

var functionCall = NATIVE_BIND$2 ? call$c.bind(call$c) : function () {
  return call$c.apply(call$c, arguments);
};

var global$e = global$g;
var isCallable$h = isCallable$j;

var aFunction = function (argument) {
  return isCallable$h(argument) ? argument : undefined;
};

var getBuiltIn$5 = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$e[namespace]) : global$e[namespace] && global$e[namespace][method];
};

var uncurryThis$g = functionUncurryThis;

var objectIsPrototypeOf = uncurryThis$g({}.isPrototypeOf);

var getBuiltIn$4 = getBuiltIn$5;

var engineUserAgent = getBuiltIn$4('navigator', 'userAgent') || '';

var global$d = global$g;
var userAgent = engineUserAgent;

var process = global$d.process;
var Deno = global$d.Deno;
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
var fails$f = fails$k;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$f(function () {
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

var getBuiltIn$3 = getBuiltIn$5;
var isCallable$g = isCallable$j;
var isPrototypeOf$3 = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

var $Object$3 = Object;

var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$3('Symbol');
  return isCallable$g($Symbol) && isPrototypeOf$3($Symbol.prototype, $Object$3(it));
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
var isNullOrUndefined$2 = isNullOrUndefined$4;

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
var getMethod$3 = function (V, P) {
  var func = V[P];
  return isNullOrUndefined$2(func) ? undefined : aCallable$2(func);
};

var call$b = functionCall;
var isCallable$e = isCallable$j;
var isObject$6 = isObject$9;

var $TypeError$8 = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$e(fn = input.toString) && !isObject$6(val = call$b(fn, input))) return val;
  if (isCallable$e(fn = input.valueOf) && !isObject$6(val = call$b(fn, input))) return val;
  if (pref !== 'string' && isCallable$e(fn = input.toString) && !isObject$6(val = call$b(fn, input))) return val;
  throw $TypeError$8("Can't convert object to primitive value");
};

var shared$4 = {exports: {}};

var isPure = false;

var global$c = global$g;

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$6 = Object.defineProperty;

var defineGlobalProperty$3 = function (key, value) {
  try {
    defineProperty$6(global$c, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global$c[key] = value;
  } return value;
};

var global$b = global$g;
var defineGlobalProperty$2 = defineGlobalProperty$3;

var SHARED = '__core-js_shared__';
var store$3 = global$b[SHARED] || defineGlobalProperty$2(SHARED, {});

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

var uncurryThis$f = functionUncurryThis;

var id = 0;
var postfix = Math.random();
var toString$6 = uncurryThis$f(1.0.toString);

var uid$2 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$6(++id + postfix, 36);
};

var global$a = global$g;
var shared$3 = shared$4.exports;
var hasOwn$a = hasOwnProperty_1;
var uid$1 = uid$2;
var NATIVE_SYMBOL = symbolConstructorDetection;
var USE_SYMBOL_AS_UID = useSymbolAsUid;

var WellKnownSymbolsStore = shared$3('wks');
var Symbol$1 = global$a.Symbol;
var symbolFor = Symbol$1 && Symbol$1['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;

var wellKnownSymbol$h = function (name) {
  if (!hasOwn$a(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn$a(Symbol$1, name)) {
      WellKnownSymbolsStore[name] = Symbol$1[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};

var call$a = functionCall;
var isObject$5 = isObject$9;
var isSymbol$1 = isSymbol$2;
var getMethod$2 = getMethod$3;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$g = wellKnownSymbol$h;

var $TypeError$7 = TypeError;
var TO_PRIMITIVE = wellKnownSymbol$g('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
var toPrimitive$1 = function (input, pref) {
  if (!isObject$5(input) || isSymbol$1(input)) return input;
  var exoticToPrim = getMethod$2(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$a(exoticToPrim, input, pref);
    if (!isObject$5(result) || isSymbol$1(result)) return result;
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
var anObject$a = anObject$b;
var toPropertyKey$2 = toPropertyKey$3;

var $TypeError$6 = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
objectDefineProperty.f = DESCRIPTORS$9 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
  anObject$a(O);
  P = toPropertyKey$2(P);
  anObject$a(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor$1(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject$a(O);
  P = toPropertyKey$2(P);
  anObject$a(Attributes);
  if (IE8_DOM_DEFINE$1) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError$6('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var makeBuiltIn$2 = {exports: {}};

var uncurryThis$e = functionUncurryThis;
var isCallable$d = isCallable$j;
var store$1 = sharedStore;

var functionToString = uncurryThis$e(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable$d(store$1.inspectSource)) {
  store$1.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource$1 = store$1.inspectSource;

var global$9 = global$g;
var isCallable$c = isCallable$j;

var WeakMap$1 = global$9.WeakMap;

var weakMapBasicDetection = isCallable$c(WeakMap$1) && /native code/.test(String(WeakMap$1));

var createPropertyDescriptor$5 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var DESCRIPTORS$8 = descriptors;
var definePropertyModule$5 = objectDefineProperty;
var createPropertyDescriptor$4 = createPropertyDescriptor$5;

var createNonEnumerableProperty$6 = DESCRIPTORS$8 ? function (object, key, value) {
  return definePropertyModule$5.f(object, key, createPropertyDescriptor$4(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var shared$2 = shared$4.exports;
var uid = uid$2;

var keys$1 = shared$2('keys');

var sharedKey$3 = function (key) {
  return keys$1[key] || (keys$1[key] = uid(key));
};

var hiddenKeys$4 = {};

var NATIVE_WEAK_MAP = weakMapBasicDetection;
var global$8 = global$g;
var isObject$4 = isObject$9;
var createNonEnumerableProperty$5 = createNonEnumerableProperty$6;
var hasOwn$9 = hasOwnProperty_1;
var shared$1 = sharedStore;
var sharedKey$2 = sharedKey$3;
var hiddenKeys$3 = hiddenKeys$4;

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$2 = global$8.TypeError;
var WeakMap = global$8.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$4(it) || (state = get(it)).type !== TYPE) {
      throw TypeError$2('Incompatible receiver, ' + TYPE + ' required');
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
    if (store.has(it)) throw TypeError$2(OBJECT_ALREADY_INITIALIZED);
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
  var STATE = sharedKey$2('state');
  hiddenKeys$3[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn$9(it, STATE)) throw TypeError$2(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$5(it, STATE, metadata);
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

var fails$e = fails$k;
var isCallable$b = isCallable$j;
var hasOwn$8 = hasOwnProperty_1;
var DESCRIPTORS$7 = descriptors;
var CONFIGURABLE_FUNCTION_NAME$1 = functionName.CONFIGURABLE;
var inspectSource = inspectSource$1;
var InternalStateModule$2 = internalState;

var enforceInternalState$1 = InternalStateModule$2.enforce;
var getInternalState$2 = InternalStateModule$2.get;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$5 = Object.defineProperty;

var CONFIGURABLE_LENGTH = DESCRIPTORS$7 && !fails$e(function () {
  return defineProperty$5(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn$1 = makeBuiltIn$2.exports = function (value, name, options) {
  if (String(name).slice(0, 7) === 'Symbol(') {
    name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn$8(value, 'name') || (CONFIGURABLE_FUNCTION_NAME$1 && value.name !== name)) {
    if (DESCRIPTORS$7) defineProperty$5(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn$8(options, 'arity') && value.length !== options.arity) {
    defineProperty$5(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn$8(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS$7) defineProperty$5(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState$1(value);
  if (!hasOwn$8(state, 'source')) {
    state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn$1(function toString() {
  return isCallable$b(this) && getInternalState$2(this).source || inspectSource(this);
}, 'toString');

var isCallable$a = isCallable$j;
var definePropertyModule$4 = objectDefineProperty;
var makeBuiltIn = makeBuiltIn$2.exports;
var defineGlobalProperty$1 = defineGlobalProperty$3;

var defineBuiltIn$8 = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable$a(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty$1(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule$4.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};

var wellKnownSymbol$f = wellKnownSymbol$h;

var TO_STRING_TAG$3 = wellKnownSymbol$f('toStringTag');
var test = {};

test[TO_STRING_TAG$3] = 'z';

var toStringTagSupport = String(test) === '[object z]';

var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var isCallable$9 = isCallable$j;
var classofRaw = classofRaw$2;
var wellKnownSymbol$e = wellKnownSymbol$h;

var TO_STRING_TAG$2 = wellKnownSymbol$e('toStringTag');
var $Object$2 = Object;

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
    : typeof (tag = tryGet(O = $Object$2(it), TO_STRING_TAG$2)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable$9(O.callee) ? 'Arguments' : result;
};

var classof$5 = classof$6;

var $String$1 = String;

var toString$5 = function (argument) {
  if (classof$5(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String$1(argument);
};

var anObject$9 = anObject$b;

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
var regexpFlags$1 = function () {
  var that = anObject$9(this);
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

var call$9 = functionCall;
var hasOwn$7 = hasOwnProperty_1;
var isPrototypeOf$2 = objectIsPrototypeOf;
var regExpFlags = regexpFlags$1;

var RegExpPrototype$3 = RegExp.prototype;

var regexpGetFlags = function (R) {
  var flags = R.flags;
  return flags === undefined && !('flags' in RegExpPrototype$3) && !hasOwn$7(R, 'flags') && isPrototypeOf$2(RegExpPrototype$3, R)
    ? call$9(regExpFlags, R) : flags;
};

var PROPER_FUNCTION_NAME$1 = functionName.PROPER;
var defineBuiltIn$7 = defineBuiltIn$8;
var anObject$8 = anObject$b;
var $toString$1 = toString$5;
var fails$d = fails$k;
var getRegExpFlags$1 = regexpGetFlags;

var TO_STRING = 'toString';
var RegExpPrototype$2 = RegExp.prototype;
var nativeToString = RegExpPrototype$2[TO_STRING];

var NOT_GENERIC = fails$d(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = PROPER_FUNCTION_NAME$1 && nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  defineBuiltIn$7(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject$8(this);
    var pattern = $toString$1(R.source);
    var flags = $toString$1(getRegExpFlags$1(R));
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
  static getStandardBannerProperties(instanceUUID, props, state) {
    var _a, _b;
    const record = this.getStandardProperties();
    record['hopprAdUnitId'] = props.adUnitId;
    record['uuid'] = instanceUUID;
    if (props.adUnitSizes) record['sizes'] = (_a = props.adUnitSizes) === null || _a === void 0 ? void 0 : _a.toString();
    if (state.adSize) record['determinedSize'] = (_b = state.adSize) === null || _b === void 0 ? void 0 : _b.toString();
    if (props.targetProperties) {
      record['targeting'] = JSON.stringify(props.targetProperties);
    }
    return record;
  }
  static getDeepLinkRecord(instanceUUID, props, state, url, behavior) {
    const record = this.getStandardBannerProperties(instanceUUID, props, state);
    record['url'] = url;
    record['behavior'] = behavior;
    return record;
  }
  static getDeepLinkErrorRecord(instanceUUID, props, state, error) {
    const record = this.getStandardBannerProperties(instanceUUID, props, state);
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
  static getGptEventRecord(instanceUUID, props, state, gptEvent) {
    const record = this.getStandardBannerProperties(instanceUUID, props, state);
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
      if (responseInfo.creativeId) record['creativeId '] = responseInfo.creativeId;
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

class HopprAdProvider extends React.Component {
  constructor(props) {
    super(props);
    this.isInternalUserIdReady = false;
    this.isAdSlotsReady = false;
    this.adSlots = '';
    this.hopprInternalUserId = '';
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
  render() {
    return /*#__PURE__*/jsx(HopprAdContext.Provider, {
      value: this.state,
      children: this.props.children
    });
  }
  componentWillUnmount() {
    HopprAnalytics.sendBeaconNative(); // We send remainings event when the component will be unmounted
  }

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
      this.setState({
        hopprInternalUserId: this.hopprInternalUserId,
        adSlots: this.adSlots
      });
    }
  }
}

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

var uncurryThis$d = functionUncurryThis;
var fails$c = fails$k;
var classof$4 = classofRaw$2;

var $Object$1 = Object;
var split$1 = uncurryThis$d(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails$c(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object$1('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$4(it) == 'String' ? split$1(it, '') : $Object$1(it);
} : $Object$1;

// toObject with fallback for non-array-like ES3 strings
var IndexedObject$1 = indexedObject;
var requireObjectCoercible$3 = requireObjectCoercible$5;

var toIndexedObject$5 = function (it) {
  return IndexedObject$1(requireObjectCoercible$3(it));
};

var DESCRIPTORS$6 = descriptors;
var call$8 = functionCall;
var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
var createPropertyDescriptor$3 = createPropertyDescriptor$5;
var toIndexedObject$4 = toIndexedObject$5;
var toPropertyKey$1 = toPropertyKey$3;
var hasOwn$6 = hasOwnProperty_1;
var IE8_DOM_DEFINE = ie8DomDefine;

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$6 ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$4(O);
  P = toPropertyKey$1(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn$6(O, P)) return createPropertyDescriptor$3(!call$8(propertyIsEnumerableModule$1.f, O, P), O[P]);
};

var objectGetOwnPropertyNames = {};

var ceil = Math.ceil;
var floor$2 = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
var mathTrunc = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor$2 : ceil)(n);
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
var toLength$2 = function (argument) {
  return argument > 0 ? min$1(toIntegerOrInfinity$2(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength$1 = toLength$2;

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
var lengthOfArrayLike$2 = function (obj) {
  return toLength$1(obj.length);
};

var toIndexedObject$3 = toIndexedObject$5;
var toAbsoluteIndex$1 = toAbsoluteIndex$2;
var lengthOfArrayLike$1 = lengthOfArrayLike$2;

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod$1 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$3($this);
    var length = lengthOfArrayLike$1(O);
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

var uncurryThis$c = functionUncurryThis;
var hasOwn$5 = hasOwnProperty_1;
var toIndexedObject$2 = toIndexedObject$5;
var indexOf$1 = arrayIncludes.indexOf;
var hiddenKeys$2 = hiddenKeys$4;

var push$2 = uncurryThis$c([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$2(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$5(hiddenKeys$2, key) && hasOwn$5(O, key) && push$2(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn$5(O, key = names[i++])) {
    ~indexOf$1(result, key) || push$2(result, key);
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

var getBuiltIn$2 = getBuiltIn$5;
var uncurryThis$b = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
var anObject$7 = anObject$b;

var concat$2 = uncurryThis$b([].concat);

// all object keys, includes non-enumerable and symbols
var ownKeys$1 = getBuiltIn$2('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject$7(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule$1.f;
  return getOwnPropertySymbols ? concat$2(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn$4 = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule$3 = objectDefineProperty;

var copyConstructorProperties$1 = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule$3.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn$4(target, key) && !(exceptions && hasOwn$4(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var fails$b = fails$k;
var isCallable$8 = isCallable$j;

var replacement = /#|\.prototype\./;

var isForced$2 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable$8(detection) ? fails$b(detection)
    : !!detection;
};

var normalize = isForced$2.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$2.data = {};
var NATIVE = isForced$2.NATIVE = 'N';
var POLYFILL = isForced$2.POLYFILL = 'P';

var isForced_1 = isForced$2;

var global$7 = global$g;
var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty$4 = createNonEnumerableProperty$6;
var defineBuiltIn$6 = defineBuiltIn$8;
var defineGlobalProperty = defineGlobalProperty$3;
var copyConstructorProperties = copyConstructorProperties$1;
var isForced$1 = isForced_1;

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
    FORCED = isForced$1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty$4(sourceProperty, 'sham', true);
    }
    defineBuiltIn$6(target, key, sourceProperty, options);
  }
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

var DESCRIPTORS$5 = descriptors;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var definePropertyModule$2 = objectDefineProperty;
var anObject$6 = anObject$b;
var toIndexedObject$1 = toIndexedObject$5;
var objectKeys$1 = objectKeys$2;

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
objectDefineProperties.f = DESCRIPTORS$5 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$6(O);
  var props = toIndexedObject$1(Properties);
  var keys = objectKeys$1(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule$2.f(O, key = keys[index++], props[key]);
  return O;
};

var getBuiltIn$1 = getBuiltIn$5;

var html$1 = getBuiltIn$1('document', 'documentElement');

/* global ActiveXObject -- old IE, WSH */

var anObject$5 = anObject$b;
var definePropertiesModule = objectDefineProperties;
var enumBugKeys = enumBugKeys$3;
var hiddenKeys = hiddenKeys$4;
var html = html$1;
var documentCreateElement$1 = documentCreateElement$2;
var sharedKey$1 = sharedKey$3;

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO$1 = sharedKey$1('IE_PROTO');

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
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO$1] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
var objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject$5(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};

var wellKnownSymbol$d = wellKnownSymbol$h;
var create$3 = objectCreate;
var defineProperty$4 = objectDefineProperty.f;

var UNSCOPABLES = wellKnownSymbol$d('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  defineProperty$4(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create$3(null)
  });
}

// add a key to Array.prototype[@@unscopables]
var addToUnscopables$2 = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};

var $$5 = _export;
var $includes = arrayIncludes.includes;
var fails$a = fails$k;
var addToUnscopables$1 = addToUnscopables$2;

// FF99+ bug
var BROKEN_ON_SPARSE = fails$a(function () {
  return !Array(1).includes();
});

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$$5({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables$1('includes');

var isObject$3 = isObject$9;
var classof$3 = classofRaw$2;
var wellKnownSymbol$c = wellKnownSymbol$h;

var MATCH$2 = wellKnownSymbol$c('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
var isRegexp = function (it) {
  var isRegExp;
  return isObject$3(it) && ((isRegExp = it[MATCH$2]) !== undefined ? !!isRegExp : classof$3(it) == 'RegExp');
};

var isRegExp$1 = isRegexp;

var $TypeError$5 = TypeError;

var notARegexp = function (it) {
  if (isRegExp$1(it)) {
    throw $TypeError$5("The method doesn't accept regular expressions");
  } return it;
};

var wellKnownSymbol$b = wellKnownSymbol$h;

var MATCH$1 = wellKnownSymbol$b('match');

var correctIsRegexpLogic = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH$1] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};

var $$4 = _export;
var uncurryThis$a = functionUncurryThis;
var notARegExp = notARegexp;
var requireObjectCoercible$2 = requireObjectCoercible$5;
var toString$4 = toString$5;
var correctIsRegExpLogic = correctIsRegexpLogic;

var stringIndexOf$2 = uncurryThis$a(''.indexOf);

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$$4({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~stringIndexOf$2(
      toString$4(requireObjectCoercible$2(this)),
      toString$4(notARegExp(searchString)),
      arguments.length > 1 ? arguments[1] : undefined
    );
  }
});

var iterators = {};

var fails$9 = fails$k;

var correctPrototypeGetter = !fails$9(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var hasOwn$3 = hasOwnProperty_1;
var isCallable$7 = isCallable$j;
var toObject$2 = toObject$4;
var sharedKey = sharedKey$3;
var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject$2(O);
  if (hasOwn$3(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable$7(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object ? ObjectPrototype : null;
};

var fails$8 = fails$k;
var isCallable$6 = isCallable$j;
var isObject$2 = isObject$9;
var getPrototypeOf$1 = objectGetPrototypeOf;
var defineBuiltIn$5 = defineBuiltIn$8;
var wellKnownSymbol$a = wellKnownSymbol$h;

var ITERATOR$5 = wellKnownSymbol$a('iterator');
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

var NEW_ITERATOR_PROTOTYPE = !isObject$2(IteratorPrototype$2) || fails$8(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype$2[ITERATOR$5].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {};

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable$6(IteratorPrototype$2[ITERATOR$5])) {
  defineBuiltIn$5(IteratorPrototype$2, ITERATOR$5, function () {
    return this;
  });
}

var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$2,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};

var defineProperty$3 = objectDefineProperty.f;
var hasOwn$2 = hasOwnProperty_1;
var wellKnownSymbol$9 = wellKnownSymbol$h;

var TO_STRING_TAG$1 = wellKnownSymbol$9('toStringTag');

var setToStringTag$3 = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn$2(target, TO_STRING_TAG$1)) {
    defineProperty$3(target, TO_STRING_TAG$1, { configurable: true, value: TAG });
  }
};

var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
var create$2 = objectCreate;
var createPropertyDescriptor$2 = createPropertyDescriptor$5;
var setToStringTag$2 = setToStringTag$3;
var Iterators$3 = iterators;

var returnThis$1 = function () { return this; };

var iteratorCreateConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create$2(IteratorPrototype$1, { next: createPropertyDescriptor$2(+!ENUMERABLE_NEXT, next) });
  setToStringTag$2(IteratorConstructor, TO_STRING_TAG, false);
  Iterators$3[TO_STRING_TAG] = returnThis$1;
  return IteratorConstructor;
};

var isCallable$5 = isCallable$j;

var $String = String;
var $TypeError$4 = TypeError;

var aPossiblePrototype$1 = function (argument) {
  if (typeof argument == 'object' || isCallable$5(argument)) return argument;
  throw $TypeError$4("Can't set " + $String(argument) + ' as a prototype');
};

/* eslint-disable no-proto -- safe */

var uncurryThis$9 = functionUncurryThis;
var anObject$4 = anObject$b;
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
    setter = uncurryThis$9(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject$4(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var $$3 = _export;
var call$7 = functionCall;
var FunctionName = functionName;
var isCallable$4 = isCallable$j;
var createIteratorConstructor$1 = iteratorCreateConstructor;
var getPrototypeOf = objectGetPrototypeOf;
var setPrototypeOf$1 = objectSetPrototypeOf;
var setToStringTag$1 = setToStringTag$3;
var createNonEnumerableProperty$3 = createNonEnumerableProperty$6;
var defineBuiltIn$4 = defineBuiltIn$8;
var wellKnownSymbol$8 = wellKnownSymbol$h;
var Iterators$2 = iterators;
var IteratorsCore = iteratorsCore;

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$4 = wellKnownSymbol$8('iterator');
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
  var nativeIterator = IterablePrototype[ITERATOR$4]
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
        if (setPrototypeOf$1) {
          setPrototypeOf$1(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable$4(CurrentIteratorPrototype[ITERATOR$4])) {
          defineBuiltIn$4(CurrentIteratorPrototype, ITERATOR$4, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag$1(CurrentIteratorPrototype, TO_STRING_TAG, true);
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty$3(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call$7(nativeIterator, this); };
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
        defineBuiltIn$4(IterablePrototype, KEY, methods[KEY]);
      }
    } else $$3({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if (IterablePrototype[ITERATOR$4] !== defaultIterator) {
    defineBuiltIn$4(IterablePrototype, ITERATOR$4, defaultIterator, { name: DEFAULT });
  }
  Iterators$2[NAME] = defaultIterator;

  return methods;
};

// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
var createIterResultObject$1 = function (value, done) {
  return { value: value, done: done };
};

var toIndexedObject = toIndexedObject$5;
var addToUnscopables = addToUnscopables$2;
var Iterators$1 = iterators;
var InternalStateModule$1 = internalState;
var defineProperty$2 = objectDefineProperty.f;
var defineIterator = iteratorDefine;
var createIterResultObject = createIterResultObject$1;
var DESCRIPTORS$4 = descriptors;

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState$1 = InternalStateModule$1.set;
var getInternalState$1 = InternalStateModule$1.getterFor(ARRAY_ITERATOR);

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
var es_array_iterator = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState$1(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState$1(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return createIterResultObject(undefined, true);
  }
  if (kind == 'keys') return createIterResultObject(index, false);
  if (kind == 'values') return createIterResultObject(target[index], false);
  return createIterResultObject([index, target[index]], false);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values = Iterators$1.Arguments = Iterators$1.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

// V8 ~ Chrome 45- bug
if (DESCRIPTORS$4 && values.name !== 'values') try {
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
var createNonEnumerableProperty$2 = createNonEnumerableProperty$6;
var wellKnownSymbol$7 = wellKnownSymbol$h;

var ITERATOR$3 = wellKnownSymbol$7('iterator');
var TO_STRING_TAG = wellKnownSymbol$7('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

var handlePrototype = function (CollectionPrototype, COLLECTION_NAME) {
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR$3] !== ArrayValues) try {
      createNonEnumerableProperty$2(CollectionPrototype, ITERATOR$3, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR$3] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty$2(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty$2(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
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

var fails$7 = fails$k;
var wellKnownSymbol$6 = wellKnownSymbol$h;
var IS_PURE = isPure;

var ITERATOR$2 = wellKnownSymbol$6('iterator');

var urlConstructorDetection = !fails$7(function () {
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
    || !searchParams[ITERATOR$2]
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

var defineBuiltIn$3 = defineBuiltIn$8;

var defineBuiltIns$1 = function (target, src, options) {
  for (var key in src) defineBuiltIn$3(target, key, src[key], options);
  return target;
};

var isPrototypeOf$1 = objectIsPrototypeOf;

var $TypeError$3 = TypeError;

var anInstance$1 = function (it, Prototype) {
  if (isPrototypeOf$1(Prototype, it)) return it;
  throw $TypeError$3('Incorrect invocation');
};

var uncurryThis$8 = functionUncurryThis;
var aCallable$1 = aCallable$3;
var NATIVE_BIND$1 = functionBindNative;

var bind$1 = uncurryThis$8(uncurryThis$8.bind);

// optional / simple context binding
var functionBindContext = function (fn, that) {
  aCallable$1(fn);
  return that === undefined ? fn : NATIVE_BIND$1 ? bind$1(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var classof$2 = classof$6;
var getMethod$1 = getMethod$3;
var isNullOrUndefined$1 = isNullOrUndefined$4;
var Iterators = iterators;
var wellKnownSymbol$5 = wellKnownSymbol$h;

var ITERATOR$1 = wellKnownSymbol$5('iterator');

var getIteratorMethod$2 = function (it) {
  if (!isNullOrUndefined$1(it)) return getMethod$1(it, ITERATOR$1)
    || getMethod$1(it, '@@iterator')
    || Iterators[classof$2(it)];
};

var call$6 = functionCall;
var aCallable = aCallable$3;
var anObject$3 = anObject$b;
var tryToString = tryToString$2;
var getIteratorMethod$1 = getIteratorMethod$2;

var $TypeError$2 = TypeError;

var getIterator$1 = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$1(argument) : usingIterator;
  if (aCallable(iteratorMethod)) return anObject$3(call$6(iteratorMethod, argument));
  throw $TypeError$2(tryToString(argument) + ' is not iterable');
};

var $TypeError$1 = TypeError;

var validateArgumentsLength$1 = function (passed, required) {
  if (passed < required) throw $TypeError$1('Not enough arguments');
  return passed;
};

var toPropertyKey = toPropertyKey$3;
var definePropertyModule$1 = objectDefineProperty;
var createPropertyDescriptor$1 = createPropertyDescriptor$5;

var createProperty$1 = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule$1.f(object, propertyKey, createPropertyDescriptor$1(0, value));
  else object[propertyKey] = value;
};

var toAbsoluteIndex = toAbsoluteIndex$2;
var lengthOfArrayLike = lengthOfArrayLike$2;
var createProperty = createProperty$1;

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

var arraySlice = arraySliceSimple;

var floor$1 = Math.floor;

var mergeSort = function (array, comparefn) {
  var length = array.length;
  var middle = floor$1(length / 2);
  return length < 8 ? insertionSort(array, comparefn) : merge(
    array,
    mergeSort(arraySlice(array, 0, middle), comparefn),
    mergeSort(arraySlice(array, middle), comparefn),
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

var $$2 = _export;
var global$5 = global$g;
var call$5 = functionCall;
var uncurryThis$7 = functionUncurryThis;
var DESCRIPTORS$3 = descriptors;
var USE_NATIVE_URL = urlConstructorDetection;
var defineBuiltIn$2 = defineBuiltIn$8;
var defineBuiltIns = defineBuiltIns$1;
var setToStringTag = setToStringTag$3;
var createIteratorConstructor = iteratorCreateConstructor;
var InternalStateModule = internalState;
var anInstance = anInstance$1;
var isCallable$3 = isCallable$j;
var hasOwn$1 = hasOwnProperty_1;
var bind = functionBindContext;
var classof$1 = classof$6;
var anObject$2 = anObject$b;
var isObject$1 = isObject$9;
var $toString = toString$5;
var create$1 = objectCreate;
var createPropertyDescriptor = createPropertyDescriptor$5;
var getIterator = getIterator$1;
var getIteratorMethod = getIteratorMethod$2;
var validateArgumentsLength = validateArgumentsLength$1;
var wellKnownSymbol$4 = wellKnownSymbol$h;
var arraySort = arraySort$1;

var ITERATOR = wellKnownSymbol$4('iterator');
var URL_SEARCH_PARAMS = 'URLSearchParams';
var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
var setInternalState = InternalStateModule.set;
var getInternalParamsState = InternalStateModule.getterFor(URL_SEARCH_PARAMS);
var getInternalIteratorState = InternalStateModule.getterFor(URL_SEARCH_PARAMS_ITERATOR);
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Avoid NodeJS experimental warning
var safeGetBuiltIn = function (name) {
  if (!DESCRIPTORS$3) return global$5[name];
  var descriptor = getOwnPropertyDescriptor(global$5, name);
  return descriptor && descriptor.value;
};

var nativeFetch = safeGetBuiltIn('fetch');
var NativeRequest = safeGetBuiltIn('Request');
var Headers = safeGetBuiltIn('Headers');
var RequestPrototype = NativeRequest && NativeRequest.prototype;
var HeadersPrototype = Headers && Headers.prototype;
var RegExp$1 = global$5.RegExp;
var TypeError$1 = global$5.TypeError;
var decodeURIComponent = global$5.decodeURIComponent;
var encodeURIComponent = global$5.encodeURIComponent;
var charAt$5 = uncurryThis$7(''.charAt);
var join = uncurryThis$7([].join);
var push$1 = uncurryThis$7([].push);
var replace$3 = uncurryThis$7(''.replace);
var shift = uncurryThis$7([].shift);
var splice = uncurryThis$7([].splice);
var split = uncurryThis$7(''.split);
var stringSlice$5 = uncurryThis$7(''.slice);

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
  var result = replace$3(it, plus, ' ');
  var bytes = 4;
  try {
    return decodeURIComponent(result);
  } catch (error) {
    while (bytes) {
      result = replace$3(result, percentSequence(bytes--), percentDecode);
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
  return replace$3(encodeURIComponent(it), find, replacer);
};

var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
  setInternalState(this, {
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
    else this.parseQuery(typeof init == 'string' ? charAt$5(init, 0) === '?' ? stringSlice$5(init, 1) : init : $toString(init));
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
      while (!(step = call$5(next, iterator)).done) {
        entryIterator = getIterator(anObject$2(step.value));
        entryNext = entryIterator.next;
        if (
          (first = call$5(entryNext, entryIterator)).done ||
          (second = call$5(entryNext, entryIterator)).done ||
          !call$5(entryNext, entryIterator).done
        ) throw TypeError$1('Expected sequence with length 2');
        push$1(this.entries, { key: $toString(first.value), value: $toString(second.value) });
      }
    } else for (var key in object) if (hasOwn$1(object, key)) {
      push$1(this.entries, { key: key, value: $toString(object[key]) });
    }
  },
  parseQuery: function (query) {
    if (query) {
      var attributes = split(query, '&');
      var index = 0;
      var attribute, entry;
      while (index < attributes.length) {
        attribute = attributes[index++];
        if (attribute.length) {
          entry = split(attribute, '=');
          push$1(this.entries, {
            key: deserialize(shift(entry)),
            value: deserialize(join(entry, '='))
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
      push$1(result, serialize(entry.key) + '=' + serialize(entry.value));
    } return join(result, '&');
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
  anInstance(this, URLSearchParamsPrototype);
  var init = arguments.length > 0 ? arguments[0] : undefined;
  setInternalState(this, new URLSearchParamsState(init));
};

var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;

defineBuiltIns(URLSearchParamsPrototype, {
  // `URLSearchParams.prototype.append` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-append
  append: function append(name, value) {
    validateArgumentsLength(arguments.length, 2);
    var state = getInternalParamsState(this);
    push$1(state.entries, { key: $toString(name), value: $toString(value) });
    state.updateURL();
  },
  // `URLSearchParams.prototype.delete` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
  'delete': function (name) {
    validateArgumentsLength(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var key = $toString(name);
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
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = $toString(name);
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) return entries[index].value;
    }
    return null;
  },
  // `URLSearchParams.prototype.getAll` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
  getAll: function getAll(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = $toString(name);
    var result = [];
    var index = 0;
    for (; index < entries.length; index++) {
      if (entries[index].key === key) push$1(result, entries[index].value);
    }
    return result;
  },
  // `URLSearchParams.prototype.has` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-has
  has: function has(name) {
    validateArgumentsLength(arguments.length, 1);
    var entries = getInternalParamsState(this).entries;
    var key = $toString(name);
    var index = 0;
    while (index < entries.length) {
      if (entries[index++].key === key) return true;
    }
    return false;
  },
  // `URLSearchParams.prototype.set` method
  // https://url.spec.whatwg.org/#dom-urlsearchparams-set
  set: function set(name, value) {
    validateArgumentsLength(arguments.length, 1);
    var state = getInternalParamsState(this);
    var entries = state.entries;
    var found = false;
    var key = $toString(name);
    var val = $toString(value);
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
    if (!found) push$1(entries, { key: key, value: val });
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
    var boundFunction = bind(callback, arguments.length > 1 ? arguments[1] : undefined);
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
defineBuiltIn$2(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries, { name: 'entries' });

// `URLSearchParams.prototype.toString` method
// https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior
defineBuiltIn$2(URLSearchParamsPrototype, 'toString', function toString() {
  return getInternalParamsState(this).serialize();
}, { enumerable: true });

setToStringTag(URLSearchParamsConstructor, URL_SEARCH_PARAMS);

$$2({ global: true, constructor: true, forced: !USE_NATIVE_URL }, {
  URLSearchParams: URLSearchParamsConstructor
});

// Wrap `fetch` and `Request` for correct work with polyfilled `URLSearchParams`
if (!USE_NATIVE_URL && isCallable$3(Headers)) {
  var headersHas = uncurryThis$7(HeadersPrototype.has);
  var headersSet = uncurryThis$7(HeadersPrototype.set);

  var wrapRequestOptions = function (init) {
    if (isObject$1(init)) {
      var body = init.body;
      var headers;
      if (classof$1(body) === URL_SEARCH_PARAMS) {
        headers = init.headers ? new Headers(init.headers) : new Headers();
        if (!headersHas(headers, 'content-type')) {
          headersSet(headers, 'content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
        return create$1(init, {
          body: createPropertyDescriptor(0, $toString(body)),
          headers: createPropertyDescriptor(0, headers)
        });
      }
    } return init;
  };

  if (isCallable$3(nativeFetch)) {
    $$2({ global: true, enumerable: true, dontCallGetSet: true, forced: true }, {
      fetch: function fetch(input /* , init */) {
        return nativeFetch(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
      }
    });
  }

  if (isCallable$3(NativeRequest)) {
    var RequestConstructor = function Request(input /* , init */) {
      anInstance(this, RequestPrototype);
      return new NativeRequest(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
    };

    RequestPrototype.constructor = RequestConstructor;
    RequestConstructor.prototype = RequestPrototype;

    $$2({ global: true, constructor: true, dontCallGetSet: true, forced: true }, {
      Request: RequestConstructor
    });
  }
}

var fails$6 = fails$k;
var global$4 = global$g;

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp$2 = global$4.RegExp;

var UNSUPPORTED_Y$2 = fails$6(function () {
  var re = $RegExp$2('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY$1 = UNSUPPORTED_Y$2 || fails$6(function () {
  return !$RegExp$2('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y$2 || fails$6(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp$2('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});

var regexpStickyHelpers = {
  BROKEN_CARET: BROKEN_CARET,
  MISSED_STICKY: MISSED_STICKY$1,
  UNSUPPORTED_Y: UNSUPPORTED_Y$2
};

var fails$5 = fails$k;
var global$3 = global$g;

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp$1 = global$3.RegExp;

var regexpUnsupportedDotAll = fails$5(function () {
  var re = $RegExp$1('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});

var fails$4 = fails$k;
var global$2 = global$g;

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global$2.RegExp;

var regexpUnsupportedNcg = fails$4(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call$4 = functionCall;
var uncurryThis$6 = functionUncurryThis;
var toString$3 = toString$5;
var regexpFlags = regexpFlags$1;
var stickyHelpers$1 = regexpStickyHelpers;
var shared = shared$4.exports;
var create = objectCreate;
var getInternalState = internalState.get;
var UNSUPPORTED_DOT_ALL$1 = regexpUnsupportedDotAll;
var UNSUPPORTED_NCG$1 = regexpUnsupportedNcg;

var nativeReplace = shared('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt$4 = uncurryThis$6(''.charAt);
var indexOf = uncurryThis$6(''.indexOf);
var replace$2 = uncurryThis$6(''.replace);
var stringSlice$4 = uncurryThis$6(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call$4(nativeExec, re1, 'a');
  call$4(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y$1 = stickyHelpers$1.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$1 || UNSUPPORTED_DOT_ALL$1 || UNSUPPORTED_NCG$1;

if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString$3(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call$4(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y$1 && re.sticky;
    var flags = call$4(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace$2(flags, 'y', '');
      if (indexOf(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice$4(str, re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$4(str, re.lastIndex - 1) !== '\n')) {
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

    match = call$4(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice$4(match.input, charsAdded);
        match[0] = stringSlice$4(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
      call$4(nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

var regexpExec$2 = patchedExec;

var $$1 = _export;
var exec$1 = regexpExec$2;

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$$1({ target: 'RegExp', proto: true, forced: /./.exec !== exec$1 }, {
  exec: exec$1
});

var isCallable$2 = isCallable$j;
var isObject = isObject$9;
var setPrototypeOf = objectSetPrototypeOf;

// makes subclassing work correct for wrapped built-ins
var inheritIfRequired$1 = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable$2(NewTarget = dummy.constructor) &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};

var defineProperty$1 = objectDefineProperty.f;

var proxyAccessor$1 = function (Target, Source, key) {
  key in Target || defineProperty$1(Target, key, {
    configurable: true,
    get: function () { return Source[key]; },
    set: function (it) { Source[key] = it; }
  });
};

var getBuiltIn = getBuiltIn$5;
var definePropertyModule = objectDefineProperty;
var wellKnownSymbol$3 = wellKnownSymbol$h;
var DESCRIPTORS$2 = descriptors;

var SPECIES$1 = wellKnownSymbol$3('species');

var setSpecies$1 = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS$2 && Constructor && !Constructor[SPECIES$1]) {
    defineProperty(Constructor, SPECIES$1, {
      configurable: true,
      get: function () { return this; }
    });
  }
};

var DESCRIPTORS$1 = descriptors;
var global$1 = global$g;
var uncurryThis$5 = functionUncurryThis;
var isForced = isForced_1;
var inheritIfRequired = inheritIfRequired$1;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$6;
var getOwnPropertyNames = objectGetOwnPropertyNames.f;
var isPrototypeOf = objectIsPrototypeOf;
var isRegExp = isRegexp;
var toString$2 = toString$5;
var getRegExpFlags = regexpGetFlags;
var stickyHelpers = regexpStickyHelpers;
var proxyAccessor = proxyAccessor$1;
var defineBuiltIn$1 = defineBuiltIn$8;
var fails$3 = fails$k;
var hasOwn = hasOwnProperty_1;
var enforceInternalState = internalState.enforce;
var setSpecies = setSpecies$1;
var wellKnownSymbol$2 = wellKnownSymbol$h;
var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
var UNSUPPORTED_NCG = regexpUnsupportedNcg;

var MATCH = wellKnownSymbol$2('match');
var NativeRegExp = global$1.RegExp;
var RegExpPrototype$1 = NativeRegExp.prototype;
var SyntaxError = global$1.SyntaxError;
var exec = uncurryThis$5(RegExpPrototype$1.exec);
var charAt$3 = uncurryThis$5(''.charAt);
var replace$1 = uncurryThis$5(''.replace);
var stringIndexOf$1 = uncurryThis$5(''.indexOf);
var stringSlice$3 = uncurryThis$5(''.slice);
// TODO: Use only proper RegExpIdentifierName
var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
var re1 = /a/g;
var re2 = /a/g;

// "new" should create a new object, old webkit bug
var CORRECT_NEW = new NativeRegExp(re1) !== re1;

var MISSED_STICKY = stickyHelpers.MISSED_STICKY;
var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;

var BASE_FORCED = DESCRIPTORS$1 &&
  (!CORRECT_NEW || MISSED_STICKY || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG || fails$3(function () {
    re2[MATCH] = false;
    // RegExp constructor can alter flags and IsRegExp works correct with @@match
    return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
  }));

var handleDotAll = function (string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var brackets = false;
  var chr;
  for (; index <= length; index++) {
    chr = charAt$3(string, index);
    if (chr === '\\') {
      result += chr + charAt$3(string, ++index);
      continue;
    }
    if (!brackets && chr === '.') {
      result += '[\\s\\S]';
    } else {
      if (chr === '[') {
        brackets = true;
      } else if (chr === ']') {
        brackets = false;
      } result += chr;
    }
  } return result;
};

var handleNCG = function (string) {
  var length = string.length;
  var index = 0;
  var result = '';
  var named = [];
  var names = {};
  var brackets = false;
  var ncg = false;
  var groupid = 0;
  var groupname = '';
  var chr;
  for (; index <= length; index++) {
    chr = charAt$3(string, index);
    if (chr === '\\') {
      chr = chr + charAt$3(string, ++index);
    } else if (chr === ']') {
      brackets = false;
    } else if (!brackets) switch (true) {
      case chr === '[':
        brackets = true;
        break;
      case chr === '(':
        if (exec(IS_NCG, stringSlice$3(string, index + 1))) {
          index += 2;
          ncg = true;
        }
        result += chr;
        groupid++;
        continue;
      case chr === '>' && ncg:
        if (groupname === '' || hasOwn(names, groupname)) {
          throw new SyntaxError('Invalid capture group name');
        }
        names[groupname] = true;
        named[named.length] = [groupname, groupid];
        ncg = false;
        groupname = '';
        continue;
    }
    if (ncg) groupname += chr;
    else result += chr;
  } return [result, named];
};

// `RegExp` constructor
// https://tc39.es/ecma262/#sec-regexp-constructor
if (isForced('RegExp', BASE_FORCED)) {
  var RegExpWrapper = function RegExp(pattern, flags) {
    var thisIsRegExp = isPrototypeOf(RegExpPrototype$1, this);
    var patternIsRegExp = isRegExp(pattern);
    var flagsAreUndefined = flags === undefined;
    var groups = [];
    var rawPattern = pattern;
    var rawFlags, dotAll, sticky, handled, result, state;

    if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
      return pattern;
    }

    if (patternIsRegExp || isPrototypeOf(RegExpPrototype$1, pattern)) {
      pattern = pattern.source;
      if (flagsAreUndefined) flags = getRegExpFlags(rawPattern);
    }

    pattern = pattern === undefined ? '' : toString$2(pattern);
    flags = flags === undefined ? '' : toString$2(flags);
    rawPattern = pattern;

    if (UNSUPPORTED_DOT_ALL && 'dotAll' in re1) {
      dotAll = !!flags && stringIndexOf$1(flags, 's') > -1;
      if (dotAll) flags = replace$1(flags, /s/g, '');
    }

    rawFlags = flags;

    if (MISSED_STICKY && 'sticky' in re1) {
      sticky = !!flags && stringIndexOf$1(flags, 'y') > -1;
      if (sticky && UNSUPPORTED_Y) flags = replace$1(flags, /y/g, '');
    }

    if (UNSUPPORTED_NCG) {
      handled = handleNCG(pattern);
      pattern = handled[0];
      groups = handled[1];
    }

    result = inheritIfRequired(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype$1, RegExpWrapper);

    if (dotAll || sticky || groups.length) {
      state = enforceInternalState(result);
      if (dotAll) {
        state.dotAll = true;
        state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
      }
      if (sticky) state.sticky = true;
      if (groups.length) state.groups = groups;
    }

    if (pattern !== rawPattern) try {
      // fails in old engines, but we have no alternatives for unsupported regex syntax
      createNonEnumerableProperty$1(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
    } catch (error) { /* empty */ }

    return result;
  };

  for (var keys = getOwnPropertyNames(NativeRegExp), index = 0; keys.length > index;) {
    proxyAccessor(RegExpWrapper, NativeRegExp, keys[index++]);
  }

  RegExpPrototype$1.constructor = RegExpWrapper;
  RegExpWrapper.prototype = RegExpPrototype$1;
  defineBuiltIn$1(global$1, 'RegExp', RegExpWrapper, { constructor: true });
}

// https://tc39.es/ecma262/#sec-get-regexp-@@species
setSpecies('RegExp');

var DESCRIPTORS = descriptors;
var uncurryThis$4 = functionUncurryThis;
var call$3 = functionCall;
var fails$2 = fails$k;
var objectKeys = objectKeys$2;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var toObject$1 = toObject$4;
var IndexedObject = indexedObject;

// eslint-disable-next-line es/no-object-assign -- safe
var $assign = Object.assign;
// eslint-disable-next-line es/no-object-defineproperty -- required for testing
var defineProperty = Object.defineProperty;
var concat$1 = uncurryThis$4([].concat);

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
var objectAssign = !$assign || fails$2(function () {
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
      if (!DESCRIPTORS || call$3(propertyIsEnumerable, S, key)) T[key] = S[key];
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
var call$2 = FunctionPrototype.call;

// eslint-disable-next-line es/no-reflect -- safe
var functionApply = typeof Reflect == 'object' && Reflect.apply || (NATIVE_BIND ? call$2.bind(apply$1) : function () {
  return call$2.apply(apply$1, arguments);
});

// TODO: Remove from `core-js@4` since it's moved to entry points

var uncurryThis$3 = functionUncurryThis;
var defineBuiltIn = defineBuiltIn$8;
var regexpExec$1 = regexpExec$2;
var fails$1 = fails$k;
var wellKnownSymbol$1 = wellKnownSymbol$h;
var createNonEnumerableProperty = createNonEnumerableProperty$6;

var SPECIES = wellKnownSymbol$1('species');
var RegExpPrototype = RegExp.prototype;

var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol$1(KEY);

  var DELEGATES_TO_SYMBOL = !fails$1(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$1(function () {
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
    var uncurriedNativeRegExpMethod = uncurryThis$3(/./[SYMBOL]);
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = uncurryThis$3(nativeMethod);
      var $exec = regexp.exec;
      if ($exec === regexpExec$1 || $exec === RegExpPrototype.exec) {
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

    defineBuiltIn(String.prototype, KEY, methods[0]);
    defineBuiltIn(RegExpPrototype, SYMBOL, methods[1]);
  }

  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], 'sham', true);
};

var uncurryThis$2 = functionUncurryThis;
var toIntegerOrInfinity$1 = toIntegerOrInfinity$4;
var toString$1 = toString$5;
var requireObjectCoercible$1 = requireObjectCoercible$5;

var charAt$2 = uncurryThis$2(''.charAt);
var charCodeAt = uncurryThis$2(''.charCodeAt);
var stringSlice$2 = uncurryThis$2(''.slice);

var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString$1(requireObjectCoercible$1($this));
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
var advanceStringIndex$1 = function (S, index, unicode) {
  return index + (unicode ? charAt$1(S, index).length : 1);
};

var uncurryThis$1 = functionUncurryThis;
var toObject = toObject$4;

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

var call$1 = functionCall;
var anObject$1 = anObject$b;
var isCallable$1 = isCallable$j;
var classof = classofRaw$2;
var regexpExec = regexpExec$2;

var $TypeError = TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
var regexpExecAbstract = function (R, S) {
  var exec = R.exec;
  if (isCallable$1(exec)) {
    var result = call$1(exec, R, S);
    if (result !== null) anObject$1(result);
    return result;
  }
  if (classof(R) === 'RegExp') return call$1(regexpExec, R, S);
  throw $TypeError('RegExp#exec called on incompatible receiver');
};

var apply = functionApply;
var call = functionCall;
var uncurryThis = functionUncurryThis;
var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
var fails = fails$k;
var anObject = anObject$b;
var isCallable = isCallable$j;
var isNullOrUndefined = isNullOrUndefined$4;
var toIntegerOrInfinity = toIntegerOrInfinity$4;
var toLength = toLength$2;
var toString = toString$5;
var requireObjectCoercible = requireObjectCoercible$5;
var advanceStringIndex = advanceStringIndex$1;
var getMethod = getMethod$3;
var getSubstitution = getSubstitution$1;
var regExpExec = regexpExecAbstract;
var wellKnownSymbol = wellKnownSymbol$h;

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

var WindowMessageType;
(function (WindowMessageType) {
  WindowMessageType["InitializeInteractivity"] = "InitializeInteractivity";
  WindowMessageType["TriggerInteractivity"] = "TriggerInteractivity";
  WindowMessageType["SetAdSizes"] = "SetAdSizes";
  WindowMessageType["GptEvent"] = "GptEvent";
})(WindowMessageType || (WindowMessageType = {}));
var InteractiveBehavior;
(function (InteractiveBehavior) {
  InteractiveBehavior["Deeplink"] = "Deeplink";
})(InteractiveBehavior || (InteractiveBehavior = {}));

const stringTemplate = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <base href="/" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="initial-scale=1.0, user-scalable=no">

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

class HopprBannerAd extends React.Component {
  constructor(props) {
    super(props);
    this.instanceUUID = UUIDUtils.getID();
    this.webView = /*#__PURE__*/createRef();
    this.onShouldStartLoadWithRequest = ({
      url,
      canGoBack,
      isTopFrame
    }) => {
      console.log('onShouldStartLoadWithRequest', url, canGoBack, isTopFrame);
      // CompositeFilter.l
      /**
       * Special case handling for ios
       * isFirstLoad is needed b/c onShouldStartLoadWithRequest is called on first load
       * isTopFrame is needed to separate iframe requests from topframe requests
       */
      // if (Platform.OS === 'ios') {
      //   const isFirstLoad = url === originalUrl && !canGoBack;
      //   if (!isTopFrame || isFirstLoad) return true;
      // }
      // if (url !== originalUrl) {
      //   if (!this.passesWhitelist(originWhitelist, url))
      // this.openExternalLink(url);;
      if (url.includes('googleads.g.doubleclick.net')) {
        console.log('contains googleads.g.doubleclick.net');
        const urlParams = new URLSearchParams(url);
        const myParam = urlParams.get('adurl');
        if (myParam) this.openExternalLink(myParam);
      } else {
        console.log("don't contain googleads.g.doubleclick.net");
      }
      return true;
      //   else {
      //     // handling the request if it's with the domain listed in the whitelist
      //     return true;
      //   }
      // }
      // return false;
    };

    this.extractOrigin = url => {
      const result = /^[A-Za-z][A-Za-z0-9+\-.]+:(\/\/)?[^/]*/.exec(url);
      return result === null ? '' : result[0];
    };
    this.passesWhitelist = (compiledWhitelist, url) => {
      const origin = this.extractOrigin(url);
      return compiledWhitelist.some(x => new RegExp(x).test(origin));
    };
    this.openExternalLink = url => {
      console.log('openExternalLink', url);
      Linking.canOpenURL(url).then(supported => {
        console.log('canOpenURL', supported);
        // if (supported) Linking.openURL(url);
        Linking.openURL(url);
      });
    };
    this.onMessage = data => {
      try {
        const message = JSON.parse(data.nativeEvent.data);
        switch (message.type) {
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
                this.logGptEvent(message.gptEvent);
              }
              break;
            }
          case WindowMessageType.TriggerInteractivity:
            {
              this.triggerInteractivity();
              break;
            }
        }
        // console.log('onMessage', message);
      } catch (e) {
        console.log('onMessage error parsing ', data, e);
      }
    };
    this.state = {
      adSize: [0, 0],
      isSelected: false
    };
    if (!this.isAppleTV()) {
      HopprAnalytics.logInternalEvent(HopprInternalEvents.HopprInternalConstructorBanner, AnalyticsUtils.getStandardBannerProperties(this.instanceUUID, this.props, this.state));
    }
  }
  render() {
    var _a, _b;
    const template = this.generateTemplate();
    if (template && !this.isAppleTV()) {
      const viewStyle = this.props.style;
      const width = (_a = this.state.adSize) === null || _a === void 0 ? void 0 : _a[0];
      const height = (_b = this.state.adSize) === null || _b === void 0 ? void 0 : _b[1];
      let opacity = 0;
      if (width > 0) {
        opacity = 1;
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
          children: [this.getWebView(template), /*#__PURE__*/jsx(View, {
            style: {
              width: width,
              height: height,
              position: 'absolute',
              borderColor: 'red',
              borderWidth: this.state.isSelected ? 1 : 0
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
          children: this.getWebView(template)
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
    this.setState({
      isSelected: value
    });
  }
  getWebView(template) {
    return /*#__PURE__*/jsx(WebView, {
      style: {
        backgroundColor: 'transparent'
      }
      // mediaPlaybackRequiresUserAction={false}
      // setBuiltInZoomControls={false}
      // automaticallyAdjustContentInsets={true}
      ,
      ref: this.webView
      // accessible={false}
      // focusable={false}
      // disabled={true}
      // importantForAccessibility={'no'}
      // scrollEnabled={false}
      // isTVSelectable={false}
      ,
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
    return this.props.targetProperties ? `${JSON.stringify(this.props.targetProperties)}` : '{}';
  }
  generateTemplate() {
    var _a, _b;
    let template = '';
    this.typedContext = JSON.parse(JSON.stringify(this.context));
    if (this.typedContext && this.typedContext.adSlots) {
      this.matchingAdSlots = (_a = JSON.parse(this.typedContext.adSlots)) === null || _a === void 0 ? void 0 : _a.filter(ad => ad.hopprAdUnit === this.props.adUnitId);
      if (this.matchingAdSlots && this.matchingAdSlots.length > 0) {
        template = stringTemplate
        // .replace(
        //   /(%APP_ID%)/g,
        //   this.typedContext.config?.appId
        // )
        // .replace(/(%API_KEY%)/g, this.typedContext.config.apiKey)
        // .replace(
        //   /("%HOPPR_INTERNAL_USER_ID%")/g,
        //   this.typedContext.hopprInternalUserId ?? 'null'
        // )
        .replace(/(%AD_UNIT_ID%)/g, this.matchingAdSlots[0].gamAdUnit).replace(/("%TARGETING_PROPERTIES%")/g, this.getStringifiedTargetProperties())
        // .replace(
        //   /("%HOPPR_ADS_OBJECT%")/g,
        //   JSON.stringify(this.matchingAdSlots)
        // )
        .replace(/("%AD_SIZES%")/g, this.getStringifiedSizes()).replace(/(%USER_ID%)/g, (_b = this.typedContext.config) === null || _b === void 0 ? void 0 : _b.userId);
        // .replace(
        //   /("%TARGETING_PROPERTIES%")/g,
        //   this.getStringifiedTargetProperties()
        // );
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
    var _a, _b;
    // const url =
    //   'https://play.google.com/store/apps/details?id=com.amazon.amazonvideo.livingroom';
    // const url = 'market://details?id=com.amazon.amazonvideo.livingroom';
    // const url = 'nflx://www.netflix.com/';
    // const url = 'https://www.disneyplus.com/';
    const url = (_a = this.interactivity) === null || _a === void 0 ? void 0 : _a.url;
    const behavior = (_b = this.interactivity) === null || _b === void 0 ? void 0 : _b.behavior;
    console.log('url');
    if (url && behavior) {
      switch (behavior) {
        case InteractiveBehavior.Deeplink:
          {
            Linking.canOpenURL(url).then(canOpenUrl => {
              this.logDeeplinkClicked(url, behavior);
              Linking.openURL(url);
            }).catch(err => {
              this.logDeeplinkError('Erro opening', err);
            });
            break;
          }
      }
    } else {
      this.logDeeplinkError('Interactivity not initalized correctly - empty URL or behavior');
    }
  }
  postMessageTest() {
    // this.webView?.current?.injectJavaScript(js);
  }

  logDeeplinkError(error, errorObject) {
    console.error(error, errorObject);
    if (errorObject) error += JSON.stringify(errorObject);
    HopprAnalytics.logInternalEvent(HopprInternalEvents.HopprInternalDeeplinkError, AnalyticsUtils.getDeepLinkErrorRecord(this.instanceUUID, this.props, this.state, error));
  }
  logDeeplinkClicked(url, behavior) {
    HopprAnalytics.logInternalEvent(HopprInternalEvents.HopprInternalDeeplinkClicked, AnalyticsUtils.getDeepLinkRecord(this.instanceUUID, this.props, this.state, url, behavior));
  }
  logGptEvent(gptEvent) {
    const eventType = AnalyticsUtils.mapGptEventNameToHopprEvent(gptEvent.name);
    if (eventType) {
      HopprAnalytics.logInternalEvent(eventType, AnalyticsUtils.getGptEventRecord(this.instanceUUID, this.props, this.state, gptEvent));
    }
  }
}
HopprBannerAd.contextType = HopprAdContext;

var _a;
class HopprAnalyticsLogger {}
_a = HopprAnalyticsLogger;
HopprAnalyticsLogger.log = (eventId, eventDetails) => __awaiter(void 0, void 0, void 0, function* () {
  const record = _a.assignStandardProperties(eventDetails);
  console.log('HopprAnalyticsLogger log', eventId, JSON.stringify(record));
  HopprAnalytics.logEvent(eventId, record, Object.values(HopprEvents));
});
HopprAnalyticsLogger.setUserProperties = properties => __awaiter(void 0, void 0, void 0, function* () {
  HopprAnalytics.logEvent(HopprEvents.UpdateUserProperties, properties, Object.values(HopprEvents));
});
HopprAnalyticsLogger.assignStandardProperties = eventDetails => {
  let record = AnalyticsUtils.getStandardProperties();
  return Object.assign(Object.assign(Object.assign({}, record), eventDetails));
};

export { HopprAdProvider, HopprAnalyticsLogger, HopprBannerAd };
