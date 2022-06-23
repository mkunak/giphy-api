import { FC } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import logo from '../../assets/images/logo-main.svg';

import './styles.scss';

const Header:FC = () => {
  const links = [
    { to: '/about', title: 'About', key: uuidv4() },
  ];

  const renderLinks = (links: { to: string, title: string, key: string }[]) => {
    return links.map(({ to, title, key }) => {
      return (
        <li key={key} className="nav-item">
          <Link
            className="nav-link"
            to={to}
          >
            {title}
          </Link>
        </li>
      );
    });
  };

  return (
    <>
      <nav className="auth header navbar navbar-expand-lg navbar-light p-0">
        <div className="header-container d-flex justify-content-between">
          <Link to="/" className="navbar-brand">
            <img src={logo} width="30" height="30" alt="logo"/>
            <span className="text"><b>Challenge</b></span>
          </Link>

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

export default observer(Header);
