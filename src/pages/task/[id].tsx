import { NextPage } from "next";
import { useRouter } from "next/router";
import { useTask } from "../../app/hooks/useTask";

import styles from "../../styles/Home.module.css";

const Task: NextPage = () => {
  const { query } = useRouter();

  const { task, isLoading } = useTask(String(query?.id));

  return (
    <div className={styles.container}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <main className={styles.main}>
          <h1 className={styles.title}>{task?.date}</h1>
          <div className={styles.grid}></div>
        </main>
      )}
    </div>
  );
};

export default Task;
