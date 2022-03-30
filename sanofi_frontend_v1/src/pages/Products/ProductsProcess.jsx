import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { MenuSidebar } from "../../components/MenuSidebar/MenuSidebar";
import { SystemBar } from "../../components/SystemBar/SystemBar";
import { AppBar } from "../../components/AppBar/AppBar";
import styles from "./css/ProductsProcess.module.css";

export const ProductsProcess = () => {
  const navigate = useNavigate();

  const onButtonContainer1Click = useCallback(() => {
    navigate("/produtoprocessosdesenvolvimento");
  }, [navigate]);

  const onTabLStates1Click = useCallback(() => {
    navigate("/produtocronograma");
  }, [navigate]);

  return (
    <div className={styles.productsProcessDiv}>
      <MenuSidebar
        icon="-icon8.svg"
        icon1="-icon9.svg"
        icon2="-icon15.svg"
        icon3="-icon16.svg"
      />
      <div className={styles.contentDiv}>
        <div className={styles.etapaProdutoDiv}>
          <div className={styles.progressBarDiv}>
            <div className={styles.linearBTrackDiv}>
              <div className={styles.rectangleDiv} />
            </div>
            <div className={styles.linearAProgressBar}>
              <div className={styles.rectangleDiv1} />
            </div>
          </div>
          <div className={styles.contentDiv1}>
            <div className={styles.headerDiv}>
              <div className={styles.headerSubheadAndAvatarAut}>
                <img className={styles.avatarIcon} alt="" src="-avatar4.svg" />
                <div className={styles.headerSubheadAutolayout}>
                  <div className={styles.headerDiv1}>Produto</div>
                  <div className={styles.subheadDiv}>50% concluída</div>
                </div>
              </div>
              <img className={styles.icon} alt="" src="-icon10.svg" />
            </div>
            <div className={styles.statusDiv}>
              <div className={styles.statusDiv1}>
                <div className={styles.secondaryTextDiv}>
                  Testes de desenvolvimento
                </div>
                <img
                  className={styles.checkCircleIcon}
                  alt=""
                  src="check-circle.svg"
                />
              </div>
              <div className={styles.statusDiv1}>
                <div className={styles.secondaryTextDiv}>Aprovar método</div>
                <img
                  className={styles.checkCircleIcon}
                  alt=""
                  src="radio-button-unchecked.svg"
                />
              </div>
              <div className={styles.statusDiv1}>
                <div className={styles.secondaryTextDiv}>
                  Etapa de validação
                </div>
                <img
                  className={styles.checkCircleIcon}
                  alt=""
                  src="radio-button-unchecked1.svg"
                />
              </div>
              <div className={styles.statusDiv1}>
                <div className={styles.secondaryTextDiv}>Relatório</div>
                <img
                  className={styles.checkCircleIcon}
                  alt=""
                  src="radio-button-unchecked2.svg"
                />
              </div>
            </div>
            <div className={styles.buttonsDiv}>
              <div className={styles.buttonDiv}>
                <div className={styles.labelDiv}>Button</div>
              </div>
              <div
                className={styles.buttonDiv1}
                onClick={onButtonContainer1Click}
              >
                <div className={styles.labelDiv}>Deltahes</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.etapaIFADiv}>
          <div className={styles.progressBarDiv}>
            <div className={styles.linearBTrackDiv}>
              <div className={styles.rectangleDiv} />
            </div>
            <div className={styles.linearAProgressBar1}>
              <div className={styles.rectangleDiv1} />
            </div>
          </div>
          <div className={styles.contentDiv1}>
            <div className={styles.headerDiv}>
              <div className={styles.headerSubheadAndAvatarAut}>
                <img className={styles.avatarIcon} alt="" src="-avatar5.svg" />
                <div className={styles.headerSubheadAutolayout}>
                  <div className={styles.headerDiv1}>IFA</div>
                  <div className={styles.subheadDiv}>75% concluída</div>
                </div>
              </div>
              <img className={styles.icon} alt="" src="-icon10.svg" />
            </div>
            <div className={styles.statusDiv}>
              <div className={styles.statusDiv1}>
                <div className={styles.secondaryTextDiv}>
                  Testes de desenvolvimento
                </div>
                <img
                  className={styles.checkCircleIcon}
                  alt=""
                  src="check-circle.svg"
                />
              </div>
              <div className={styles.statusDiv1}>
                <div className={styles.secondaryTextDiv}>Incubar amostras</div>
                <img
                  className={styles.checkCircleIcon}
                  alt=""
                  src="check-circle2.svg"
                />
              </div>
              <div className={styles.statusDiv1}>
                <div className={styles.secondaryTextDiv}>
                  Testes de validação
                </div>
                <img
                  className={styles.checkCircleIcon}
                  alt=""
                  src="check-circle3.svg"
                />
              </div>
              <div className={styles.statusDiv1}>
                <div className={styles.secondaryTextDiv}>Relatório</div>
                <img
                  className={styles.checkCircleIcon}
                  alt=""
                  src="radio-button-unchecked2.svg"
                />
              </div>
            </div>
            <div className={styles.buttonsDiv}>
              <div className={styles.buttonDiv}>
                <div className={styles.labelDiv}>Button</div>
              </div>
              <div className={styles.buttonDiv3}>
                <div className={styles.labelDiv}>detalhes</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.etapaEstabilidadeDiv}>
          <div className={styles.progressBarDiv}>
            <div className={styles.linearBTrackDiv}>
              <div className={styles.rectangleDiv} />
            </div>
            <div className={styles.linearAProgressBar}>
              <div className={styles.rectangleDiv1} />
            </div>
          </div>
          <div className={styles.contentDiv1}>
            <div className={styles.headerDiv}>
              <div className={styles.headerSubheadAndAvatarAut}>
                <img className={styles.avatarIcon} alt="" src="-avatar6.svg" />
                <div className={styles.headerSubheadAutolayout}>
                  <div className={styles.headerDiv1}>Estabilidade</div>
                  <div className={styles.subheadDiv}>25% concluída</div>
                </div>
              </div>
              <img className={styles.icon} alt="" src="-icon10.svg" />
            </div>
            <div className={styles.statusDiv}>
              <div className={styles.statusDiv1}>
                <div className={styles.secondaryTextDiv}>Validar método</div>
                <img
                  className={styles.checkCircleIcon}
                  alt=""
                  src="check-circle.svg"
                />
              </div>
              <div className={styles.statusDiv1}>
                <div className={styles.secondaryTextDiv}>Adobe Sign</div>
                <img
                  className={styles.checkCircleIcon}
                  alt=""
                  src="close.svg"
                />
              </div>
              <div className={styles.statusDiv1}>
                <div className={styles.secondaryTextDiv}>
                  Testes com amostras incubadas
                </div>
                <img
                  className={styles.checkCircleIcon}
                  alt=""
                  src="radio-button-unchecked1.svg"
                />
              </div>
              <div className={styles.statusDiv1}>
                <div className={styles.secondaryTextDiv}>Relatório</div>
                <img
                  className={styles.checkCircleIcon}
                  alt=""
                  src="radio-button-unchecked5.svg"
                />
              </div>
            </div>
            <div className={styles.buttonsDiv}>
              <div className={styles.buttonDiv}>
                <div className={styles.labelDiv}>Button</div>
              </div>
              <div className={styles.buttonDiv3}>
                <div className={styles.labelDiv}>detalhes</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.etapaDissoluoDiv}>
          <div className={styles.progressBarDiv}>
            <div className={styles.linearBTrackDiv}>
              <div className={styles.rectangleDiv} />
            </div>
            <div className={styles.linearBTrackDiv}>
              <div className={styles.rectangleDiv1} />
            </div>
          </div>
          <div className={styles.contentDiv1}>
            <div className={styles.headerDiv}>
              <div className={styles.headerSubheadAndAvatarAut}>
                <img className={styles.avatarIcon} alt="" src="-avatar7.svg" />
                <div className={styles.headerSubheadAutolayout}>
                  <div className={styles.headerDiv1}>Perfil de dissolução</div>
                  <div className={styles.subheadDiv}>100% concluída</div>
                </div>
              </div>
              <img className={styles.icon} alt="" src="-icon10.svg" />
            </div>
            <div className={styles.statusDiv}>
              <div className={styles.statusDiv1}>
                <div className={styles.secondaryTextDiv}>
                  Testes de desenvolvimento
                </div>
                <img
                  className={styles.checkCircleIcon}
                  alt=""
                  src="check-circle.svg"
                />
              </div>
              <div className={styles.statusDiv1}>
                <div className={styles.secondaryTextDiv}>Testes do tipo X</div>
                <img
                  className={styles.checkCircleIcon}
                  alt=""
                  src="check-circle2.svg"
                />
              </div>
              <div className={styles.statusDiv1}>
                <div className={styles.secondaryTextDiv}>Testes do tipo Y</div>
                <img
                  className={styles.checkCircleIcon}
                  alt=""
                  src="check-circle3.svg"
                />
              </div>
              <div className={styles.statusDiv1}>
                <div className={styles.secondaryTextDiv}>Relatório</div>
                <img
                  className={styles.checkCircleIcon}
                  alt=""
                  src="check-circle8.svg"
                />
              </div>
            </div>
            <div className={styles.buttonsDiv}>
              <div className={styles.buttonDiv}>
                <div className={styles.labelDiv}>Button</div>
              </div>
              <div className={styles.buttonDiv3}>
                <div className={styles.labelDiv}>detalhes</div>
              </div>
            </div>
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
            <div className={styles.tabDiv}>PROCESSOS</div>
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
      <SystemBar />
      <AppBar
        pageTitle="Dipirona - Genérico"
        trailingIcons="trailing-icons2.svg"
        leadingIconLUseHighEmphas="-leading-icon-l-use-high-emphasis2.svg"
      />
    </div>
  );
};
