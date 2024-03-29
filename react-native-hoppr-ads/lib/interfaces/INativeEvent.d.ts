export interface INativeEvent {
    eventType: EventType;
    adEventType?: AdEventType | null;
    message?: string | null;
    errorMessage?: string | null;
    target?: number | null;
}
export declare enum EventType {
    AdEvent = "AdEvent",
    LogEvent = "LogEvent",
    AdErrorEvent = "AdErrorEvent"
}
export declare enum AdEventType {
    ALL_ADS_COMPLETED = "ALL_ADS_COMPLETED",
    AD_BREAK_FETCH_ERROR = "AD_BREAK_FETCH_ERROR",
    CLICKED = "CLICKED",
    COMPLETED = "COMPLETED",
    CUEPOINTS_CHANGED = "CUEPOINTS_CHANGED",
    CONTENT_PAUSE_REQUESTED = "CONTENT_PAUSE_REQUESTED",
    CONTENT_RESUME_REQUESTED = "CONTENT_RESUME_REQUESTED",
    FIRST_QUARTILE = "FIRST_QUARTILE",
    LOG = "LOG",
    AD_BREAK_READY = "AD_BREAK_READY",
    MIDPOINT = "MIDPOINT",
    PAUSED = "PAUSED",
    RESUMED = "RESUMED",
    SKIPPABLE_STATE_CHANGED = "SKIPPABLE_STATE_CHANGED",
    SKIPPED = "SKIPPED",
    STARTED = "STARTED",
    TAPPED = "TAPPED",
    ICON_TAPPED = "ICON_TAPPED",
    ICON_FALLBACK_IMAGE_CLOSED = "ICON_FALLBACK_IMAGE_CLOSED",
    THIRD_QUARTILE = "THIRD_QUARTILE",
    LOADED = "LOADED",
    AD_PROGRESS = "AD_PROGRESS",
    AD_BUFFERING = "AD_BUFFERING",
    AD_BREAK_STARTED = "AD_BREAK_STARTED",
    AD_BREAK_ENDED = "AD_BREAK_ENDED",
    AD_PERIOD_STARTED = "AD_PERIOD_STARTED",
    AD_PERIOD_ENDED = "AD_PERIOD_ENDED"
}
