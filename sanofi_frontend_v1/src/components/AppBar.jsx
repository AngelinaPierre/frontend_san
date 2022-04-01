import styles from "../css/AppBar.module.css";

export const AppBar = ({
  leadingIconLUseHighEmphas,
  pageTitle,
  trailingIcons,
}) => {
  return (
    <div className={styles.appBarDiv}>
      <img
        className={styles.leadingIconLUseHighEmphas}
        alt=""
        src={leadingIconLUseHighEmphas}
      />
      <div className={styles.pageTitleDiv}>{pageTitle}</div>
      <img className={styles.trailingIcons} alt="" src={trailingIcons} />
    </div>
  );
};