import styles from "./index.module.css";

interface IMessage {
  status: "HEALTHY" | "MEDIUM" | "LOW" | "";
}

export const Message: React.FC<IMessage> = ({ status }) => {
  let main = "";
  let sub = "";

  switch (status) {
    case "HEALTHY":
      main = "Congratulations!";
      sub = "Your financial wellness score is Healthy.";
      break;
    case "MEDIUM":
      main = "There is room for improvement.";
      sub = "Your financial wellness score is Average.";
      break;
    case "LOW":
      main = "Caution!";
      sub = "Your financial wellness score is Unhealthy.";
      break;
    default:
      main = "";
      sub = "";
      break;
  }

  return (
    <div>
      <p>{main}</p>
      <p>{sub}</p>
    </div>
  );
};
