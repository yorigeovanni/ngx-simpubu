import { SisiUdara } from './../models/sisi-udara.model';

export interface SisiUdaraState {
    sisiUdara : SisiUdara[] | null;
    isLoading: boolean;
    error: any;
}

export const sisiUdaraInitialState: SisiUdaraState = {
    sisiUdara: null,
    isLoading: true,
    error: null
};
