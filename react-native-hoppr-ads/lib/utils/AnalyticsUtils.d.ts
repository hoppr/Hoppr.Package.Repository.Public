import { HopprInternalEvents } from '@hoppr/hoppr-analytics';
import { HopprBannerAdState, IGptEvent } from '../../interfaces';
import { HopprBannerAdProps } from '../../types';
export declare class AnalyticsUtils {
    static getStandardProperties(): Record<string, any>;
    static getStandardBannerProperties(instanceUUID: string, props: Readonly<HopprBannerAdProps>, state: Readonly<HopprBannerAdState>): Record<string, any>;
    static getDeepLinkRecord(instanceUUID: string, props: Readonly<HopprBannerAdProps>, state: Readonly<HopprBannerAdState>, url: string, supported: boolean): Record<string, any>;
    static getDeepLinkErrorRecord(instanceUUID: string, props: Readonly<HopprBannerAdProps>, state: Readonly<HopprBannerAdState>, error: string): Record<string, any>;
    static mapGptEventNameToHopprEvent(eventName: string): HopprInternalEvents | null;
    static getGptEventRecord(instanceUUID: string, props: Readonly<HopprBannerAdProps>, state: Readonly<HopprBannerAdState>, gptEvent: IGptEvent): Record<string, any>;
}
