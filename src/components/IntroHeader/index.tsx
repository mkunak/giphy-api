/* eslint-disable no-restricted-globals */
import { BaseSyntheticEvent, FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { v4 as uuidv4 } from 'uuid';

import Logo from '../Logo';

import './styles.scss';

const IntroHeader:FC = () => {
  const [currentHover, setCurrentHover] = useState<string | null>(null);

  const links = [
    { to: '/gifs', title: 'Gifs', key: uuidv4() },
    { to: '/about', title: 'About', key: uuidv4() },
  ];

  const handleEnter = (e: BaseSyntheticEvent) => {
    setCurrentHover(e.target.dataset.key);
  };
  const handleLeave = () => {
    setCurrentHover(null);
  };

  const renderLinks = (links: { to: string, title: string, key: string }[]) => {
    return links.map(({ to, title, key }) => {
      return (
        <li key={key} className="nav-item">
          <Link
            to={to}
            data-key={to}
            className="nav-link"
            style={{
              color: (location.pathname === to || currentHover === to) ? '#627C85' : '#627C85',
              fontWeight: location.pathname === to ? 700 : 400,
            }}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            {title}
          </Link>
        </li>
      );
    });
  };

  const logoProps = {
    color1: '#627C85',
    color2: '#627C85',
    color3: '#9bb7c0',
    height: '170',
    width: '170',
  };

  return (
    <>
      <nav className="intro-header navbar navbar-expand-lg navbar-light shadow">
        <div className="layout-container d-flex justify-content-between">
          <div className="navbar-brand">
            <Link
              to="/"
              data-key={'/'}
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
            >
              <Logo {...logoProps}/>
            </Link>
            <span className="logo-text" style={{ color: '#627C85' }}><b>Challenge</b></span>
          </div>
          <div className="d-flex">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                {renderLinks(links)}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default observer(IntroHeader);
