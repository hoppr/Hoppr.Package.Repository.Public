import { AdType } from '@hoppr/hopprSdkCommon';
export interface IAdSlot {
    adType: AdType;
    adSize: [number, number][];
    hopprAdUnit: string;
    gamAdUnit: string;
}
export interface IHopprAdConfig {
    appId: string;
    apiKey: string;
    userId: string;
}
