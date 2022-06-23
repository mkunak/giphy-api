import { FC, ReactNode } from 'react';

import './styles.scss';

type TProps = {
  /** Viewport value in vh */
  viewport?: string,
  /** Wrapped children */
  children: ReactNode // JSX.Element
}

const Scrollbar: FC<TProps> = (props: TProps) => {
  const { viewport, children } = props;

  const containerStyles = {
    height: viewport,
    overflow: 'hidden',
    // border: '1px solid darkred',
  };

  const scrollbarStyles = {
    height: '99%',
    overflowY: 'scroll' as const,
    scrollbarWidth: 'none' as const,
  };

  return (
    <div style={containerStyles}>
      <div className="scrollbar" style={scrollbarStyles}>
        {children}
      </div>
    </div>
  );
};

export default Scrollbar;
