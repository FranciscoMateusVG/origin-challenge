import styles from "./index.module.css";

export const Title: React.FC = ({ children }) => {
  const { title } = styles;
  return (
    <div>
      <p className={title}>{children}</p>
    </div>
  );
};
