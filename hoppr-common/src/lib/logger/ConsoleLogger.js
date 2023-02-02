"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleLogger = void 0;
const BaseLogger_1 = require("./BaseLogger");
const Logger_1 = require("./Logger");
class ConsoleLogger extends BaseLogger_1.BaseLogger {
    constructor(name, appLogLevel) {
        super(name, appLogLevel);
    }
    static setGlobalDefaultLogLevel(logLevel) {
        ConsoleLogger._globalDefaultLogLevel = logLevel;
    }
    static get(name, appLogLevel = process.env['APP_LOG_LEVEL']) {
        const logger = ConsoleLogger._loggers.get(name);
        if (logger) {
            return logger;
        }
        const objAppLogLevel = ConsoleLogger._globalDefaultLogLevel ||
            (Logger_1.LogLevelStringKeys.includes(appLogLevel) ? appLogLevel : 'info');
        const consoleLogger = new ConsoleLogger(name, objAppLogLevel);
        ConsoleLogger._loggers.set(name, consoleLogger);
        return consoleLogger;
    }
    processLog(severity, message, data) {
        // console.log('@#@#', severity, this.appLogLevel);
        if (this.skipLog(severity)) {
            return;
        }
        const logPayload = Object.assign({ severity: `${Logger_1.LogSeverity[severity]}`, message }, data);
        const logFn = ConsoleLogger._consoleLoggers.get(severity) || console.log;
        logFn(JSON.stringify(logPayload));
    }
    emergency(message, data) {
        this.processLog(Logger_1.LogSeverity.EMERGENCY, message, data !== null && data !== void 0 ? data : {});
    }
    alert(message, data) {
        this.processLog(Logger_1.LogSeverity.ALERT, message, data !== null && data !== void 0 ? data : {});
    }
    critical(message, data) {
        this.processLog(Logger_1.LogSeverity.CRITICAL, message, data !== null && data !== void 0 ? data : {});
    }
    error(message, data) {
        this.processLog(Logger_1.LogSeverity.ERROR, message, data !== null && data !== void 0 ? data : {});
    }
    warn(message, data) {
        this.processLog(Logger_1.LogSeverity.WARNING, message, data !== null && data !== void 0 ? data : {});
    }
    notice(message, data) {
        this.processLog(Logger_1.LogSeverity.NOTICE, message, data !== null && data !== void 0 ? data : {});
    }
    info(message, data) {
        this.processLog(Logger_1.LogSeverity.INFO, message, data !== null && data !== void 0 ? data : {});
    }
    debug(message, data) {
        this.processLog(Logger_1.LogSeverity.DEBUG, message, data !== null && data !== void 0 ? data : {});
    }
    trace(message, data) {
        this.processLog(Logger_1.LogSeverity.TRACE, message, data !== null && data !== void 0 ? data : {});
    }
}
exports.ConsoleLogger = ConsoleLogger;
ConsoleLogger._loggers = new Map();
ConsoleLogger._globalDefaultLogLevel = undefined;
ConsoleLogger._consoleLoggers = new Map([
    [Logger_1.LogSeverity.DEBUG, console.debug],
    [Logger_1.LogSeverity.INFO, console.info],
    [Logger_1.LogSeverity.NOTICE, console.log],
    [Logger_1.LogSeverity.WARNING, console.warn],
    [Logger_1.LogSeverity.ERROR, console.error],
    [Logger_1.LogSeverity.CRITICAL, console.error],
    [Logger_1.LogSeverity.ALERT, console.error],
    [Logger_1.LogSeverity.EMERGENCY, console.error],
    [Logger_1.LogSeverity.TRACE, console.log],
]);
//# sourceMappingURL=ConsoleLogger.js.map