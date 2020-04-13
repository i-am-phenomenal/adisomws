import React from 'react';
import './Header.styles.scss';

const Header = () => (
    <div className='header'>
        <span className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">ADISOM</span>
                    <span className="heading-primary--sub">is where life happens</span>
                </h1>
                <a href="#" className="btn btn--white btn--animated">Discover Us</a>
        </span>
    </div>
);

export default Header;