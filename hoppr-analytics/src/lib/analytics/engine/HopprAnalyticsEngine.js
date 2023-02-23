"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HopprAnalyticsEngine = void 0;
const tslib_1 = require("tslib");
const hoppr_common_1 = require("@hoppr/hoppr-common");
const hoppr_services_1 = require("@hoppr/hoppr-services");
const HopprEvents_1 = require("../HopprEvents");
class HopprAnalyticsEngine {
    constructor(config, logger, analyticsRequest) {
        this.events = [];
        this.previousEventDate = Date.now();
        this.previousEventType = '';
        this.previousSessionId = hoppr_common_1.UUIDUtils.getID();
        this.sendRemainingEvents = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('sendRemainingEvents');
            this.submitBeacon();
        });
        this.sendRemainingEventsNative = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('sendRemainingEventsNative');
            this.submitHttpPayload();
        });
        this.logger = logger;
        this.config = config;
        this.analyticsRequest = analyticsRequest;
        this.setupAsyncSubmission();
    }
    submitHttpPayload() {
        // TODO add keepalive flag to http request?
        if (this.events.length > 0) {
            this.analyticsRequest.events = this.events;
            // TODO split payload if too big
            // TODO store in local storage and check if anthing in there
            // console.log('submitHttpPayload', JSON.stringify(this.analyticsRequest));
            hoppr_services_1.ServicesClient.get()
                .postAnalytics(this.analyticsRequest)
                .then((value) => {
                // console.log('submitHttpPayload finish', JSON.stringify(value));
                if (!value.error) {
                    this.events = [];
                }
            });
        }
    }
    submitBeacon() {
        if (this.events.length > 0) {
            this.analyticsRequest.events = this.events;
            hoppr_services_1.ServicesClient.get()
                .postBeaconAnalytics(this.analyticsRequest)
                .then((value) => {
                if (!value.error) {
                    this.events = [];
                }
            });
        }
    }
    setupAsyncSubmission() {
        setInterval(() => {
            this.submitHttpPayload();
        }, this.config.intervalBetweenRequestInMinutes * 60000);
        // }, 15000);
    }
    asyncSubmission(eventKey, parameters) {
        let sessionId = this.previousSessionId;
        let resetWindow = this.config.sessionTimeoutInMinutes;
        // TODO improve session logic
        // If the previous event was ContentPlay or ContentResume we extend the window to 120 minutes
        if (this.previousEventType == HopprEvents_1.HopprEvents.ContentPlay ||
            this.previousEventType == HopprEvents_1.HopprEvents.ContentResume) {
            resetWindow = this.config.longSessionTimeoutInMinutes;
        }
        // If no event received within the last resetWindow in minutes -> we reset the sessionId
        if (hoppr_common_1.TimeUtils.getDiffBetweenTwoDatesInMinutes(Date.now(), this.previousEventDate) >= resetWindow) {
            sessionId = hoppr_common_1.UUIDUtils.getID();
        }
        const eventRequest = {
            eventKey: eventKey,
            eventTime: new Date(),
            sessionId: sessionId,
            parameters: parameters,
        };
        this.events.push(eventRequest);
        this.previousEventDate = Date.now();
        this.previousEventType = eventRequest.eventKey;
    }
    logEvent(eventKey, eventData) {
        // console.log('logEvent', eventKey, JSON.stringify(eventData));
        this.asyncSubmission(eventKey, eventData);
    }
}
exports.HopprAnalyticsEngine = HopprAnalyticsEngine;
//# sourceMappingURL=HopprAnalyticsEngine.js.map