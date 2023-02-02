import { IAnalyticsRequest, Logger } from '@hoppr/hoppr-common';
import { AnalyticsEngineConfig, IAnalyticsEngine } from './AnalyticsEngine';
export declare class AnalyticsEngineFactory {
    static create(config: AnalyticsEngineConfig, logger: Logger, analyticsRequest: IAnalyticsRequest): IAnalyticsEngine;
}
