import styles from "./index.module.css";

export const Submit: React.FC = ({ children }) => {
  const { buttonStyle } = styles;
  return (
    <div>
      <button type="submit" className={buttonStyle}>
        Continue
      </button>
    </div>
  );
};
