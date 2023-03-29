import { IAdParams } from '../interfaces/IAdParams';
import { IAppParams } from '../interfaces/IAppParams';
export declare class AdProperties {
    private adEventParams;
    private propertiesData;
    setAdEventParams(adEventParams: IAdParams): void;
    setPropertiesData(propertiesData: IAppParams): void;
    getAdEventParams(): string;
    getPropertiesData(): string;
}
