import React from 'react';
import { ViewProps } from 'react-native';
import { INativeEvent } from '../interfaces/INativeEvent';
export interface IVideoComponentProps extends ViewProps {
    onAllAdsCompleted: Function;
    onError: Function;
    onAdLoaded: Function;
    adTag: string;
    scaleMode: string;
    useSoftwareDecoder: boolean;
    ppid: string;
    videoAdUnitId: string;
}
export interface IVideoComponentState {
    play: boolean;
}
export declare class VideoComponent extends React.Component<IVideoComponentProps, IVideoComponentState> {
    constructor(props: IVideoComponentProps | Readonly<IVideoComponentProps>);
    render(): JSX.Element;
    play(): void;
    _onNativeEventReceived(event: any): void;
    handleEvent(nativeEvent: INativeEvent): void;
    private sendAnalyticsEvent;
    private handleAdErrorEvent;
    private handleAdEvent;
    componentDidMount(): void;
    componentWillUnmount(): void;
}
