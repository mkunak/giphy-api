import { FC, ReactNode } from 'react';
import styled from 'styled-components';

type TProps = {
  className?: string
  children?: ReactNode
}

const _WindowCover: FC<TProps> = ({ className, children }: TProps) => {
  return (
    <div className={className}>
      <div className="cover-container">
        {children}
      </div>
    </div>
  );
};

const WindowCover = styled(_WindowCover)`
  position:fixed;
  width:100%;
  left:0;right:0;top:0;bottom:0;
  /* z-index:9999; */

  .cover-container {
    position: absolute;
    top: 50%;left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default WindowCover;
