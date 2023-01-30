import { IAppAdConfigManager } from './IAdConfigManager';
import { IServicesClient } from './IServicesClient';
import { Logger } from './logger/Logger';
export interface HopprAdManagerConfig {
    operatorId: string;
    appId: string;
    apiKey?: string;
}
export interface IHopprAdManager {
    _logger: Logger;
    _config: HopprAdManagerConfig;
    _servicesClient: IServicesClient;
    _appAdConfigManager: IAppAdConfigManager;
}
