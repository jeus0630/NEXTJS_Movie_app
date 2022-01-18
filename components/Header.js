import React from 'react';
import styles from '@/styles/Header.module.scss'
const Header = () => {
    return (
        <div className={styles.header}>
            <div className="title-box">
                <h1>Next Movie App</h1>
            </div>
            <div className="search-box">
                <input type="text"/>
            </div>
        </div>
    );
};

export default Header;