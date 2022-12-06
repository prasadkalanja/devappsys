import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from '../components/Layout/Layout'
import Head from 'next/head';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <html lang="en">
        <Head>
          <title>DevAppSys</title>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="width=device-width,minimum-scale=1,initial-scale=1" />
          <meta name="next-head-count" content="2" />
        </Head>
        <body style={{ overflowX: 'hidden' }}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </body>
      </html>
    </>
  )

}

export default MyApp
