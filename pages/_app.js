import '../styles/globals.css'
import {Provider} from "react-redux";
import {store} from "../features/store";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import {SWRConfig} from "swr";

const fetcher = (url) => fetch(url).then(response => response.json());

function MyApp({Component, pageProps}) {
    return (
        <Provider store={store}>
            <SWRConfig value={{fetcher}}>
                <Head>
                    <title>Next-Movie-app</title>
                    <meta name={"description"} content={"NextJS로 만든 Movie App"}/>
                </Head>
                <Header></Header>
                <Component {...pageProps} />
                <Footer></Footer>
            </SWRConfig>
        </Provider>
    )
}

export default MyApp