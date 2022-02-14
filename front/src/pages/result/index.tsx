import Head from "next/head";
import styles from "./index.module.css";
import { Title } from "src/components/ui/Title";
import { Card } from "src/components/ui/Card";
import { CompactLogo } from "src/components/ui/svg/CompactLogo";
import { Result } from "src/components/ui/Result";
import { Button } from "src/components/ui/Button";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { containerMain, containerSub } = styles;

  return (
    <div className={containerMain}>
      <Head>
        <title>Origin - Result</title>
      </Head>
      <Title>
        Here's your <b>financial wellness score:</b>
      </Title>
      <Card>
        <div className={containerSub}>
          <CompactLogo />
          <Result />
          <Button onClick={() => router.push("/")}>Return</Button>
        </div>
      </Card>
    </div>
  );
}
