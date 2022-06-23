import { FC, useEffect } from "react";
import { observer } from 'mobx-react';
import { Gif } from "@giphy/react-components";
import { IGif } from "@giphy/js-types";

import { config } from "../../config";
import { useStores } from "../../hooks";

type TProps = {
  onGifClick?: (gif: IGif, e: React.SyntheticEvent<HTMLElement, Event>) => void
}

const GifItem: FC<TProps> = ({ onGifClick }: TProps) => {
  const { gifsStore } = useStores();

  useEffect(() => {
    gifsStore.getGifById(config.gifs.itemId);
  }, []);

  return gifsStore.gifItem && <Gif onGifClick={onGifClick} gif={gifsStore.gifItem} width={300} />;
}

export default observer(GifItem);
