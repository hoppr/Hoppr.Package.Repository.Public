export interface IAnalyticsEngine {
    logEvent(eventKey: string, eventData?: Record<string, any>): void;
    sendRemainingEvents(): Promise<void>;
    sendRemainingEventsNative(): Promise<void>;
}
export declare const enum AnalyticsEngineType {
    HOPPR = 0
}
export interface HopprAnalyticsConfig {
    intervalBetweenRequestInMinutes: number;
    sessionTimeoutInMinutes: number;
    longSessionTimeoutInMinutes: number;
}
export declare type AnalyticsEngineConfig = HopprAnalyticsConfig;
