import { SyntheticEvent, useState } from 'react';
import { observer } from 'mobx-react';
import { Gif } from "@giphy/react-components";
import { IGif } from '@giphy/js-types';

import Scrollbar from '../../components/Scrollbar';
import { GifItem } from '../../components/GifsContent';

import './styles.scss';

const GifsPage = () => {
  const [modalGif, setModalGif] = useState<null | IGif>(null);

  const onGifClick = (gif: IGif, e: SyntheticEvent<HTMLElement, Event>) => {
    console.log("gif", gif);
    e.preventDefault();
    setModalGif(gif);
  }

  const hideModal = (e: SyntheticEvent<HTMLElement, Event>) => {
    e.preventDefault();
    setModalGif(null);
  }

  return (
    <div className="about-page">
      <div className="page-container">
        <div className="content">
          <h1 className="text-center">GIFs</h1>
          <Scrollbar viewport={'70vh'}>
            <>
              <h4>Gif Item</h4>
              <GifItem onGifClick={onGifClick} />
              {modalGif && (
                <div
                  style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "rgba(0, 0, 0, .8)",
                    zIndex: 9999
                  }}
                  onClick={hideModal}
                >
                  <Gif gif={modalGif} width={500} />
                </div>
              )}
            </>
          </Scrollbar>
        </div>
      </div>
    </div>
  );
};

export default observer(GifsPage);
