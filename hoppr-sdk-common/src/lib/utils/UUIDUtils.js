"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UUIDUtils = void 0;
const uuid_1 = require("uuid");
class UUIDUtils {
    static getID() {
        // self.crypto.randomUUID() // not available on Tizen samsung tv simulator
        return (0, uuid_1.v4)();
    }
}
exports.UUIDUtils = UUIDUtils;
//# sourceMappingURL=UUIDUtils.js.map