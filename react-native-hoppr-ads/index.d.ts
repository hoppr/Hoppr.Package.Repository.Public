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
};
declare type CounterViewProps = {
    style: ViewStyle;
};
export declare const NativeHopprVideoView: import("react-native").HostComponent<HopprVdeoProps> | (() => never);
export declare const CounterView: import("react-native").HostComponent<CounterViewProps> | (() => never);
