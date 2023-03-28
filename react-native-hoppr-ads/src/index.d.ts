import { ViewStyle } from 'react-native';
export * from './lib/HopprAdProvider';
export * from './lib/HopprBannerAd';
export * from './lib/HopprAnalyticsLogger';
export { HopprEvents, ContentTypes, ScreenTypes, StreamTypes, } from '@hoppr/hoppr-analytics';
type HopprProps = {
    color: string;
    style: ViewStyle;
};
export declare const HopprView: import("react-native").HostComponent<HopprProps>;
