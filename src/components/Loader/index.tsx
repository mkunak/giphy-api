import { FC } from 'react';
import Loading from 'react-loading';
import WindowCover from '../WindowCover';

type TProps = {
  className?: string
}

const Loader: FC<TProps> = () => {
  return (
    <WindowCover>
      <Loading
        type="spokes"
        height={100}
        width={100}
      />
    </WindowCover>
  );
};

export default Loader;
