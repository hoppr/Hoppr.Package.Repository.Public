import { HopprInternalEvents } from '@hoppr/hoppr-analytics';
import { IHopprBannerAdProps } from '../../types';
import { IGptEvent } from '../interfaces/IGptEvent';
import { IHopprBannerAdState } from '../interfaces/IHopprBannerAdState';
import { IImaAnalytics } from '../interfaces/IImaAnalytics';
import { AdEventType } from '../interfaces/INativeEvent';
export declare class AnalyticsUtils {
    static getStandardProperties(): Record<string, any>;
    static getStandardBannerProperties(instanceUUID: string, userAgent: string | undefined, props: Readonly<IHopprBannerAdProps>, state: Readonly<IHopprBannerAdState>): Record<string, any>;
    static getDeepLinkRecord(instanceUUID: string, userAgent: string | undefined, props: Readonly<IHopprBannerAdProps>, state: Readonly<IHopprBannerAdState>, url: string, supported: boolean, clickThruLink?: string): Record<string, any>;
    static getDeepLinkErrorRecord(instanceUUID: string, userAgent: string | undefined, props: Readonly<IHopprBannerAdProps>, state: Readonly<IHopprBannerAdState>, error: string): Record<string, any>;
    static getImaRecord(imaAnalytics: IImaAnalytics): Record<string, any>;
    static getImaEvent(adEventType: AdEventType): HopprInternalEvents | null;
    static mapGptEventNameToHopprEvent(eventName: string): HopprInternalEvents | null;
    static getGptEventRecord(instanceUUID: string, userAgent: string | undefined, props: Readonly<IHopprBannerAdProps>, state: Readonly<IHopprBannerAdState>, gptEvent: IGptEvent): Record<string, any>;
}
