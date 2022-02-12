import { LockIcon } from "src/components/ui/svg/LockIcon";
import { Logo } from "src/components/ui/svg/Logo";
import styles from "./index.module.css";

export const Header: React.FC = ({ children }) => {
  const { containerHeader, containerFooter, textContainer, textFooter } =
    styles;

  return (
    <>
      <div className={containerHeader}>
        <Logo />
      </div>
      {children}
      <div className={containerFooter}>
        <div className={textContainer}>
          <LockIcon />
          <p className={textFooter}>
            Your financial information is encrypted and secure. We'll never
            share or sell any of your personal data.
          </p>
        </div>
      </div>
    </>
  );
};
