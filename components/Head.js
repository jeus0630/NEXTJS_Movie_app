import React from 'react';
import Head from "next/head";

const HeadComp = ({title,content}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name={"description"} content={content}/>
        </Head>
    );
};

export default HeadComp;
