import { action, makeAutoObservable, observable } from 'mobx';
import { IGif } from '@giphy/js-types';

import { toaster } from '../../../utils';
import { fetchGifs } from '../../api-requests';
import { GifsResult } from '@giphy/js-fetch-api';

export class GifsStore {
  @observable public loading = false
  @observable public gifItem: IGif|null = null

  constructor() {}

  @action
  getGifById = async (id: string): Promise<IGif | undefined> => {
    this.loading = true;
    try {
      this.gifItem = await fetchGifs.getById(id);
      this.loading = false;
      return this.gifItem;
    } catch (error: any) {
      this.loading = false;
      console.log(error);
      toaster.onError(error.message);
    }
  }

  @action
  getPaginatedGifsByKeyword = (word: string, limit?: number): (offset: number) => Promise<GifsResult> => {
    return (offset) => fetchGifs.getPaginatedByKeyword(word, offset, limit);
  }
}

export default makeAutoObservable(new GifsStore());
