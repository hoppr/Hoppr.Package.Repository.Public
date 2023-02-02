"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setGlobalDefaultLogLevel = exports.getDefaultLogger = exports.LogLevelStringKeys = exports.LogSeverity = exports.Logger = void 0;
const ConsoleLogger_1 = require("./ConsoleLogger");
/* eslint-disable @typescript-eslint/no-explicit-any */
class Logger {
}
exports.Logger = Logger;
Logger.setGlobalDefaultLogLevel = (logLevel) => {
    throw new Error('not implemented');
};
// maintain the order of the log in descending order of severity
var LogSeverity;
(function (LogSeverity) {
    LogSeverity[LogSeverity["EMERGENCY"] = 0] = "EMERGENCY";
    LogSeverity[LogSeverity["ALERT"] = 1] = "ALERT";
    LogSeverity[LogSeverity["CRITICAL"] = 2] = "CRITICAL";
    LogSeverity[LogSeverity["ERROR"] = 3] = "ERROR";
    LogSeverity[LogSeverity["WARNING"] = 4] = "WARNING";
    LogSeverity[LogSeverity["NOTICE"] = 5] = "NOTICE";
    LogSeverity[LogSeverity["INFO"] = 6] = "INFO";
    LogSeverity[LogSeverity["DEBUG"] = 7] = "DEBUG";
    LogSeverity[LogSeverity["TRACE"] = 8] = "TRACE";
})(LogSeverity = exports.LogSeverity || (exports.LogSeverity = {}));
exports.LogLevelStringKeys = [
    'error',
    'err',
    'warn',
    'warning',
    'info',
    'debug',
    'dbg',
    'trace',
];
const getDefaultLogger = (name, appLogLevel) => {
    return ConsoleLogger_1.ConsoleLogger.get(name, appLogLevel);
};
exports.getDefaultLogger = getDefaultLogger;
const setGlobalDefaultLogLevel = (appLogLevel) => {
    ConsoleLogger_1.ConsoleLogger.setGlobalDefaultLogLevel(appLogLevel);
};
exports.setGlobalDefaultLogLevel = setGlobalDefaultLogLevel;
//# sourceMappingURL=Logger.js.map