/// <reference types="../../node_modules/@types/google-publisher-tag" />
export interface IGptEvent {
    event: googletag.events.Event;
    name: string;
    responseInfo: googletag.ResponseInformation | null;
    adPath: string;
    targeting: any;
}
