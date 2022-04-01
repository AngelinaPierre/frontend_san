import { Sidebar } from "../../components/Sidebar";
import { AppBar } from "../../components/AppBar";
import { SystemBarIcon } from "../../components/SystemBarIcon";
import styles from "./css/Stock.module.css";

export const Stock = () => {
  return (
    <div className={styles.stockDiv}>
      <Sidebar
        icon="-icon6.svg"
        icon1="-icon3.svg"
        icon2="-icon9.svg"
        headerLogo="header-logo4@2x.png"
        icon3="-icon.svg"
        icon4="-icon26.svg"
      />
      <AppBar
        leadingIconLUseHighEmphas="-leading-icon-l-use-high-emphasis1.svg"
        pageTitle="Stock"
        trailingIcons="trailing-icons3.svg"
      />
      <SystemBarIcon systemBar="system-bar.svg" />
    </div>
  );
};
