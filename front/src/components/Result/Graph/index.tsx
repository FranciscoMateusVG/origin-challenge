import { High } from "src/components/ui/svg/High";
import { Low } from "src/components/ui/svg/Low";
import { Medium } from "src/components/ui/svg/Medium";
import styles from "./index.module.css";

interface IGraph {
  status: "HEALTHY" | "MEDIUM" | "LOW" | "";
}

export const Graph: React.FC<IGraph> = ({ status }) => {
  const { graphContainer } = styles;

  return (
    <div className={graphContainer}>
      {status === "HEALTHY" && <High />}
      {status === "MEDIUM" && <Medium />}
      {status === "LOW" && <Low />}
      {!status && <p>Loading...</p>}
    </div>
  );
};
