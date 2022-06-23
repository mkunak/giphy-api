import { action, autorun, makeObservable, observable } from 'mobx';

import {
  LOCAL_STORAGE_LANG_KEY,
} from '../constants.store';

import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from '../utils.store';

export class GlobalStore {
  @observable public lang = 'en'

  constructor() {
    autorun(this._initStore);
  }

  private _initStore = () => {
    const lang = getFromLocalStorage(LOCAL_STORAGE_LANG_KEY);

    if (!lang) {
      removeFromLocalStorage(LOCAL_STORAGE_LANG_KEY);
      this.lang = 'en';
      setToLocalStorage(LOCAL_STORAGE_LANG_KEY, 'en');
      return;
    }

    this.lang = lang;
  }

  @action changeLang(to: string) {
    if (to === this.lang) return;
    this.lang = to;
  }
}

export default makeObservable(new GlobalStore());
