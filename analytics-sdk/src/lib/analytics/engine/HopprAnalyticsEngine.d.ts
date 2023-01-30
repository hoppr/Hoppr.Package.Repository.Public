import { IAnalyticsRequest, Logger } from '@hoppr/hopprSdkCommon';
import { HopprAnalyticsConfig, IAnalyticsEngine } from './AnalyticsEngine';
export declare class HopprAnalyticsEngine implements IAnalyticsEngine {
    private config;
    private logger;
    private analyticsRequest;
    private events;
    private previousEventDate;
    private previousEventType;
    private previousSessionId;
    constructor(config: HopprAnalyticsConfig, logger: Logger, analyticsRequest: IAnalyticsRequest);
    private submitHttpPayload;
    private submitBeacon;
    private setupAsyncSubmission;
    private asyncSubmission;
    logEvent(eventKey: string, eventData?: Record<string, any>): void;
    sendRemainingEvents: () => Promise<void>;
    sendRemainingEventsNative: () => Promise<void>;
}
