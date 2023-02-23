import React from 'react';
import { HopprAdProviderState, HopprBannerAdState } from '../interfaces';
import { HopprBannerAdProps, IHopprBannerAd } from '../types';
declare global {
    interface Window {
        Android: Android;
        ReactNativeWebView: any;
    }
}
export declare class HopprBannerAd extends React.Component<HopprBannerAdProps, HopprBannerAdState> implements IHopprBannerAd {
    static contextType: React.Context<HopprAdProviderState>;
    private interactivity;
    private typedContext;
    private matchingAdSlots;
    private instanceUUID;
    private userAgent;
    private webView;
    private android;
    constructor(props: HopprBannerAdProps | Readonly<HopprBannerAdProps>);
    render(): JSX.Element;
    setPressOk(): void;
    setIsSelected(value: boolean): void;
    private getWebView;
    private onShouldStartLoadWithRequest;
    private openExternalLink;
    private getStringifiedSizes;
    private getStringifiedTargetProperties;
    private generateTemplate;
    private isAppleTV;
    private setAdSize;
    private onMessage;
    private triggerInteractivity;
    private injectJs;
    private logDeeplinkError;
    private logDeeplinkClicked;
    private logGptEvent;
}
interface AdEventParams {
    CreativeId: string;
    CampaignId: string;
}
interface PropertiesData {
    ppid: string[];
    apiKey: string[];
    appId: string[];
    baseApiUrl: string[];
    appVersion: string[];
}
declare class Android {
    private adEventParams;
    private propertiesData;
    setAdEventParams(adEventParams: AdEventParams): void;
    setPropertiesData(propertiesData: PropertiesData): void;
    getAdEventParams(): string;
    getPropertiesData(): string;
}
export {};
