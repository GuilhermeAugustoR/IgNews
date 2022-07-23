import { AppProps } from "../../node_modules/next/app";
import '../styles/global.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
