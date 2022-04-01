import styles from "../css/ProgressBar.module.css";

export const ProgressBar = () => {
  return (
    <div className={styles.progressBarDiv}>
      <div className={styles.linearBTrackDiv}>
        <div className={styles.rectangleDiv} />
      </div>
      <div className={styles.linearAProgressBar}>
        <div className={styles.rectangleDiv1} />
      </div>
    </div>
  );
};
