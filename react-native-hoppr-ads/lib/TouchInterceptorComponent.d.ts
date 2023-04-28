import React from 'react';
import { ViewProps, GestureResponderEvent, PanResponderGestureState } from 'react-native';
export interface ITouchInterceptorComponentProps extends ViewProps {
}
export interface ITouchInterceptorComponentState {
}
declare class TouchInterceptorComponent extends React.Component<ITouchInterceptorComponentProps, ITouchInterceptorComponentState> {
    private panResponder;
    private holdedEvents;
    constructor(props: ITouchInterceptorComponentProps | Readonly<ITouchInterceptorComponentProps>);
    onStartShouldSetPanResponder: (gestureEvent: GestureResponderEvent, gestureState: PanResponderGestureState) => boolean;
    onStartShouldSetPanResponderCapture: (gestureEvent: GestureResponderEvent, gestureState: PanResponderGestureState) => boolean;
    simulateClick: (gestureEvent: GestureResponderEvent) => void;
    onMoveShouldSetPanResponder: (gestureEvent: GestureResponderEvent, gestureState: PanResponderGestureState) => boolean;
    onMoveShouldSetPanResponderCapture: (gestureEvent: GestureResponderEvent, gestureState: PanResponderGestureState) => boolean;
    onPanResponderGrant: (gestureEvent: GestureResponderEvent, gestureState: PanResponderGestureState) => boolean;
    onPanResponderMove: (gestureEvent: GestureResponderEvent, gestureState: PanResponderGestureState) => boolean;
    onPanResponderTerminationRequest: (gestureEvent: GestureResponderEvent, gestureState: PanResponderGestureState) => boolean;
    onPanResponderRelease: (gestureEvent: GestureResponderEvent, gestureState: PanResponderGestureState) => boolean;
    onPanResponderTerminate: (gestureEvent: GestureResponderEvent, gestureState: PanResponderGestureState) => boolean;
    onShouldBlockNativeResponder: (gestureEvent: GestureResponderEvent, gestureState: PanResponderGestureState) => boolean;
    render(): JSX.Element;
}
export default TouchInterceptorComponent;
