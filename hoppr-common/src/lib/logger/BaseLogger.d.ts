import { Logger, LogLevelString, LogSeverity } from './Logger';
export declare abstract class BaseLogger implements Logger {
    name: string;
    appLogLevel: LogSeverity;
    constructor(name: string, appLogLevel?: LogLevelString);
    abstract emergency(message: string, data?: any): void;
    abstract alert(message: string, data?: any): void;
    abstract critical(message: string, data?: any): void;
    abstract error(message: string, data?: any): void;
    abstract warn(message: string, data?: any): void;
    abstract notice(message: string, data?: any): void;
    abstract info(message: string, data?: any): void;
    abstract debug(message: string, data?: any): void;
    abstract trace(message: string, data?: any): void;
    skipLog(severity: LogSeverity): boolean;
    private getAppLogLevel;
}
