import React from 'react';
import { ViewProps } from 'react-native';
export interface IPIPComponentState {
    previousImageUrl: string;
    imageUrl: string;
}
export interface IPIPComponentProps extends ViewProps {
}
export declare class PIPComponent extends React.Component<IPIPComponentProps, IPIPComponentState> {
    private pipWidth;
    private pipHeight;
    private screenshotInterval;
    private screenRatio;
    constructor(props: IPIPComponentProps | Readonly<IPIPComponentProps>);
    render(): JSX.Element;
    updateImageUrl(newImageUrl: string): void;
    componentWillUnmount(): void;
    clearScreenshotInterval(): void;
    startScreenshotInterval(): void;
}
