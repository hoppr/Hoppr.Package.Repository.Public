"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsEvent = void 0;
const __1 = require("..");
const HopprEvents_1 = require("./analytics/HopprEvents");
/**
 * @internal
 */
class AnalyticsEvent {
    constructor(config) {
        this.config = config;
    }
    static isValidEventName(eventId) {
        if (eventId.toString().toLowerCase().startsWith('hoppr')
        // ||HopprEventsObj[eventId.toUpperCase()] !== undefined
        ) {
            return false;
        }
        return true;
    }
    static isValidHopprEvent(eventId, hopprEvents) {
        if (hopprEvents) {
            return hopprEvents.includes(eventId);
        }
        else {
            return Object.keys(__1.HopprEvents).includes(eventId);
        }
    }
    static getInvalidParamsName(eventDetails) {
        let hopprSpecificParam = [];
        if (eventDetails) {
            hopprSpecificParam = Object.keys(eventDetails).filter((key) => key.toLowerCase().startsWith('hoppr') &&
                HopprEvents_1.predefinedParameterKeys.indexOf(key) == -1);
        }
        return hopprSpecificParam;
    }
}
exports.AnalyticsEvent = AnalyticsEvent;
//# sourceMappingURL=AnalyticsEvent.js.map