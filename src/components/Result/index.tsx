import { Button } from "../ui/Button";
import { Graph } from "./Graph";
import styles from "./index.module.css";
import { Message } from "./Message";

export const Result: React.FC = () => {
  return (
    <div>
      <Graph status="high" />
      <Message status="high" />
      <Button onClick={() => console.log("a")}>Return</Button>
    </div>
  );
};
