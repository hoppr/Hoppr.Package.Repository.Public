import { IAnalyticsRequest, Logger } from '@hoppr/hopprSdkCommon';
import { AnalyticsEngineConfig, IAnalyticsEngine } from './AnalyticsEngine';
export declare class AnalyticsEngineFactory {
    static create(config: AnalyticsEngineConfig, logger: Logger, analyticsRequest: IAnalyticsRequest): IAnalyticsEngine;
}
