import { ColorValue, ViewProps } from 'react-native';
export interface IHopprBannerAdProps extends ViewProps {
    /**
     * The Hoppr unit ID for the banner.
     */
    adUnitId: string;
    /**
     * The sizes of the banner
     */
    adUnitSizes?: number[][] | undefined;
    /**
     * Target properties
     */
    targetProperties?: Record<string, string | number | boolean | string[]> | undefined;
    /**
     * Border color when the banner is in a selected state
     */
    selectedBorderColor?: ColorValue | undefined;
    /**
     * Border with when the banner is in a selected state
     */
    selectedBorderWidth?: number | undefined;
}
export interface IHopprAdProviderProps extends ViewProps {
    /**
     * Hoppr configuration
     */
    config: IHopprAdConfig;
}
export interface IHopprAdConfig {
    /**
     * Hoppr APP ID
     */
    appId: string;
    /**
     * Hoppr API key
     */
    apiKey: string;
    /**
     * A unique user ID
     */
    userId: string;
}
export interface IHopprBannerAd {
    /**
     * To use when the user press the OK|ENTER button of the remote.
     * Will trigger the interactive action of the AD if any.
     */
    setPressOk: () => void;
    /**
     * To use when the user press is navigating to the AD
     */
    setIsSelected: (value: boolean) => void;
}
