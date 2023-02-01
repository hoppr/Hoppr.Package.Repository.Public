import { GamVideoAdUnitConfig, HopprBaseAdProps } from '@hoppr/hopprSdkCommon';
export interface GamVideoAdProps extends HopprBaseAdProps {
    adUnitConfig: GamVideoAdUnitConfig;
}
export declare function GamVideoAd(props: GamVideoAdProps): JSX.Element;
export default GamVideoAd;
