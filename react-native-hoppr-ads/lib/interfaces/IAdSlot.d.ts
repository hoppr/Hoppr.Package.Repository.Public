import { AdType } from '@hoppr/hoppr-common';
export interface IAdSlot {
    adType: AdType;
    adSize: [number, number][];
    hopprAdUnit: string;
    gamAdUnit: string;
}
