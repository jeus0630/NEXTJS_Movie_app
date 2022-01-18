import '../styles/globals.css'
import {Provider} from "react-redux";
import {store} from "../features/store";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";

function MyApp({Component, pageProps}) {
    return (
        <Provider store={store}>
            <Head>
                <title>Next-Movie-app</title>
                <meta name={"description"} content={"NextJS로 만든 Movie App"}/>
            </Head>
            <Header></Header>
            <Component {...pageProps} />
            <Footer></Footer>
        </Provider>
    )
}

export default MyApp