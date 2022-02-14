import { LockIcon } from "src/components/ui/svg/LockIcon";
import styles from "./index.module.css";

export default function Footer() {
  const { containerFooter, textContainer, textFooter } = styles;

  return (
    <div className={containerFooter}>
      <div className={textContainer}>
        <LockIcon />
        <p className={textFooter}>
          Your financial information is encrypted and secure. We'll never share
          or sell any of your personal data.
        </p>
      </div>
    </div>
  );
}
