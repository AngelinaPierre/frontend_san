import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../css/ProductContent.module.css";

export const ProductContent = () => {
  const navigate = useNavigate();

  const onButtonContainer2Click = useCallback(() => {
    navigate("/productsprocess");
  }, [navigate]);

  const onButtonsContainer1Click = useCallback(() => {
    navigate("/productsprocess");
  }, [navigate]);

  return (
    <div className={styles.contentDiv}>
      <div className={styles.emDesenvolvimentoDiv}>
        <div className={styles.cardDorflex}>
          <div className={styles.headerDiv}>
            <div className={styles.headerSubheadAndAvatarAut}>
              <img className={styles.avatarIcon} alt="" src="-avatar.svg" />
              <div className={styles.headerSubheadAutolayout}>
                <div className={styles.headerDiv1}>Dorflex UNO</div>
                <div className={styles.subheadDiv}>06 Jun 2021 - hoje</div>
              </div>
            </div>
            <img className={styles.icon} alt="" src="-icon10.svg" />
          </div>
          <div className={styles.imageDiv}>
            <img
              className={styles.b9111e6fe309b16fd33806e1e24ff0Icon}
              alt=""
              src="2939b9111e6fe309b16fd33806e1e24ff0c93f88-1@2x.png"
            />
          </div>
          <div className={styles.secondaryTextDiv}>
            <div className={styles.secondaryTextDiv1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </div>
          </div>
          <div className={styles.buttonsDiv}>
            <div className={styles.buttonDiv}>
              <div className={styles.labelDiv}>VER MAIS</div>
            </div>
            <div className={styles.buttonDiv1}>
              <div className={styles.labelDiv}>BUTTON</div>
            </div>
            <img className={styles.icons} alt="" src="icons.svg" />
          </div>
        </div>
        <div className={styles.cardDipirona}>
          <div className={styles.headerDiv}>
            <div className={styles.headerSubheadAndAvatarAut}>
              <img className={styles.avatarIcon1} alt="" src="-avatar1.svg" />
              <div className={styles.headerSubheadAutolayout}>
                <div className={styles.headerDiv1}>Dipirona - Genérico</div>
                <div className={styles.subheadDiv}>05 Fev 2021 - hoje</div>
              </div>
            </div>
            <img className={styles.icon} alt="" src="-icon10.svg" />
          </div>
          <div className={styles.imageDiv1}>
            <img
              className={styles.b9111e6fe309b16fd33806e1e24ff0Icon}
              alt=""
              src="f4633557cdf841cf414a208044ffc4a7079b476a-2@2x.png"
            />
          </div>
          <div className={styles.secondaryTextDiv}>
            <div className={styles.secondaryTextDiv1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </div>
          </div>
          <div
            className={styles.buttonsDiv1}
            onClick={onButtonsContainer1Click}
          >
            <div
              className={styles.buttonDiv2}
              onClick={onButtonContainer2Click}
            >
              <div className={styles.labelDiv}>VER MAIS</div>
            </div>
            <div className={styles.buttonDiv1}>
              <div className={styles.labelDiv}>BUTTON</div>
            </div>
            <img className={styles.icons} alt="" src="icons.svg" />
          </div>
        </div>
        <div className={styles.emDesenvolvimentoDiv1}>Em desenvolvimento</div>
      </div>
      <div className={styles.finalizadosDiv}>
        <div className={styles.cardDorflex}>
          <div className={styles.headerDiv}>
            <div className={styles.headerSubheadAndAvatarAut}>
              <img className={styles.avatarIcon} alt="" src="-avatar2.svg" />
              <div className={styles.headerSubheadAutolayout}>
                <div className={styles.headerDiv1}>Simeticona 75mg</div>
                <div className={styles.subheadDiv}>
                  28 Abr 2019 - 13 Nov 2021
                </div>
              </div>
            </div>
            <img className={styles.icon} alt="" src="-icon10.svg" />
          </div>
          <div className={styles.imageDiv}>
            <img
              className={styles.b9111e6fe309b16fd33806e1e24ff0Icon}
              alt=""
              src="imagenssimaticona-75-mg@2x.png"
            />
          </div>
          <div className={styles.secondaryTextDiv}>
            <div className={styles.secondaryTextDiv1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </div>
          </div>
          <div className={styles.buttonsDiv}>
            <div className={styles.buttonDiv}>
              <div className={styles.labelDiv}>VER MAIS</div>
            </div>
            <div className={styles.buttonDiv1}>
              <div className={styles.labelDiv}>BUTTON</div>
            </div>
            <img className={styles.icons} alt="" />
          </div>
        </div>
        <div className={styles.cardDipirona}>
          <div className={styles.headerDiv}>
            <div className={styles.headerSubheadAndAvatarAut}>
              <img className={styles.avatarIcon1} alt="" src="-avatar3.svg" />
              <div className={styles.headerSubheadAutolayout}>
                <div className={styles.headerDiv1}>Simeticona 125mg</div>
                <div className={styles.subheadDiv}>
                  21 Mar 2019 - 12 Dez 2021
                </div>
              </div>
            </div>
            <img className={styles.icon} alt="" src="-icon10.svg" />
          </div>
          <div className={styles.imageDiv1}>
            <img
              className={styles.b9111e6fe309b16fd33806e1e24ff0Icon}
              alt=""
              src="imagenssimeticona-125mg@2x.png"
            />
          </div>
          <div className={styles.secondaryTextDiv}>
            <div className={styles.secondaryTextDiv1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </div>
          </div>
          <div className={styles.buttonsDiv}>
            <div className={styles.buttonDiv}>
              <div className={styles.labelDiv}>VER MAIS</div>
            </div>
            <div className={styles.buttonDiv1}>
              <div className={styles.labelDiv}>BUTTON</div>
            </div>
            <img className={styles.icons} alt="" />
          </div>
        </div>
        <div className={styles.emDesenvolvimentoDiv1}>Finalizados</div>
      </div>
    </div>
  );
};
