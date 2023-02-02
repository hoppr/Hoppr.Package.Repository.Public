"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HopprAnalytics = void 0;
const tslib_1 = require("tslib");
/* eslint-disable @typescript-eslint/ban-types */
const hoppr_common_1 = require("@hoppr/hoppr-common");
const AnalyticsEngineFactory_1 = require("./analytics/engine/AnalyticsEngineFactory");
const AnalyticsEvent_1 = require("./AnalyticsEvent");
const defaultLogger = (0, hoppr_common_1.getDefaultLogger)('HopprAnalytics');
const hopprAnalyticsDefaultConfig = {
    intervalBetweenRequestInMinutes: 1,
    sessionTimeoutInMinutes: 30,
    longSessionTimeoutInMinutes: 120,
    // type: AnalyticsEngineType.HOPPR,
    // endpoint: 'https://analytics.hoppr.com.au/submit',
    // maxPayloadSizeBytes: 200,
    // asyncBatchSize: 10,
    // debounceTimeMsec: 1000,
};
class HopprAnalytics {
    constructor(config, logger, analyticsRequest) {
        this.logEventHandler = (eventId, eventDetails) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!eventDetails) {
                eventDetails = {};
            }
            this.analyticsEngine.logEvent(eventId, eventDetails);
        });
        this.sendRemainingEvents = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.analyticsEngine.sendRemainingEvents();
        });
        this.sendRemainingEventsNative = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.analyticsEngine.sendRemainingEventsNative();
        });
        this.logCustomEvent = (eventId, eventDetails) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            var _b;
            if (!AnalyticsEvent_1.AnalyticsEvent.isValidEventName(eventId)) {
                throw new Error(`received a reserved event: ${eventId}`);
            }
            return (_b = HopprAnalytics.singletonObject) === null || _b === void 0 ? void 0 : _b.logEventHandler(eventId, eventDetails);
        });
        this.logHopprEvent = (hopprEvents, eventDetails) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            var _c;
            return (_c = HopprAnalytics.singletonObject) === null || _c === void 0 ? void 0 : _c.logEventHandler(hopprEvents.toString(), eventDetails);
        });
        this.logger = logger;
        this.config = config;
        this.analyticsRequest = analyticsRequest;
        this.analyticsEngine = AnalyticsEngineFactory_1.AnalyticsEngineFactory.create(this.config, this.logger, this.analyticsRequest);
    }
}
exports.HopprAnalytics = HopprAnalytics;
_a = HopprAnalytics;
HopprAnalytics.commandArray = [];
HopprAnalytics.isInitialized = false;
HopprAnalytics.init = (analyticsRequest, config, logger = defaultLogger) => {
    if (HopprAnalytics.singletonObject !== undefined) {
        return;
    }
    HopprAnalytics.singletonObject = new HopprAnalytics(config !== null && config !== void 0 ? config : hopprAnalyticsDefaultConfig, logger, analyticsRequest);
    HopprAnalytics.isInitialized = true;
    HopprAnalytics.commandArray.forEach((func) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        func(_a);
    }));
    HopprAnalytics.commandArray = [];
};
HopprAnalytics.sendBeacon = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    var _b;
    (_b = HopprAnalytics.singletonObject) === null || _b === void 0 ? void 0 : _b.sendRemainingEvents();
});
HopprAnalytics.sendBeaconNative = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    var _c;
    (_c = HopprAnalytics.singletonObject) === null || _c === void 0 ? void 0 : _c.sendRemainingEventsNative();
});
HopprAnalytics.logInternalEvent = (eventId, eventDetails) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    var _d;
    if (!HopprAnalytics.isInitialized) {
        HopprAnalytics.commandArray.push(function () {
            return HopprAnalytics.logInternalEvent(eventId, eventDetails);
        });
        return;
    }
    return (_d = HopprAnalytics.singletonObject) === null || _d === void 0 ? void 0 : _d.logEventHandler(eventId, eventDetails);
});
HopprAnalytics.logEvent = (eventId, eventDetails) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    var _e, _f;
    if (!HopprAnalytics.isInitialized) {
        HopprAnalytics.commandArray.push(function () {
            return HopprAnalytics.logEvent(eventId, eventDetails);
        });
        return;
    }
    const invalidParamsNames = AnalyticsEvent_1.AnalyticsEvent.getInvalidParamsName(eventDetails);
    if (invalidParamsNames.length > 0) {
        throw new Error(`received invalid params for $eventId: ${invalidParamsNames}`);
    }
    if (AnalyticsEvent_1.AnalyticsEvent.isValidHopprEvent(eventId)) {
        return (_e = HopprAnalytics.singletonObject) === null || _e === void 0 ? void 0 : _e.logHopprEvent(eventId, eventDetails);
    }
    else {
        return (_f = HopprAnalytics.singletonObject) === null || _f === void 0 ? void 0 : _f.logCustomEvent(eventId, eventDetails);
    }
});
//# sourceMappingURL=HopprAnalytics.js.map