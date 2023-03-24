export declare abstract class Logger {
    abstract emergency(message: string, data?: any): void;
    abstract alert(message: string, data?: any): void;
    abstract critical(message: string, data?: any): void;
    abstract error(message: string, data?: any): void;
    abstract warn(message: string, data?: any): void;
    abstract notice(message: string, data?: any): void;
    abstract info(message: string, data?: any): void;
    abstract debug(message: string, data?: any): void;
    abstract trace(message: string, data?: any): void;
    static setGlobalDefaultLogLevel: (logLevel?: LogLevelString) => never;
}
export declare enum LogSeverity {
    EMERGENCY = 0,
    ALERT = 1,
    CRITICAL = 2,
    ERROR = 3,
    WARNING = 4,
    NOTICE = 5,
    INFO = 6,
    DEBUG = 7,
    TRACE = 8
}
export declare const LogLevelStringKeys: readonly ["error", "err", "warn", "warning", "info", "debug", "dbg", "trace"];
export type LogLevelString = typeof LogLevelStringKeys[number];
export declare const getDefaultLogger: (name: string, appLogLevel?: LogLevelString | undefined) => Logger;
export declare const setGlobalDefaultLogLevel: (appLogLevel: LogLevelString) => void;
