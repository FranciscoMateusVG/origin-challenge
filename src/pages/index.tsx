import Head from "next/head";
import Image from "next/image";

import styles from "./index.module.css";
import { Title } from "../components/ui/Title/index";
import { Card } from "../components/ui/Card/index";
import { CompactLogo } from "src/components/ui/svg/CompactLogo";
import { FormComponent } from "../components/ui/Form/index";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Origin - Home Screen</title>
      </Head>
      <Title>
        Let's find out your <b>financial wellness score.</b>
      </Title>
      <Card>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            width: "100%",
          }}
        >
          <div style={{ display: "flex" }}>
            <CompactLogo />
            <div>
              <p>Financial wellness test</p>
              <p>Enter your financial information below</p>
            </div>
          </div>

          <FormComponent />
        </div>
      </Card>
    </div>
  );
}
