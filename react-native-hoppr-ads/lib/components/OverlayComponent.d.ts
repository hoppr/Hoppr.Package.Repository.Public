import React from 'react';
import { ViewProps } from 'react-native';
import { VideoLoadOptions, VideoOptions } from '../../types';
import { IHopprAdProviderState } from '../interfaces/IHopprAdProviderState';
export interface IOverlayComponentState {
    loadVideo: boolean;
    playVideo: boolean;
    adTagUrl: string;
    ppid: string;
}
export interface IOverlayComponentProps extends ViewProps {
}
export declare class OverlayComponent extends React.Component<IOverlayComponentProps, IOverlayComponentState> {
    static contextType: React.Context<IHopprAdProviderState>;
    private typedContext;
    private matchingAdSlots;
    private videoComponentRef;
    private isVideoAdLoaded;
    private videoAdUnitId;
    private videoOptions?;
    constructor(props: IOverlayComponentProps | Readonly<IOverlayComponentProps>);
    render(): JSX.Element;
    private getVideoView;
    loadVideo(adUnitId: string, videoLoadOptons?: VideoLoadOptions): void;
    playVideo(adUnitId: string, videoOptions: VideoOptions): void;
    private hideVideo;
    private onFinishCallback;
    clear(): void;
    addBanner(): void;
    closeBanner(): void;
}
