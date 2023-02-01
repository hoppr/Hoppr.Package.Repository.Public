export interface IRNHopprSdk {
    createBannerAd(name: string): Promise<void>;
    createBannerAdSync(name: string): void;
}
export declare const RNHopprSdkModule: IRNHopprSdk;
