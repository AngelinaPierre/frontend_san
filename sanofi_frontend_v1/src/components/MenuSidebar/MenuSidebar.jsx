import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MenuSidebar.module.css";

export const MenuSidebar = ({ icon, icon1, icon2, icon3 }) => {
  const navigate = useNavigate();

  const onItemContainerClick = useCallback(() => {
    navigate("/equipamentos");
  }, [navigate]);

  const onItemContainer1Click = useCallback(() => {
    navigate("/usurios");
  }, [navigate]);

  const onItemContainer2Click = useCallback(() => {
    navigate("/estoque");
  }, [navigate]);

  const onItemContainer3Click = useCallback(() => {
    navigate("/products");
  }, [navigate]);

  return (
    <div className={styles.sidebarDiv}>
      <div className={styles.sidebarDiv1} />
      <div className={styles.menuDiv}>
        <div className={styles.itemDiv} onClick={onItemContainerClick}>
          <img className={styles.icon} alt="" src="-icon.svg" />
          <div className={styles.labelDiv}>Equipamentos</div>
        </div>
        <div className={styles.itemDiv1} onClick={onItemContainer1Click}>
          <img className={styles.icon} alt="" src={icon2} />
          <div className={styles.labelDiv}>Usuários</div>
        </div>
        <div className={styles.itemDiv2} onClick={onItemContainer2Click}>
          <img className={styles.icon} alt="" src={icon3} />
          <div className={styles.labelDiv}>Estoque</div>
        </div>
        <div className={styles.gestoDiv}>Gestão</div>
        <div className={styles.itemDiv3} onClick={onItemContainer3Click}>
          <img className={styles.icon} alt="" src={icon} />
          <div className={styles.labelDiv}>Produtos</div>
        </div>
        <div className={styles.itemDiv4}>
          <img className={styles.icon} alt="" src={icon1} />
          <div className={styles.labelDiv4}>Home</div>
        </div>
      </div>
      <div className={styles.headerDiv}>
        <div className={styles.containerDiv} />
        <img
          className={styles.headerLogoIcon}
          alt=""
          src="header-logo@2x.png"
        />
      </div>
    </div>
  );
};
