import { AsyncList } from 'microedge-rxstate/dist';
import { SkyGridColumnModel } from '@skyux/grids/modules/grid/grid-column.model';

export class GridStateModel {
  public columns: AsyncList<SkyGridColumnModel> = new AsyncList<SkyGridColumnModel>();
  public displayedColumns: AsyncList<SkyGridColumnModel> =
    new AsyncList<SkyGridColumnModel>();
}