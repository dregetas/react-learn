import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
    return (
    <header className='header'>
        <div className='header-container'>
            <h1 className='logo'>Lionix Studio</h1>
            <nav className='navigation'>
                <ul className="navigation-list">
                    <li className="nav-list-item">
                        <a href="" className="nav-list-link">Про нас</a>
                    </li>
                    <li className="nav-list-item">
                        <a href="" className="nav-list-link">Проєкти</a>
                    </li>
                    <li className="nav-list-item">
                        <a href="" className="nav-list-link">Послуги</a>
                    </li>
                    <li className="nav-list-item">
                        <a href="" className="nav-list-link">Блог</a>
                    </li>
                </ul>
            </nav>
            <button>Зв'язатися</button>
        </div>
    </header>
    );
};

export default Header;