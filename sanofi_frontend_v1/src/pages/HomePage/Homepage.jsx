import { Sidebar } from "../../components/Sidebar";
import { AppBar } from "../../components/AppBar";
import { SystemBarIcon } from "../../components/SystemBarIcon";
import styles from "./css/HomePage.module.css";

export const HomePage = () => {
  return (
    <div className={styles.homePageDiv}>
      <Sidebar
        icon="-icon1.svg"
        icon1="-icon3.svg"
        icon2="-icon4.svg"
        headerLogo="header-logo@2x.png"
        icon3="-icon.svg"
        icon4="-icon2.svg"
      />
      <AppBar
        leadingIconLUseHighEmphas="-leading-icon-l-use-high-emphasis.svg"
        pageTitle="Home Page"
        trailingIcons="trailing-icons.svg"
      />
      <SystemBarIcon systemBar="system-bar.svg" />
    </div>
  );
};
