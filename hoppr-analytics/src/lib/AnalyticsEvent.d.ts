import { AnalyticsEngineConfig } from './analytics/engine/AnalyticsEngine';
/**
 * @internal
 */
export declare class AnalyticsEvent {
    private config;
    constructor(config: AnalyticsEngineConfig);
    static isValidEventName(eventId: string): boolean;
    static isValidHopprEvent(eventId: string, hopprEvents?: string[]): boolean;
    static getInvalidParamsName(eventDetails?: Record<string, any>): string[];
}
