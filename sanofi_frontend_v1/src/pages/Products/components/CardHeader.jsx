import styles from "../css/CardHeader.module.css";

export const CardHeader = ({ avatar, header, subhead }) => {
  return (
    <div className={styles.headerDiv}>
      <div className={styles.headerSubheadAndAvatarAut}>
        <img className={styles.avatarIcon} alt="" src={avatar} />
        <div className={styles.headerSubheadAutolayout}>
          <div className={styles.headerDiv1}>{header}</div>
          <div className={styles.subheadDiv}>{subhead}</div>
        </div>
      </div>
      <img className={styles.icon} alt="" src="-icon10.svg" />
    </div>
  );
};
