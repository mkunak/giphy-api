import { FC } from "react";
import { observer } from 'mobx-react';
import { Carousel as GiphyCarousel } from "@giphy/react-components";

import { useStores } from "../../hooks";

const GifsCarousel: FC = () => {
  const { gifsStore } = useStores();
  // const fetchGifs = (offset: number) => giphyFetch.search("dogs", { offset, limit: 10 });
  const fetchGifs = gifsStore.getPaginatedGifsByKeyword("dogs", 10);

  return <GiphyCarousel fetchGifs={fetchGifs} gifHeight={200} gutter={6} />;
}

export default observer(GifsCarousel);
