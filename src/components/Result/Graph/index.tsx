import { High } from "src/components/ui/svg/High";
import { Low } from "src/components/ui/svg/Low";
import { Medium } from "src/components/ui/svg/Medium";
import styles from "./index.module.css";

interface IGraph {
  status: "high" | "medium" | "low";
}

export const Graph: React.FC<IGraph> = ({ status }) => {
  return (
    <div>
      {status === "high" && <High />}
      {status === "medium" && <Medium />}
      {status === "low" && <Low />}
    </div>
  );
};
