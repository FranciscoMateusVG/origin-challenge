import styles from "./index.module.css";

interface IButton {
  onClick: () => void;
}

export const Button: React.FC<IButton> = ({ children, onClick }) => {
  const { buttonStyle } = styles;
  return (
    <div>
      <button onClick={onClick} className={buttonStyle}>
        {children}
      </button>
    </div>
  );
};
