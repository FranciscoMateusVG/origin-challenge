import styles from "./index.module.css";

export const Card: React.FC = ({ children }) => {
  const { container } = styles;
  return <div className={container}>{children}</div>;
};
