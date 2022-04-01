    import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/CardButtons.module.css";

export const CardButtons = ({ label, icons }) => {
  const navigate = useNavigate();

  const onButtonContainer2Click = useCallback(() => {
    navigate("/productsprocess");
  }, [navigate]);

  return (
    <div className={styles.buttonsDiv}>
      <div className={styles.buttonDiv} onClick={onButtonContainer2Click}>
        <div className={styles.labelDiv}>{label}</div>
      </div>
      <div className={styles.buttonDiv1}>
        <div className={styles.labelDiv}>BUTTON</div>
      </div>
      <img className={styles.icons} alt="" src={icons} />
    </div>
  );
};
