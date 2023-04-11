export declare enum HopprEvents {
    ScreenView = "HopprScreenView",
    ContentPlay = "HopprContentPlay",
    ContentPause = "HopprContentPause",
    ContentResume = "HopprContentResume",
    ContentStop = "HopprContentStop",
    UpdateUserProperties = "HopprUpdateUserProperties"
}
export declare enum HopprInternalEvents {
    HopprInternalInit = "HopprInternalInit",
    HopprInternalGptImpressionView = "HopprInternalGptImpressionView",
    HopprInternalGptSlotOnLoad = "HopprInternalGptSlotOnLoad",
    HopprInternalGptRenderEnded = "HopprInternalGptRenderEnded",
    HopprInternalGptRequested = "HopprInternalGptRequested",
    HopprInternalGptResponseReceived = "HopprInternalGptResponseReceived",
    HopprInternalGptVisibilityChange = "HopprInternalGptVisibilityChange",
    HopprInternalDisplayBanner = "HopprInternalDisplayBanner",
    HopprInternalConstructorBanner = "HopprInternalConstructorBanner",
    HopprInternalImaPlay = "HopprInternalImaPlay",
    HopprInternalImaInit = "HopprInternalImaInit",
    HopprInternalImaManuallyClose = "HopprInternalImaManuallyClose",
    HopprInternalImaContentCompleted = "HopprInternalImaContentCompleted",
    HopprInternalImaClick = "HopprInternalImaClick",
    HopprInternalImaLoaded = "HopprInternalImaLoaded",
    HopprInternalImaStarted = "HopprInternalImaStarted",
    HopprInternalImaComplete = "HopprInternalImaComplete",
    HopprInternalImaAllAdsCompleted = "HopprInternalImaAllAdsCompleted",
    HopprInternalImaContentPauseRequested = "HopprInternalImaContentPauseRequested",
    HopprInternalImaContentResumeRequested = "HopprInternalImaContentResumeRequested",
    HopprInternalImaFirstQuartlie = "HopprInternalImaFirstQuartlie",
    HopprInternalImaMidPoint = "HopprInternalImaMidPoint",
    HopprInternalImaThirdQuartile = "HopprInternalImaThirdQuartile",
    HopprInternalImaImpression = "HopprInternalImaImpression",
    HopprInternalImaNonFatalError = "HopprInternalImaNonFatalError",
    HopprInternalImaError = "HopprInternalImaError",
    HopprInternalImaPaused = "HopprInternalImaPaused",
    HopprInternalImaResumed = "HopprInternalImaResumed",
    HopprInternalImaSkipped = "HopprInternalImaSkipped",
    HopprInternalImaSkippableStateChanged = "HopprInternalImaSkippableStateChanged",
    HopprInternalImaUserClose = "HopprInternalImaUserClose",
    HopprInternalImaAdsManagerLoaded = "HopprInternalImaAdsManagerLoaded",
    HopprInternalAdBreakFetchError = "HopprInternalAdBreakFetchError",
    HopprInternalImaUnknownError = "HopprInternalImaUnknownError",
    HopprInternalDeeplinkClicked = "HopprInternalDeeplinkClicked",
    HopprInternalDeeplinkError = "HopprInternalDeeplinkError"
}
export declare enum ScreenTypes {
    Home = "Home",
    LiveTVGuide = "LiveTVGuide",
    Series = "Series",
    Movies = "Movies",
    MovieSynopsis = "MovieSynopsis",
    SeriesSynopsis = "SeriesSynopsis",
    Apps = "Apps"
}
export declare enum StreamTypes {
    LiveTV = "LiveTV",
    VOD = "VOD",
    CatchUp = "CatchUp",
    TimeShift = "TimeShift"
}
export declare enum ContentTypes {
    TVShow = "TVShow",
    Movie = "Movie",
    LiveTV = "LiveTV"
}
export declare const predefinedParameterKeys: string[];
