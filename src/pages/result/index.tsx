import Head from "next/head";
import styles from "./index.module.css";
import { Title } from "src/components/ui/Title";
import { Card } from "src/components/ui/Card";
import { CompactLogo } from "src/components/ui/svg/CompactLogo";
import { Result } from "src/components/Result";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Origin - Result</title>
      </Head>
      <Title>
        Here's your <b>financial wellness score:</b>
      </Title>
      <Card>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            width: "100%",
            alignItems: "center",
          }}
        >
          <CompactLogo />
          <Result />
          {/* <Button /> */}
        </div>
      </Card>
    </div>
  );
}
