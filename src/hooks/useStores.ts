import { stores } from '../services/stores';

export const useStores = () => {
  return { ...stores };
};
