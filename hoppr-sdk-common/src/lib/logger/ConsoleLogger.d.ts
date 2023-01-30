import { BaseLogger } from './BaseLogger';
import { Logger, LogLevelString } from './Logger';
export declare class ConsoleLogger extends BaseLogger {
    private static _loggers;
    private static _globalDefaultLogLevel?;
    private static _consoleLoggers;
    private constructor();
    static setGlobalDefaultLogLevel(logLevel?: LogLevelString): void;
    static get(name: string, appLogLevel?: LogLevelString | undefined): Logger;
    private processLog;
    emergency(message: string, data?: any): void;
    alert(message: string, data?: any): void;
    critical(message: string, data?: any): void;
    error(message: string, data?: any): void;
    warn(message: string, data?: any): void;
    notice(message: string, data?: any): void;
    info(message: string, data?: any): void;
    debug(message: string, data?: any): void;
    trace(message: string, data?: any): void;
}
