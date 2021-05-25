import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Footer } from '../components/Footer';

export default class MyDocument extends Document {
    render() {
        return (
        <Html>
            <Head>
                <link rel="shortcut icon" href="favicon.png" type="image/png" />

                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Krona+One&family=RocknRoll+One&family=Ubuntu:wght@700&display=swap" rel="stylesheet" />

                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest"></link>
            </Head>
            <body>                
                <Main />
                <NextScript />
                <Footer />
            </body>
        </Html>
        );
    }  
}