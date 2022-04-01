import { Sidebar } from "../../components/Sidebar";
import { AppBar } from "../../components/AppBar";
import { SystemBarIcon } from "../../components/SystemBarIcon";
import styles from "./css/Equipments.module.css";

export const Equipments = () => {
  return (
    <div className={styles.equipmentsDiv}>
      <Sidebar
        icon="-icon6.svg"
        icon1="-icon3.svg"
        icon2="-icon9.svg"
        headerLogo="header-logo2@2x.png"
        icon3="-icon14.svg"
      />
      <AppBar
        leadingIconLUseHighEmphas="-leading-icon-l-use-high-emphasis1.svg"
        pageTitle="Equipment’s List"
        trailingIcons="trailing-icons1.svg"
      />
      <SystemBarIcon systemBar="system-bar.svg" />
    </div>
  );
};
