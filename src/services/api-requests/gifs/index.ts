import { GifsResult, GiphyFetch } from "@giphy/js-fetch-api";
import { IGif } from "@giphy/js-types";

import { config } from "../../../config";

const giphyFetch = new GiphyFetch(config.gifs.apiKey);

export const fetchGifs = {
  /** 
   * Queries
   */

  getById: async (id: string): Promise<IGif> => {
    const result = await giphyFetch.gif(id);

    return result.data;
  },

  getPaginatedByKeyword: async (word: string, offset = 0, limit = 10): Promise<GifsResult> => {
    return giphyFetch.search(word, { offset, limit });
  },
};
