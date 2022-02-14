import { Logo } from "src/components/ui/svg/Logo";
import styles from "./index.module.css";

export const Head: React.FC = () => {
  const { containerHeader } = styles;

  return (
    <div className={containerHeader}>
      <Logo />
    </div>
  );
};
