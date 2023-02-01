import { IHopprAdManager } from '@hoppr/hopprSdkCommon';
import React from 'react';
export interface HopprAdManagerProps {
    children?: React.ReactNode;
    operatorId: string;
    appId: string;
    apiKey?: string;
}
export interface OperatorContextData {
    operatorId: string;
    appId: string;
    adManager?: IHopprAdManager;
}
export declare const OperatorContext: React.Context<OperatorContextData>;
export declare function HopprAdManager(props: HopprAdManagerProps): JSX.Element;
export default HopprAdManager;
