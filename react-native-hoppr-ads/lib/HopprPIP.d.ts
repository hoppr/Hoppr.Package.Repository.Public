import React from 'react';
import { ViewProps } from 'react-native';
import { IHopprBannerAdProps } from '../types';
export interface IHopprPIPState {
    previousImageUrl: string;
    imageUrl: string;
}
export interface IHopprPIPProps extends ViewProps {
}
export declare class HopprPIP extends React.Component<IHopprPIPProps, IHopprPIPState> {
    private pipWidth;
    private pipHeight;
    private screenshotInterval;
    constructor(props: IHopprBannerAdProps | Readonly<IHopprBannerAdProps>);
    render(): JSX.Element;
    updateImageUrl(newImageUrl: string): void;
    componentWillUnmount(): void;
    clearScreenshotInterval(): void;
    startScreenshotInterval(): void;
}
