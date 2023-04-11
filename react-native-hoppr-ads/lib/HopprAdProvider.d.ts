import 'react-native-get-random-values';
import React, { RefObject } from 'react';
import { IHopprAdProviderProps, VideoLoadOptions, VideoOptions } from '../types';
import { IHopprAdProviderState } from './interfaces/IHopprAdProviderState';
import { OverlayComponent } from './components/OverlayComponent';
export declare class HopprAdProvider extends React.Component<IHopprAdProviderProps, IHopprAdProviderState> {
    private isInternalUserIdReady;
    private isAdSlotsReady;
    private adSlots;
    private hopprInternalUserId;
    private appStateSubscription?;
    private pipComponentRef;
    static overlayComponent: RefObject<OverlayComponent> | null;
    constructor(props: IHopprAdProviderProps | Readonly<IHopprAdProviderProps>);
    render(): JSX.Element;
    private getPIPComponent;
    componentDidMount(): void;
    componentWillUnmount(): void;
    private setAdSlots;
    private setHopprInternalUserId;
    private tryUpdateState;
    private initHoppr;
    private initAnalytics;
    static loadVideo(adUnitId: string, videoLoadOptons?: VideoLoadOptions): void;
    static playVideo(adUnitId: string, videoOptions: VideoOptions): void;
}
