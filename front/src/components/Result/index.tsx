import { Button } from "../ui/Button";
import { Graph } from "./Graph";
import styles from "./index.module.css";
import { Message } from "./Message";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

export const Result: React.FC = () => {
  const router = useRouter();
  const [score, setScore] = useState<"HEALTHY" | "MEDIUM" | "LOW" | "">("");

  useEffect(() => {
    const query = router.query;

    async function getResult() {
      try {
        const {
          data: { score },
        } = await axios.get("api/score/result", {
          params: query,
        });
        setScore(score);
      } catch (error) {
        console.log(error);
      }
    }

    getResult();
  }, []);
  return (
    <div>
      <Graph status={score} />
      <Message status={score} />
      <Button onClick={() => console.log("a")}>Return</Button>
    </div>
  );
};
