import { ContentTypes, HopprEvents, ScreenTypes, StreamTypes } from '@hoppr/hoppr-analytics';
export declare enum WindowMessageType {
    InitializeInteractivity = "InitializeInteractivity",
    TriggerInteractivity = "TriggerInteractivity",
    SetAdSizes = "SetAdSizes",
    GptEvent = "GptEvent"
}
export declare enum InteractiveBehavior {
    Deeplink = "Deeplink"
}
export declare const HopprEvent: typeof HopprEvents;
export declare const ScreenType: typeof ScreenTypes;
export declare const ContentType: typeof ContentTypes;
export declare const StreamType: typeof StreamTypes;
