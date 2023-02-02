"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsEngineFactory = void 0;
const HopprAnalyticsEngine_1 = require("./HopprAnalyticsEngine");
class AnalyticsEngineFactory {
    static create(config, logger, analyticsRequest) {
        if (config) {
            return new HopprAnalyticsEngine_1.HopprAnalyticsEngine(config, logger, analyticsRequest);
        }
        throw new Error('Failure in instantiating Analytics Engine');
    }
}
exports.AnalyticsEngineFactory = AnalyticsEngineFactory;
//# sourceMappingURL=AnalyticsEngineFactory.js.map