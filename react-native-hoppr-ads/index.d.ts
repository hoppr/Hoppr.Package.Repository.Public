import { ElementRef, ForwardedRef } from 'react';
import { ViewStyle } from 'react-native';
export * from './lib/HopprAdProvider';
export * from './lib/components/HopprBannerAd';
export * from './lib/HopprAnalyticsLogger';
export { HopprEvents, ContentTypes, ScreenTypes, StreamTypes, } from '@hoppr/hoppr-analytics';
declare type HopprVdeoProps = {
    style: ViewStyle;
    onChange: Function;
    play: boolean;
    adTag: string;
    scaleMode: string;
    ppid: string;
    properties: VideoProperties;
    ref?: ForwardedRef<ElementRef<typeof NativeHopprVideoView>>;
};
export interface VideoProperties {
    adTag: string;
    scaleMode: string;
    ppid: string;
}
export declare const NativeHopprVideoView: import("react-native").HostComponent<HopprVdeoProps> | (() => never);
