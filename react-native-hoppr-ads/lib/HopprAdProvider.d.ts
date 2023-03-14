import 'react-native-get-random-values';
import React from 'react';
import { IHopprAdProviderProps } from '../types';
import { IHopprAdProviderState } from './interfaces/IHopprAdProviderState';
export declare class HopprAdProvider extends React.Component<IHopprAdProviderProps, IHopprAdProviderState> {
    private isInternalUserIdReady;
    private isAdSlotsReady;
    private adSlots;
    private hopprInternalUserId;
    private appStateSubscription?;
    constructor(props: IHopprAdProviderProps | Readonly<IHopprAdProviderProps>);
    render(): JSX.Element;
    componentDidMount(): void;
    componentWillUnmount(): void;
    private setAdSlots;
    private setHopprInternalUserId;
    private tryUpdateState;
    private initHoppr;
    private initAnalytics;
}
