import { IAnalyticsRequest, Logger } from '@hoppr/hoppr-common';
import { AnalyticsEngineConfig } from './analytics/engine/AnalyticsEngine';
export declare class HopprAnalytics {
    private logger;
    private config;
    private analyticsRequest;
    private analyticsEngine;
    private static singletonObject?;
    private static commandArray;
    private static isInitialized;
    private constructor();
    static init: (analyticsRequest: IAnalyticsRequest, config?: AnalyticsEngineConfig, logger?: Logger) => void;
    private logEventHandler;
    private sendRemainingEvents;
    private sendRemainingEventsNative;
    static sendBeacon: () => Promise<void>;
    static sendBeaconNative: () => Promise<void>;
    static logInternalEvent: (eventId: string, eventDetails?: Record<string, any>) => Promise<void>;
    static logEvent: (eventId: string, eventDetails?: Record<string, any>, hopprEvents?: string[]) => Promise<void>;
    private logCustomEvent;
    private logHopprEvent;
}
