import 'react-native-get-random-values';
import React from 'react';
import { HopprAdProviderState } from '../interfaces';
import { HopprAdProviderProps } from '../types';
export declare class HopprAdProvider extends React.Component<HopprAdProviderProps, HopprAdProviderState> {
    private isInternalUserIdReady;
    private isAdSlotsReady;
    private adSlots;
    private hopprInternalUserId;
    constructor(props: HopprAdProviderProps | Readonly<HopprAdProviderProps>);
    render(): JSX.Element;
    componentWillUnmount(): void;
    private setAdSlots;
    private setHopprInternalUserId;
    private tryUpdateState;
    private initHoppr;
    private initAnalytics;
}
