import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import { Telegram, Discord, Twitter, Mailbox2 } from 'react-bootstrap-icons';

import './styles.scss';

type TFooter = {
  className?: string
}
const _Footer: FC<TFooter> = ({ className }: TFooter) => {
  const socials = [
    {
      icon: <Telegram data-key='telegram' className="social-item" size={30} />,
      href: '/',
    },
    {
      icon: <Discord data-key='discord' className="social-item" size={30} />,
      href: '/'
    },
    {
      icon: <Twitter data-key='twitter' className="social-item" size={30} />,
      href: '/'
    },
    {
      icon: <Mailbox2 data-key='mailbox' className="social-item" size={30} />,
      href: '/'
    },
  ];

  return (
    <div
      style={{
        height: '12vh',
        // color: themes[globalStore.theme].section.color.primary.value,
        // backgroundColor: themes[globalStore.theme].section.backgroundColor.primary.value,
      }}
      className={`footer-wrapper ${className} ${'footer-fixed'}`}
    >
      <div className='layout-container'>
        <div className='footer'>
          <div className='nav-wrapper' style={{
            justifyContent: 'space-between',
          }}>
            <div className='navigation'>
              {
                socials.map(({ icon, href }) => (
                  <a
                    key={uuidv4()}
                    href={href}
                    target='_blank'
                    rel='noreferrer'
                    className={'navigation-item'}
                  >
                    {icon}
                  </a>
                ))
              }
            </div>
            {<div style={{ color: '#627C85' }} className='copyright'>
              <b>{`All rights reserved. ${(new Date()).getFullYear()}`}</b>
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = styled(_Footer)`
.social-item {
  color: #627C85;
}
`;

export default observer(Footer);
