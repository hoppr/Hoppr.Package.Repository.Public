"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.predefinedParameterKeys = exports.ContentTypes = exports.StreamTypes = exports.ScreenTypes = exports.HopprInternalEvents = exports.HopprEvents = void 0;
//Make sure all added event start with Hoppr
var HopprEvents;
(function (HopprEvents) {
    HopprEvents["ScreenView"] = "HopprScreenView";
    HopprEvents["ContentPlay"] = "HopprContentPlay";
    HopprEvents["ContentPause"] = "HopprContentPause";
    HopprEvents["ContentResume"] = "HopprContentResume";
    HopprEvents["ContentStop"] = "HopprContentStop";
    HopprEvents["UpdateUserProperties"] = "HopprUpdateUserProperties";
})(HopprEvents = exports.HopprEvents || (exports.HopprEvents = {}));
//Make sure all added event start with HopprInternal
var HopprInternalEvents;
(function (HopprInternalEvents) {
    HopprInternalEvents["HopprInternalInit"] = "HopprInternalInit";
    HopprInternalEvents["HopprInternalGptImpressionView"] = "HopprInternalGptImpressionView";
    HopprInternalEvents["HopprInternalGptSlotOnLoad"] = "HopprInternalGptSlotOnLoad";
    HopprInternalEvents["HopprInternalGptRenderEnded"] = "HopprInternalGptRenderEnded";
    HopprInternalEvents["HopprInternalGptRequested"] = "HopprInternalGptRequested";
    HopprInternalEvents["HopprInternalGptResponseReceived"] = "HopprInternalGptResponseReceived";
    HopprInternalEvents["HopprInternalGptVisibilityChange"] = "HopprInternalGptVisibilityChange";
    HopprInternalEvents["HopprInternalDisplayBanner"] = "HopprInternalDisplayBanner";
    HopprInternalEvents["HopprInternalConstructorBanner"] = "HopprInternalConstructorBanner";
    HopprInternalEvents["HopprInternalImaPlay"] = "HopprInternalImaPlay";
    HopprInternalEvents["HopprInternalImaInit"] = "HopprInternalImaInit";
    HopprInternalEvents["HopprInternalImaManuallyClose"] = "HopprInternalImaManuallyClose";
    HopprInternalEvents["HopprInternalImaContentCompleted"] = "HopprInternalImaContentCompleted";
    HopprInternalEvents["HopprInternalImaClick"] = "HopprInternalImaClick";
    HopprInternalEvents["HopprInternalImaLoaded"] = "HopprInternalImaLoaded";
    HopprInternalEvents["HopprInternalImaStarted"] = "HopprInternalImaStarted";
    HopprInternalEvents["HopprInternalImaComplete"] = "HopprInternalImaComplete";
    HopprInternalEvents["HopprInternalImaAllAdsCompleted"] = "HopprInternalImaAllAdsCompleted";
    HopprInternalEvents["HopprInternalImaContentPauseRequested"] = "HopprInternalImaContentPauseRequested";
    HopprInternalEvents["HopprInternalImaContentResumeRequested"] = "HopprInternalImaContentResumeRequested";
    HopprInternalEvents["HopprInternalImaFirstQuartlie"] = "HopprInternalImaFirstQuartlie";
    HopprInternalEvents["HopprInternalImaMidPoint"] = "HopprInternalImaMidPoint";
    HopprInternalEvents["HopprInternalImaThirdQuartile"] = "HopprInternalImaThirdQuartile";
    HopprInternalEvents["HopprInternalImaImpression"] = "HopprInternalImaImpression";
    HopprInternalEvents["HopprInternalImaNonFatalError"] = "HopprInternalImaNonFatalError";
    HopprInternalEvents["HopprInternalImaError"] = "HopprInternalImaError";
    HopprInternalEvents["HopprInternalImaPaused"] = "HopprInternalImaPaused";
    HopprInternalEvents["HopprInternalImaResumed"] = "HopprInternalImaResumed";
    HopprInternalEvents["HopprInternalImaSkipped"] = "HopprInternalImaSkipped";
    HopprInternalEvents["HopprInternalImaSkippableStateChanged"] = "HopprInternalImaSkippableStateChanged";
    HopprInternalEvents["HopprInternalImaUserClose"] = "HopprInternalImaUserClose";
    HopprInternalEvents["HopprInternalImaAdsManagerLoaded"] = "HopprInternalImaAdsManagerLoaded";
    HopprInternalEvents["HopprInternalImaUnknownError"] = "HopprInternalImaUnknownError";
    HopprInternalEvents["HopprInternalDeeplinkClicked"] = "HopprInternalDeeplinkClicked";
    HopprInternalEvents["HopprInternalDeeplinkError"] = "HopprInternalDeeplinkError";
})(HopprInternalEvents = exports.HopprInternalEvents || (exports.HopprInternalEvents = {}));
var ScreenTypes;
(function (ScreenTypes) {
    ScreenTypes["Home"] = "Home";
    ScreenTypes["LiveTVGuide"] = "LiveTVGuide";
    ScreenTypes["Series"] = "Series";
    ScreenTypes["Movies"] = "Movies";
    ScreenTypes["MovieSynopsis"] = "MovieSynopsis";
    ScreenTypes["SeriesSynopsis"] = "SeriesSynopsis";
    ScreenTypes["Apps"] = "Apps";
})(ScreenTypes = exports.ScreenTypes || (exports.ScreenTypes = {}));
var StreamTypes;
(function (StreamTypes) {
    StreamTypes["LiveTV"] = "LiveTV";
    StreamTypes["VOD"] = "VOD";
    StreamTypes["CatchUp"] = "CatchUp";
    StreamTypes["TimeShift"] = "TimeShift";
})(StreamTypes = exports.StreamTypes || (exports.StreamTypes = {}));
var ContentTypes;
(function (ContentTypes) {
    ContentTypes["TVShow"] = "TVShow";
    ContentTypes["Movie"] = "Movie";
    ContentTypes["LiveTV"] = "LiveTV";
})(ContentTypes = exports.ContentTypes || (exports.ContentTypes = {}));
exports.predefinedParameterKeys = [
    'hopprIsLoggedIn',
    'hopprIsPaidUser',
    'hopprScreenName',
    'hopprContentType',
    'hopprContentTitle',
    'hopprContentLanguage',
    'hopprContentSeason',
    'hopprContentEpisode',
    'hopprContentGenre',
    'hopprContentSubGenre',
    'hopprContentNotes',
    'hopprContentDuration',
    'hopprContentRating',
    'hopprStreamId',
];
//# sourceMappingURL=HopprEvents.js.map