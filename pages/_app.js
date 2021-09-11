import { useEffect } from "react";
import Layout from '../components/Layout'
import AOS from "aos"

import 'aos/dist/aos.css'
import '../styles/index.scss'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        AOS.init({
            easing: "ease-out-cubic",
            once: true,
            offset: 50,
        });
    }, []);
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
