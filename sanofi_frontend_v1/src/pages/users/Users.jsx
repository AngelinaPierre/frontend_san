import { Sidebar } from "../../components/Sidebar";
import { AppBar } from "../../components/AppBar";
import { SystemBarIcon } from "../../components/SystemBarIcon";
import styles from "./css/Users.module.css";

export const Users = () => {
  return (
    <div className={styles.usersDiv}>
      <Sidebar
        icon="-icon20.svg"
        icon1="-icon3.svg"
        icon2="-icon9.svg"
        headerLogo="header-logo3@2x.png"
        icon3="-icon.svg"
      />
      <AppBar
        leadingIconLUseHighEmphas="-leading-icon-l-use-high-emphasis1.svg"
        pageTitle="System User’s"
        trailingIcons="trailing-icons3.svg"
      />
      <SystemBarIcon systemBar="system-bar.svg" />
    </div>
  );
};
