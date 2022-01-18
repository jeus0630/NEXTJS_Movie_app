import React from 'react';
import styles from '@/styles/Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className="title-box">
                <h1>Next Movie App</h1>
            </div>
            <div className="">
                <input type="text"/>
                <button className={styles.btn}>Search</button>
            </div>
        </header>
    );
};

export default Header;