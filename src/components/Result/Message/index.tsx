import styles from "./index.module.css";

interface IMessage {
  status: "high" | "medium" | "low";
}

export const Message: React.FC<IMessage> = ({ status }) => {
  let main = "";
  let sub = "";

  switch (status) {
    case "high":
      main = "Congratulations!";
      sub = "Your financial wellness score is Healthy.";
      break;
    case "medium":
      main = "There is room for improvement.";
      sub = "Your financial wellness score is Average.";
      break;
    case "low":
      main = "Caution!";
      sub = "Your financial wellness score is Unhealthy.";
      break;
    default:
      break;
  }

  return (
    <div>
      <p>{main}</p>
      <p>{sub}</p>
    </div>
  );
};
