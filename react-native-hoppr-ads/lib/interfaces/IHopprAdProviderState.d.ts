import { IHopprAdConfig } from '../../types';
export interface IHopprAdProviderState {
    adSlots: string;
    config: IHopprAdConfig;
    hopprInternalUserId: string | undefined;
}
