import React from 'react';
import type { ViewProps } from 'react-native';
import { AdEventType, INativeEvent } from './interfaces/INativeEvent';
export interface IHopprVideoViewProps extends ViewProps {
    onAllAdsCompleted: Function;
    onError: Function;
    onAdLoaded: Function;
    adTag: string;
    scaleMode: string;
}
export interface IHopprVideoViewState {
    play: boolean;
}
export declare class HopprVideoView extends React.Component<IHopprVideoViewProps, IHopprVideoViewState> {
    constructor(props: IHopprVideoViewProps | Readonly<IHopprVideoViewProps>);
    render(): JSX.Element;
    play(): void;
    _onNativeEventReceived(event: any): void;
    handleEvent(nativeEvent: INativeEvent): void;
    handleAdEvent(adEventType: AdEventType): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
}
