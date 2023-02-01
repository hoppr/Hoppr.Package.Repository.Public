import { GamBannerAdUnitConfig, HopprBaseAdProps } from '@hoppr/hopprSdkCommon';
export interface GamBannerAdProps extends HopprBaseAdProps {
    adUnitConfig: GamBannerAdUnitConfig;
}
export declare function GamBannerAd(props: GamBannerAdProps): JSX.Element;
export default GamBannerAd;
