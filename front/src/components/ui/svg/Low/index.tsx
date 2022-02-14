import styles from "./index.module.css";

export const Low: React.FC = ({}) => {
  const { container } = styles;

  return (
    <div className={container}>
      <svg viewBox="0 0 444 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect
          x="1"
          y="1"
          width="442"
          height="22"
          rx="11"
          fill="#E9EEF2"
          stroke="white"
          stroke-width="2"
        />
        <rect
          x="1"
          y="1"
          width="291.04"
          height="22"
          rx="11"
          fill="#E9EEF2"
          stroke="white"
          stroke-width="2"
        />
        <rect
          x="1"
          y="1"
          width="144.5"
          height="22"
          rx="11"
          fill="#D32A36"
          stroke="white"
          stroke-width="2"
        />
      </svg>
    </div>
  );
};
