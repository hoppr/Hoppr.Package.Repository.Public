"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.URLUtils = void 0;
class URLUtils {
    static appendParameters(url, userId, targeting) {
        const reqUrl = new URL(url);
        const previousCustParams = reqUrl.searchParams.get('cust_params');
        let newCustParams = '';
        reqUrl.searchParams.append('ppid', userId);
        reqUrl.searchParams.delete('cust_params');
        if (previousCustParams)
            newCustParams = previousCustParams;
        if (targeting) {
            newCustParams = newCustParams + '&';
            for (const [key, value] of Object.entries(targeting)) {
                newCustParams = newCustParams + key + '=' + value + '&';
            }
            newCustParams = newCustParams.slice(0, -1);
        }
        if (newCustParams) {
            reqUrl.searchParams.append('cust_params', newCustParams);
        }
        return reqUrl.href;
    }
}
exports.URLUtils = URLUtils;
//# sourceMappingURL=URLUtils.js.map