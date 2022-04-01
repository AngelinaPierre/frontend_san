import styles from "../css/SystemBarIcon.module.css";

export const SystemBarIcon = ({ systemBar }) => {
  return <img className={styles.systemBarIcon} alt="" src={systemBar} />;
};
