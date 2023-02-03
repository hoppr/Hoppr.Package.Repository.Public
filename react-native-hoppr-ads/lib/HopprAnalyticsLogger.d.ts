export declare class HopprAnalyticsLogger {
    static log: (eventId: string, eventDetails?: Record<string, any>) => Promise<void>;
    static setUserProperties: (properties: Record<string, any>) => Promise<void>;
    private static assignStandardProperties;
}
