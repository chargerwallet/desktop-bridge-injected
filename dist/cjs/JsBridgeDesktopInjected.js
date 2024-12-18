"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsBridgeDesktopInjected = void 0;
const electron_1 = require("electron");
const cross_inpage_provider_core_1 = require("@chargerwallet/cross-inpage-provider-core");
class JsBridgeDesktopInjected extends cross_inpage_provider_core_1.JsBridgeBase {
    constructor(config) {
        super(config);
        this.sendAsString = true;
        this.isInjected = true;
        electron_1.ipcRenderer.on('JsBridgeDesktopHostToInjected', (event, data) => {
            // console.log('JsBridgeDesktopInjected', event, data);
            var _a, _b, _c;
            // window.$chargerwallet.jsBridge.receive
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
            (_c = (_b = (_a = window === null || window === void 0 ? void 0 : window.$chargerwallet) === null || _a === void 0 ? void 0 : _a.jsBridge) === null || _b === void 0 ? void 0 : _b.receive) === null || _c === void 0 ? void 0 : _c.call(_b, data);
        });
    }
    sendPayload(payload) {
        // send to renderer (webview host)
        electron_1.ipcRenderer.sendToHost(cross_inpage_provider_core_1.consts.JS_BRIDGE_MESSAGE_IPC_CHANNEL, payload);
        cross_inpage_provider_core_1.appDebugLogger.desktopInjected('ipcRenderer.sendToHost', cross_inpage_provider_core_1.consts.JS_BRIDGE_MESSAGE_IPC_CHANNEL, payload);
        // send to main
        // ipcRenderer.send(JS_BRIDGE_MESSAGE_IPC_CHANNEL, payloadStr);
    }
}
exports.JsBridgeDesktopInjected = JsBridgeDesktopInjected;
