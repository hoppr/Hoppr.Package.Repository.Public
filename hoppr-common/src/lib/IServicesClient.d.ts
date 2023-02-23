import { Logger } from './logger/Logger';
/**
 * @internal
 */
export interface ServicesClientError {
    message?: string;
    code?: number;
    details?: any;
}
/**
 * @internal
 */
export interface UpdateReq {
    appID: string;
    clientid: string;
}
/**
 * @internal
 */
export interface UpdateRespData {
    advertSlots: AdSlotResponse[];
}
/**
 * @internal
 */
export interface UpdateResp {
    data?: UpdateRespData;
    error?: ServicesClientError;
}
/**
 * @internal
 */
export interface AnalyticsResp {
    data?: any;
    error?: ServicesClientError;
}
/**
 * @internal
 */
export interface ServicesClientConfig {
    endpoint: string;
}
/**
 * @internal
 */
export interface IServicesClient {
    _logger: Logger;
    _config: ServicesClientConfig;
    update(req: UpdateReq): Promise<UpdateResp>;
    postAnalytics(req: IAnalyticsRequest): Promise<AnalyticsResp>;
    postBeaconAnalytics(req: IAnalyticsRequest): Promise<AnalyticsResp>;
    invokeClickThrough(userAgent: string, url: string): Promise<any>;
}
export declare enum AdType {
    BANNER = "banner",
    IMA = "ima",
    WEB = "web"
}
export interface AdSize {
    height: number;
    width: number;
}
export interface AdSlotResponse {
    content: string;
    adType: AdType;
    adSize: AdSize[];
    adSlotId: string;
    adUnit: string;
    name: string;
}
export interface IAnalyticsRequest {
    appId: string;
    apiKey: string;
    appVersion: string;
    user: IHopprUserAnalyticsDetails;
    events: IEventRequest[];
}
export interface IEventRequest {
    eventKey: string;
    eventTime: Date;
    sessionId: string;
    parameters?: Record<string, any>;
}
export interface IHopprUserAnalyticsDetails {
    userId: string;
    ppId: string;
    hopprInternalUserId: string;
}
