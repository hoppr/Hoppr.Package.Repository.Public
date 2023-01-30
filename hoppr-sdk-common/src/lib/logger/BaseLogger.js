"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseLogger = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
const Logger_1 = require("./Logger");
class BaseLogger {
    constructor(name, appLogLevel) {
        this.name = name;
        this.appLogLevel = this.getAppLogLevel(appLogLevel);
    }
    skipLog(severity) {
        return severity > this.appLogLevel;
    }
    getAppLogLevel(appEnvLogLevel) {
        let appLogLevel = Logger_1.LogSeverity.INFO;
        if (appEnvLogLevel) {
            let logLevelAcceptedValues = [];
            // error
            logLevelAcceptedValues = ['error', 'err', Logger_1.LogSeverity.ERROR];
            if (logLevelAcceptedValues.includes(appEnvLogLevel.toLowerCase())) {
                appLogLevel = Logger_1.LogSeverity.ERROR;
            }
            // warning
            logLevelAcceptedValues = ['warn', 'warning', Logger_1.LogSeverity.WARNING];
            if (logLevelAcceptedValues.includes(appEnvLogLevel.toLowerCase())) {
                appLogLevel = Logger_1.LogSeverity.WARNING;
            }
            // info
            logLevelAcceptedValues = ['info', Logger_1.LogSeverity.INFO];
            if (logLevelAcceptedValues.includes(appEnvLogLevel.toLowerCase())) {
                appLogLevel = Logger_1.LogSeverity.INFO;
            }
            // debug
            logLevelAcceptedValues = ['debug', 'dbg', Logger_1.LogSeverity.DEBUG];
            if (logLevelAcceptedValues.includes(appEnvLogLevel.toLowerCase())) {
                appLogLevel = Logger_1.LogSeverity.DEBUG;
            }
            // trace
            logLevelAcceptedValues = ['trace', Logger_1.LogSeverity.TRACE];
            if (logLevelAcceptedValues.includes(appEnvLogLevel.toLowerCase())) {
                appLogLevel = Logger_1.LogSeverity.TRACE;
            }
        }
        return appLogLevel;
    }
}
exports.BaseLogger = BaseLogger;
//# sourceMappingURL=BaseLogger.js.map