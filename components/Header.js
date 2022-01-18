import React from 'react';
import styles from '@/styles/Header.module.scss';
import {useState} from "react";
import {setKeyword} from "../features/movies/movie";
import {useDispatch} from "react-redux";
import {useRouter} from "next/router";

const Header = () => {
    const router = useRouter();
    const [input, setInput] = useState('');

    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch(setKeyword(input));
        setInput(prevState => '');
        router.push('/');
    }

    const changeHandler = (e) => {
        const {value} = e.target;
        setInput(prevState => value);
    }

    return (
        <header className={styles.header}>
            <div className="title-box">
                <h1>Next Movie App</h1>
            </div>
            <div className="">
                <input type="text" value={input} onChange={changeHandler}/>
                <button className={styles.btn} onClick={clickHandler}>Search</button>
            </div>
        </header>
    );
};

export default Header;