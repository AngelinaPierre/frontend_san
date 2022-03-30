import { MenuSidebar } from "../../components/MenuSidebar/MenuSidebar";
import { AppBar } from "../../components/AppBar/AppBar";
import { SystemBar } from "../../components/SystemBar/SystemBar";
import styles from "./css/Homepage.module.css";

export const Homepage = () => {
  return (
    <div className={styles.homepageDiv}>
      <MenuSidebar
        icon="-icon3.svg"
        icon1="-icon4.svg"
        icon2="-icon1.svg"
        icon3="-icon2.svg"
      />
      <AppBar
        pageTitle="Tela Inicial"
        trailingIcons="trailing-icons.svg"
        leadingIconLUseHighEmphas="-leading-icon-l-use-high-emphasis.svg"
      />
      <SystemBar />
    </div>
  );
};
