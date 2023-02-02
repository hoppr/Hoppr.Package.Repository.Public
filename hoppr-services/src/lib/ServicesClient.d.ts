import axios from 'axios';
import { AnalyticsResp, IAnalyticsRequest, IServicesClient, Logger, ServicesClientConfig, UpdateReq, UpdateResp } from '@hoppr/hoppr-common';
/**
 * @internal
 */
export declare class ServicesClient implements IServicesClient {
    _logger: Logger;
    _config: ServicesClientConfig;
    _httpClient: typeof axios;
    private baseURL;
    private updateURL;
    private analyticsURL;
    static get(config?: ServicesClientConfig, logger?: Logger): IServicesClient;
    private constructor();
    update(req: UpdateReq): Promise<UpdateResp>;
    postAnalytics(req: IAnalyticsRequest): Promise<AnalyticsResp>;
    postBeaconAnalytics(req: IAnalyticsRequest): Promise<AnalyticsResp>;
}
