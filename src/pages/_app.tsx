import "../styles/global.css";
import type { AppProps } from "next/app";
import { Header } from "src/components/layout/Header";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Header>
      {" "}
      <Component {...pageProps} />
    </Header>
  );
}
