import { InteractiveBehavior } from '../enums/InteractiveBehaviorEnum';
import { WindowMessageType } from '../enums/WindowMessageTypeEnum';
import { IGptEvent } from './IGptEvent';
export interface IWindowMessage {
    type: WindowMessageType;
    behavior?: InteractiveBehavior | undefined;
    url?: string | undefined;
    clickThruLink?: string | undefined;
    sizes?: number[] | undefined;
    gptEvent?: IGptEvent | undefined;
    userAgent?: string | undefined;
    message?: string | undefined;
}
