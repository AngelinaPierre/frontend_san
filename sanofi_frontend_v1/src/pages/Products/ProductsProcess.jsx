import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar";
import { ProgressBar } from "./components/ProgressBar";
import { StageHeader } from "./components/StageHeader";
import { StageStatus } from "./components/StageStatus";
import { StageButtons } from "./components/StageButtons";
import { SystemBarIcon } from "../../components/SystemBarIcon";
import { AppBar } from "../../components/AppBar";
import styles from "./css/ProductsProcess.module.css";

export const ProductsProcess = () => {
  const navigate = useNavigate();

  const onTabLStates1Click = useCallback(() => {
    navigate("/produtocronograma");
  }, [navigate]);

  return (
    <div className={styles.productsProcessDiv}>
      <Sidebar
        icon="-icon30.svg"
        icon1="-icon8.svg"
        icon2="-icon33.svg"
        headerLogo="header-logo5@2x.png"
        icon3="-icon29.svg"
        icon4="-icon31.svg"
      />
      <div className={styles.contentDiv}>
        <div className={styles.etapaProdutoDiv}>
          <ProgressBar />
          <div className={styles.contentDiv1}>
            <StageHeader
              avatar="-avatar4.svg"
              header="Produto"
              subhead="50% concluída"
            />
            <StageStatus
              checkCircle="check-circle.svg"
              secondaryText="Aprovar método"
              radioButtonUnchecked="radio-button-unchecked.svg"
              secondaryText1="Etapa de validação"
              radioButtonUnchecked1="radio-button-unchecked1.svg"
              radioButtonUnchecked2="radio-button-unchecked2.svg"
              secondaryText2="Testes de desenvolvimento"
            />
            <StageButtons />
          </div>
        </div>
        <div className={styles.etapaIFADiv}>
          <ProgressBar />
          <div className={styles.contentDiv1}>
            <StageHeader
              avatar="-avatar5.svg"
              header="IFA"
              subhead="75% concluída"
            />
            <StageStatus
              checkCircle="check-circle1.svg"
              secondaryText="Incubar amostras"
              radioButtonUnchecked="check-circle2.svg"
              secondaryText1="Testes de validação"
              radioButtonUnchecked1="check-circle3.svg"
              radioButtonUnchecked2="radio-button-unchecked3.svg"
            />
            <StageButtons />
          </div>
        </div>
        <div className={styles.etapaEstabilidadeDiv}>
          <ProgressBar />
          <div className={styles.contentDiv1}>
            <StageHeader
              avatar="-avatar6.svg"
              header="Estabilidade"
              subhead="25% concluída"
            />
            <StageStatus
              checkCircle="check-circle4.svg"
              secondaryText="Adobe Sign"
              radioButtonUnchecked="close.svg"
              secondaryText1="Testes com amostras incubadas"
              radioButtonUnchecked1="radio-button-unchecked4.svg"
              radioButtonUnchecked2="radio-button-unchecked2.svg"
              secondaryText2="Validar método"
            />
            <StageButtons />
          </div>
        </div>
        <div className={styles.etapaDissoluoDiv}>
          <ProgressBar />
          <div className={styles.contentDiv1}>
            <StageHeader
              avatar="-avatar7.svg"
              header="Perfil de dissolução"
              subhead="100% concluída"
            />
            <StageStatus
              checkCircle="check-circle5.svg"
              secondaryText="Testes do tipo X"
              radioButtonUnchecked="check-circle6.svg"
              secondaryText1="Testes do tipo Y"
              radioButtonUnchecked1="check-circle7.svg"
              radioButtonUnchecked2="check-circle8.svg"
              secondaryText2="Testes de desenvolvimento"
            />
            <StageButtons />
          </div>
        </div>
      </div>
      <div className={styles.tabsDiv}>
        <div className={styles.containerDiv} />
        <div className={styles.tabsDiv1}>
          <div className={styles.tabLStates}>
            <div className={styles.indicatorDiv}>
              <div className={styles.indicatorDiv1} />
            </div>
            <div className={styles.tabDiv}>Process</div>
          </div>
          <div className={styles.tabLStates1} onClick={onTabLStates1Click}>
            <div className={styles.tabsActiveTabIndicatoron} />
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
        trailingIcons="trailing-icons5.svg"
      />
    </div>
  );
};
