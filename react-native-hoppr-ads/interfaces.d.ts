/// <reference types="../../node_modules/@types/google-publisher-tag" />
import { AdType } from '@hoppr/hoppr-common';
import { InteractiveBehavior, WindowMessageType } from './enums';
import { IHopprAdConfig } from './types';
export interface IAdSlot {
    adType: AdType;
    adSize: [number, number][];
    hopprAdUnit: string;
    gamAdUnit: string;
}
export interface HopprAdProviderState {
    adSlots: string;
    config: IHopprAdConfig;
    hopprInternalUserId: string | undefined;
}
export interface HopprBannerAdState {
    adSize: number[];
    isSelected: boolean;
}
export interface IGptEvent {
    event: googletag.events.Event;
    name: string;
    responseInfo: googletag.ResponseInformation | null;
    adPath: string;
    targeting: any;
}
export interface IWindowMessage {
    type: WindowMessageType;
    behavior?: InteractiveBehavior | undefined;
    url?: string | undefined;
    sizes?: number[] | undefined;
    gptEvent?: IGptEvent | undefined;
}
