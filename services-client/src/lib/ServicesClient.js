"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServicesClient = void 0;
const tslib_1 = require("tslib");
const axios_1 = require("axios");
const hopprSdkCommon_1 = require("@hoppr/hopprSdkCommon");
const defaultLogger = (0, hopprSdkCommon_1.getDefaultLogger)('HopprServicesClient');
const defaultServiceClientConfig = {
    endpoint: 'https://google.com',
};
/**
 * @internal
 */
class ServicesClient {
    constructor(config, logger) {
        this.baseURL = 'https://us-central1-hoppr-androidtv-dev.cloudfunctions.net/sdkapi';
        this.updateURL = `${this.baseURL}/update`;
        this.analyticsURL = `${this.baseURL}/analytics`;
        this._logger = logger;
        this._config = config;
        this._httpClient = axios_1.default;
    }
    static get(config, logger = defaultLogger) {
        return new ServicesClient(Object.assign(Object.assign({}, defaultServiceClientConfig), config), logger);
    }
    update(req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = {};
            try {
                const apiResponse = yield this._httpClient.get(this.updateURL, {
                    params: {
                        appid: req.appID,
                        clientid: req.clientid,
                    },
                });
                response.data = apiResponse.data;
            }
            catch (error) {
                response.error = {
                    message: error.message,
                    details: error,
                };
                console.error(error);
            }
            return response;
        });
    }
    postAnalytics(req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = {};
            try {
                const config = {
                    headers: {
                        'Content-Type': 'text/plain',
                    },
                };
                const apiResponse = yield this._httpClient.post(this.analyticsURL, JSON.stringify(req), config);
                response.data = apiResponse.data;
            }
            catch (error) {
                response.error = {
                    message: error.message,
                    details: error,
                };
                console.error(error);
            }
            return response;
        });
    }
    postBeaconAnalytics(req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const response = {};
            try {
                navigator.sendBeacon(this.analyticsURL, JSON.stringify(req));
            }
            catch (error) {
                response.error = {
                    message: error.message,
                    details: error,
                };
                console.error(error);
            }
            return response;
        });
    }
}
exports.ServicesClient = ServicesClient;
//# sourceMappingURL=ServicesClient.js.map