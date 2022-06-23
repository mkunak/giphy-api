import { FC, ReactNode } from 'react';
import { observer } from 'mobx-react';

import IntroHeader from '../../components/IntroHeader';
import Scrollbar from '../../components/Scrollbar';
import Footer from '../../components/Footer';

import './styles.scss';

type TProps = {
  children?: ReactNode
}

const IntroLayout: FC<TProps> = ({ children }: TProps) => {
  return (
    <>
      <IntroHeader />
      <div className='intro'>
        <div className='layout-container'>
          <div className='layout-content'>
            {/* <Popup /> */}
            <Scrollbar viewport='75vh'>
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

export default observer(IntroLayout);
