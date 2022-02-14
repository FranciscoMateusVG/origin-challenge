import styles from "./index.module.css";

export const Submit: React.FC = ({ children }) => {
  const { submitContainer, buttonStyle } = styles;
  return (
    <div className={submitContainer}>
      <button type="submit" className={buttonStyle}>
        Continue
      </button>
    </div>
  );
};
