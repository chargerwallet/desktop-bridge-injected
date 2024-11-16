import { JsBridgeBase } from '@chargerwallet/cross-inpage-provider-core';
import { IJsBridgeConfig, IJsBridgeMessagePayload } from '@chargerwallet/cross-inpage-provider-types';
declare class JsBridgeDesktopInjected extends JsBridgeBase {
    constructor(config: IJsBridgeConfig);
    sendAsString: boolean;
    isInjected: boolean;
    sendPayload(payload: IJsBridgeMessagePayload | string): void;
}
export { JsBridgeDesktopInjected };
