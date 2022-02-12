import { LockIcon } from "src/components/ui/svg/LockIcon";
import { Logo } from "src/components/ui/svg/Logo";
import Footer from "./Footer";
import styles from "./index.module.css";

export const Header: React.FC = ({ children }) => {
  const { containerHeader, containerFooter, textContainer, textFooter } =
    styles;

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
