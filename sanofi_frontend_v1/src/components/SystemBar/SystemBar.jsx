import styles from "./SystemBar.module.css";

export const SystemBar = () => {
  return (
    <div className={styles.systemBarDiv}>
      <div className={styles.rectangleDiv} />
      <img className={styles.maskIcon} alt="" src="mask.svg" />
    </div>
  );
};
