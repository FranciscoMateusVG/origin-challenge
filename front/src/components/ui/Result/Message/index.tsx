import styles from "./index.module.css";

interface IMessage {
  status: "HEALTHY" | "MEDIUM" | "LOW" | "";
}

export const Message: React.FC<IMessage> = ({ status }) => {
  const { messageContainer, mainStyle, subStyle } = styles;

  let main = "";
  let sub = <span></span>;

  switch (status) {
    case "HEALTHY":
      main = "Congratulations!";
      sub = (
        <span>
          Your financial wellness score is <b>Healthy.</b>
        </span>
      );
      break;
    case "MEDIUM":
      main = "There is room for improvement.";
      sub = (
        <span>
          Your financial wellness score is <b>Average.</b>
        </span>
      );
      break;
    case "LOW":
      main = "Caution!";
      sub = (
        <span>
          Your financial wellness score is <b>Unhealthy.</b>
        </span>
      );
      break;
    default:
      main = "";
      break;
  }

  return (
    <div className={messageContainer}>
      <p className={mainStyle}>{main}</p>
      <p className={subStyle}>{sub}</p>
    </div>
  );
};
