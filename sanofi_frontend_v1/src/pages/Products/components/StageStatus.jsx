import styles from "../css/StageStatus.module.css";

export const StageStatus = ({
  checkCircle,
  secondaryText,
  radioButtonUnchecked,
  secondaryText1,
  radioButtonUnchecked1,
  radioButtonUnchecked2,
  secondaryText2,
}) => {
  return (
    <div className={styles.statusDiv}>
      <div className={styles.statusDiv1}>
        <div className={styles.secondaryTextDiv}>{secondaryText2}</div>
        <img className={styles.checkCircleIcon} alt="" src={checkCircle} />
      </div>
      <div className={styles.statusDiv1}>
        <div className={styles.secondaryTextDiv}>{secondaryText}</div>
        <img
          className={styles.checkCircleIcon}
          alt=""
          src={radioButtonUnchecked}
        />
      </div>
      <div className={styles.statusDiv1}>
        <div className={styles.secondaryTextDiv}>{secondaryText1}</div>
        <img
          className={styles.checkCircleIcon}
          alt=""
          src={radioButtonUnchecked1}
        />
      </div>
      <div className={styles.statusDiv1}>
        <div className={styles.secondaryTextDiv}>Relatório</div>
        <img
          className={styles.checkCircleIcon}
          alt=""
          src={radioButtonUnchecked2}
        />
      </div>
    </div>
  );
};
