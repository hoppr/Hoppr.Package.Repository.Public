import React from 'react';
import { IHopprAdConfig } from '../interfaces';
declare const HopprAdContext: React.Context<{
    adSlots: string;
    config: IHopprAdConfig;
    hopprInternalUserId?: string | undefined;
}>;
export default HopprAdContext;
