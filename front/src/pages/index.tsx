import Head from "next/head";
import styles from "./index.module.css";
import { Title } from "../components/ui/Title/index";
import { Card } from "../components/ui/Card/index";
import { CompactLogo } from "src/components/ui/svg/CompactLogo";
import { FormComponent } from "../components/ui/Form/index";

export default function Home() {
  const {
    mainContainer,
    subContainer,
    logoContainer,
    logoMessageMain,
    logoMessageSub,
    messageContainer,
  } = styles;

  return (
    <div className={mainContainer}>
      <Head>
        <title>Origin - Home Screen</title>
      </Head>
      <Title>
        Let's find out your <b>financial wellness score.</b>
      </Title>
      <Card>
        <div className={subContainer}>
          <div className={logoContainer}>
            <CompactLogo />

            <div className={messageContainer}>
              <div className={logoMessageMain}>Financial wellness test</div>
              <div className={logoMessageSub}>
                Enter your financial information below
              </div>
            </div>
          </div>

          <FormComponent />
        </div>
      </Card>
    </div>
  );
}
