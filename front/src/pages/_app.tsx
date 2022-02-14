import "../styles/global.css";
import type { AppProps } from "next/app";
import { Layout } from "src/components/layout";
import { positions, Provider } from "react-alert";
//@ts-ignore
import AlertTemplate from "react-alert-template-basic";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
};

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider template={AlertTemplate} {...options}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
