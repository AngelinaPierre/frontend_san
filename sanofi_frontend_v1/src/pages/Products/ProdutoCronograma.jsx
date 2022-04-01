import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar";
import { SystemBarIcon } from "../../components/SystemBarIcon";
import { AppBar } from "../../components/AppBar";
import styles from "./css/ProdutoCronograma.module.css";

export const ProdutoCronograma = () => {
  const navigate = useNavigate();

  const onTabLStatesClick = useCallback(() => {
    navigate("/productsprocess");
  }, [navigate]);

  return (
    <div className={styles.produtoCronogramaDiv}>
      <Sidebar
        icon="-icon39.svg"
        icon1="-icon8.svg"
        icon2="-icon9.svg"
        headerLogo="header-logo6@2x.png"
        icon3="-icon.svg"
        icon4="-icon40.svg"
      />
      <div className={styles.contentDiv}>
        <div className={styles.cronogramaDiv}>
          <img className={styles.imagemIcon} alt="" src="imagem@2x.png" />
          <div className={styles.outlined2TextIconDiv}>
            <img className={styles.icon} alt="" src="-icon43.svg" />
            <div className={styles.textDiv}>
              <div className={styles.labelDiv}>Download</div>
            </div>
          </div>
          <div className={styles.ltimaAtualizao07DeMaro}>
            Última atualização: 07 de março de 2022 às 09:29
          </div>
        </div>
      </div>
      <div className={styles.tabsDiv}>
        <div className={styles.containerDiv} />
        <div className={styles.tabsDiv1}>
          <div className={styles.tabLStates} onClick={onTabLStatesClick}>
            <div className={styles.tabsActiveTabIndicatoron} />
            <div className={styles.tabDiv}>Process</div>
          </div>
          <div className={styles.tabLStates1}>
            <div className={styles.indicatorDiv}>
              <div className={styles.indicatorDiv1} />
            </div>
            <div className={styles.tabDiv1}>Cronograma</div>
          </div>
          <div className={styles.tabLStates2}>
            <div className={styles.tabsActiveTabIndicatoron} />
            <div className={styles.tabDiv2}>Tab</div>
          </div>
        </div>
      </div>
      <SystemBarIcon systemBar="system-bar2.svg" />
      <AppBar
        leadingIconLUseHighEmphas="-leading-icon-l-use-high-emphasis5.svg"
        pageTitle="Dipirona - Genérico"
        trailingIcons="trailing-icons6.svg"
      />
    </div>
  );
};
