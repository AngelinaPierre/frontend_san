import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/Sidebar.module.css";

export const Sidebar = ({ icon, icon1, icon2, headerLogo, icon3, icon4 }) => {
  const navigate = useNavigate();

  const onItemContainerClick = useCallback(() => {
    navigate("/equipments");
  }, [navigate]);

  const onItemContainer1Click = useCallback(() => {
    navigate("/users");
  }, [navigate]);

  const onItemContainer2Click = useCallback(() => {
    navigate("/stock");
  }, [navigate]);

  const onItemContainer3Click = useCallback(() => {
    navigate("/products");
  }, [navigate]);

  const onItemContainer4Click = useCallback(() => {
    //TODO: implement this
  }, []);

  return (
    <div className={styles.sidebarDiv}>
      <div className={styles.sidebarDiv1} />
      <div className={styles.menuDiv}>
        <div className={styles.itemDiv} onClick={onItemContainerClick}>
          <img className={styles.icon} alt="" src={icon3} />
          <div className={styles.labelDiv}>Equipments</div>
        </div>
        <div className={styles.itemDiv1} onClick={onItemContainer1Click}>
          <img className={styles.icon} alt="" src={icon} />
          <div className={styles.labelDiv}>Users</div>
        </div>
        <div className={styles.itemDiv2} onClick={onItemContainer2Click}>
          <img className={styles.icon} alt="" src={icon4} />
          <div className={styles.labelDiv}>Stock</div>
        </div>
        <div className={styles.gestoDiv}>Gestão</div>
        <div className={styles.itemDiv3} onClick={onItemContainer3Click}>
          <img className={styles.icon} alt="" src={icon1} />
          <div className={styles.labelDiv}>Products</div>
        </div>
        <div className={styles.itemDiv4} onClick={onItemContainer4Click}>
          <img className={styles.icon} alt="" src={icon2} />
          <div className={styles.labelDiv4}>Home</div>
        </div>
      </div>
      <div className={styles.headerDiv}>
        <div className={styles.containerDiv} />
        <img className={styles.headerLogoIcon} alt="" src={headerLogo} />
      </div>
    </div>
  );
};
