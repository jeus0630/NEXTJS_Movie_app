import React from 'react';
import {useRouter} from "next/router";
import Head from 'components/Head';

const MovieDetail = ({movieDetail}) => {
    const router = useRouter();
    const {isFallback} = router;

    if (isFallback) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    const {
        Title,
        Year,
        Released,
        Runtime,
        Genre,
        Director,
        Writer,
        Country,
        Metascore,
        imdbRating,
        BoxOffice
    } = movieDetail;

    return (
        <>
            {
                Title ? <>
                    <Head title={Title} content={Title}></Head>
                    <h3>{Title}</h3>
                    <h4>{Year}</h4>
                    <h4>{Released}</h4>
                    <h4>{Runtime}</h4>
                    <h4>{Genre}</h4>
                    <h4>{Director}</h4>
                    <h4>{Writer}</h4>
                    <h4>{Country}</h4>
                    <h4>{Metascore}</h4>
                    <h4>{imdbRating}</h4>
                    <h4>{BoxOffice}</h4>
                </>
                    : <>Page Not Found</>
            }
        </>
    );
};

export const getStaticPaths = async () => {
    const response = await fetch('http://www.omdbapi.com/?apikey=53c800d&s=harry&type=movie');
    const movies = await response.json();

    const paths = movies.Search.map(movie => ({
        params: {
            movieID: movie.imdbID
        }
    }))

    return {
        paths,
        fallback: true
    }

}

export const getStaticProps = async (context) => {
    const {movieID} = context.params;
    const response = await fetch(`http://www.omdbapi.com/?apikey=53c800d&i=${movieID}&plot=full&type=movie`);
    const movieDetail = await response.json();

    return {
        props: {
            movieDetail
        }
    }
}

export default MovieDetail;
