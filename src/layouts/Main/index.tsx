import { FC, ReactNode } from 'react';
import { observer } from 'mobx-react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Scrollbar from '../../components/Scrollbar';

import './styles.scss';

type TProps = {
  children?: ReactNode
}

const MainLayout: FC<TProps> = ({ children }: TProps) => {
  return (
    <>
      <Header />
      {/* <div className="fixed-top"><Header /></div> */}
      <div className='main'>
        <div className='layout-container'>
          <div className='layout-content'>
            {/* <Popup /> */}
            <Scrollbar viewport='89vh'>
              <>
                {children}
              </>
            </Scrollbar>
          </div>
        </div>
      </div>
      <div className="fixed-bottom"><Footer /></div>
    </>
  );
};

export default observer(MainLayout);
