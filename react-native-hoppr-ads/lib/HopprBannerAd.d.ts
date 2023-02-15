import React from 'react';
import { HopprAdProviderState, HopprBannerAdState, IAdSlot, IWindowMessage } from '../interfaces';
import { HopprBannerAdProps, IHopprBannerAd } from '../types';
export declare class HopprBannerAd extends React.Component<HopprBannerAdProps, HopprBannerAdState> implements IHopprBannerAd {
    static contextType: React.Context<HopprAdProviderState>;
    interactivity: IWindowMessage | undefined;
    typedContext: HopprAdProviderState | undefined;
    matchingAdSlots: IAdSlot[] | undefined;
    instanceUUID: string;
    private webView;
    constructor(props: HopprBannerAdProps | Readonly<HopprBannerAdProps>);
    render(): JSX.Element;
    setPressOk(): void;
    private getStringifiedSizes;
    private getStringifiedTargetProperties;
    private generateTemplate;
    private isAppleTV;
    private setAdSize;
    private onMessage;
    private triggerInteractivity;
    private postMessageTest;
    private logDeeplinkError;
    private logDeeplinkClicked;
    private logGptEvent;
}
