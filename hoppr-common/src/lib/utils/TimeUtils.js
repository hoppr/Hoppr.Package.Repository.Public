"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeUtils = void 0;
class TimeUtils {
    static getDiffBetweenTwoDatesInMinutes(time1, time2) {
        const diff = time1 - time2;
        return TimeUtils.convertMsToMinutes(diff);
    }
    static convertMsToMinutes(milliseconds) {
        const seconds = TimeUtils.convertMsToSeconds(milliseconds);
        return TimeUtils.convertSecondsToMinutes(seconds);
    }
    static convertMsToSeconds(milliseconds) {
        return Math.floor(milliseconds / 1000);
    }
    static convertSecondsToMinutes(seconds) {
        return Math.floor(seconds / 60);
    }
}
exports.TimeUtils = TimeUtils;
//# sourceMappingURL=TimeUtils.js.map