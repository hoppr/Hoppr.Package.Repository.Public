import { NativeModules } from 'react-native';

// export * from './lib/ads/gam-banner-ad/GamBannerAd';
// export * from './lib/ads/gam-video-ad/GamVideoAd';
const {
  RNAdsGamSdk
} = NativeModules;

export { RNAdsGamSdk as default };
