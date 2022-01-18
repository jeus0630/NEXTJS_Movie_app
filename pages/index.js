import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import Link from "next/link";
import {useSelector} from "react-redux";
import {getKeyword} from "../features/movies/movie";
import useSWR from 'swr';

export default function Home({movies}) {
    const keyword = useSelector(getKeyword) ?? 'harry';

    const {data} = useSWR(`http://www.omdbapi.com/?apikey=53c800d&s=${keyword}&type=movie`);

    if(data){
        return (
            <div className={styles.main}>
                {
                    data.Search.map(movie => {
                        return (
                            <Link key={movie.imdbID} href={`/movies/${movie.imdbID}`}>
                                <a>
                                    <img src={movie.Poster} alt=""/>
                                    <div>
                                        <em className={styles.txt_em}>{movie.Title}</em>
                                        <b className={styles.txt_b}>{movie.Year}</b>
                                    </div>
                                </a>
                            </Link>
                        )
                    })
                }
            </div>
        )
    }

    if(!data){
        return(
            <>
            </>
        )
    }
}

export const getStaticProps = async () => {
    const response = await fetch('http://www.omdbapi.com/?apikey=53c800d&s=harry&type=movie');
    const movies = await response.json();

    return {
        props: {
            movies: movies.Search
        }
    }
}