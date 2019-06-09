import { PeralatanSisiUdara } from '../../models/peralatan-sisi-udara.model';

export interface PeralatanSisiUdaraState {
  peralatan_sisi_udara : PeralatanSisiUdara[] | null;
  loading: boolean;
  error: any;
}

export const PeralatanSisiUdaraInitialState: PeralatanSisiUdaraState = {
  peralatan_sisi_udara: null,
  loading: false,
  error: null
};
