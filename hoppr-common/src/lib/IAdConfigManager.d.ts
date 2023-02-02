import { IServicesClient } from './IServicesClient';
import { Logger } from './logger/Logger';
export declare type AdUnitSize = [number, number];
export declare enum AdUnitType {
    UNDEFINED = 0,
    GAM_BANNER_AD = 1,
    GAM_VIDEO_AD = 2
}
export interface GamBannerAdUnitConfig {
    adUnitType: AdUnitType.GAM_BANNER_AD;
    adUnitId: string;
    adUnitSizes: AdUnitSize[] | AdUnitSize;
    adParameters?: Record<string, string>;
}
export interface GamVideoAdUnitConfig {
    adUnitType: AdUnitType.GAM_VIDEO_AD;
    adUnitId: string;
    adParameters?: Record<string, string>;
}
export declare type AdUnitConfig = GamBannerAdUnitConfig | GamVideoAdUnitConfig;
export declare type AppAdTag = string;
export interface AppAdConfig {
    ads: Record<AppAdTag, AdUnitConfig>;
}
export interface AppAdConfigManagerConfig {
    operatorId: string;
    appId: string;
}
export interface IAppAdConfigManager {
    _logger: Logger;
    _config: AppAdConfigManagerConfig;
    _servicesClient: IServicesClient;
    _appAdConfig: AppAdConfig;
    updateAppAdConfig(): Promise<void>;
    getAppAdTagConfig(tag: string): AdUnitConfig | undefined;
}
