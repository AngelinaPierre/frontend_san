import { Sidebar } from "../../components/Sidebar";
import { CardHeader } from "./components/CardHeader";
import { CardImage } from "./components/CardImage";
import { CardDescription } from "./components/CardDescription";
import { CardButtons } from "./components/CardButtons";
import { SystemBarIcon } from "../../components/SystemBarIcon";
import { AppBar } from "../../components/AppBar";
import styles from "./css/Products.module.css";

export const Products = () => {
  return (
    <div className={styles.productsDiv}>
      <Sidebar
        icon="-icon6.svg"
        icon1="-icon8.svg"
        icon2="-icon9.svg"
        headerLogo="header-logo1@2x.png"
      />
      <div className={styles.contentDiv}>
        <div className={styles.emDesenvolvimentoDiv}>
          <div className={styles.cardDorflex}>
            <CardHeader
              avatar="-avatar.svg"
              header="Dorflex UNO"
              subhead="06 Jun 2021 - hoje"
            />
            <CardImage b9111e6fe309b16fd33806e1e="2939b9111e6fe309b16fd33806e1e24ff0c93f88-1@2x.png" />
            <CardDescription />
            <CardButtons />
          </div>
          <div className={styles.cardDipirona}>
            <div className={styles.headerDiv}>
              <div className={styles.headerSubheadAndAvatarAut}>
                <img className={styles.avatarIcon} alt="" src="-avatar1.svg" />
                <div className={styles.headerSubheadAutolayout}>
                  <div className={styles.headerDiv1}>Dipirona - Genérico</div>
                  <div className={styles.subheadDiv}>05 Fev 2021 - hoje</div>
                </div>
              </div>
              <img className={styles.icon} alt="" src="-icon10.svg" />
            </div>
            <div className={styles.imageDiv}>
              <img
                className={styles.f4633557cdf841cf414a208044ffc4Icon}
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
            <CardButtons label="see more" icons="icons.svg" />
          </div>
          <div className={styles.developingDiv}>Developing</div>
        </div>
        <div className={styles.finalizadosDiv}>
          <div className={styles.cardDorflex}>
            <CardHeader
              avatar="-avatar2.svg"
              header="Simeticona 75mg"
              subhead="28 Abr 2019 - 13 Nov 2021"
            />
            <CardImage b9111e6fe309b16fd33806e1e="imagenssimaticona-75-mg@2x.png" />
            <CardDescription />
            <CardButtons label="VER MAIS" />
          </div>
          <div className={styles.cardDipirona}>
            <CardHeader
              avatar="-avatar1.svg"
              header="Simeticona 125mg"
              subhead="21 Mar 2019 - 12 Dez 2021"
            />
            <CardImage b9111e6fe309b16fd33806e1e="imagenssimeticona-125mg@2x.png" />
            <CardDescription />
            <CardButtons label="VER MAIS" />
          </div>
          <div className={styles.finishedDiv}>Finished</div>
        </div>
      </div>
      <SystemBarIcon systemBar="system-bar2.svg" />
      <AppBar
        leadingIconLUseHighEmphas="-leading-icon-l-use-high-emphasis1.svg"
        pageTitle="Products"
        trailingIcons="trailing-icons1.svg"
      />
    </div>
  );
};
