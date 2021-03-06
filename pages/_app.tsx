/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import "../styles/globals.css"
import { AppProps } from "next/app"

const MyApp = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />

export default MyApp
