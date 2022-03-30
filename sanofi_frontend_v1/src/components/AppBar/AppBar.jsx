import styles from "./AppBar.module.css";

export const AppBar = ({
  pageTitle,
  trailingIcons,
  leadingIconLUseHighEmphas,
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
