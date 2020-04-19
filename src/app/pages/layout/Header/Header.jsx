import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './Header.scss';
import { newViewLabel } from '../../../store/actions/CanvasActions';

function Header() {
  const dispatch = useDispatch();
  return (
    <nav className="header" title="header">
      <div className="nav-wrapper">
        <div className="options-button-wrapper">
          <Link to="/">
            <button type="button" className="nav-button creator-button link-button">
              Label Creator
            </button>
          </Link>
        </div>
      </div>
      <div className="nav-wrapper">
        <div className="options-button-wrapper">
          <button
            type="button"
            className="nav-button creator-button"
            onClick={() => dispatch(newViewLabel())}
          >
            New Label
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
