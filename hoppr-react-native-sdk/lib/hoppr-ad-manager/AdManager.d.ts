import { HopprAdManagerConfig, IAppAdConfigManager, IHopprAdManager, IServicesClient, Logger } from '@hoppr/hopprSdkCommon';
export declare class AdManager implements IHopprAdManager {
    _logger: Logger;
    _config: HopprAdManagerConfig;
    _servicesClient: IServicesClient;
    _appAdConfigManager: IAppAdConfigManager;
    private static _instance;
    private constructor();
    private instantiateServicesClient;
    private instantiateAppAdConfigManager;
    static initialize: (config?: HopprAdManagerConfig, logger?: Logger) => Promise<void>;
    static getInstance: (logger?: Logger) => IHopprAdManager;
}
