import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/StageButtons.module.css";

export const StageButtons = () => {
  const navigate = useNavigate();

  const onButtonContainer1Click = useCallback(() => {
    navigate("/produtoprocessosdesenvolvimento");
  }, [navigate]);

  return (
    <div className={styles.buttonsDiv}>
      <div className={styles.buttonDiv}>
        <div className={styles.labelDiv}>Button</div>
      </div>
      <div className={styles.buttonDiv1} onClick={onButtonContainer1Click}>
        <div className={styles.labelDiv}>details</div>
      </div>
    </div>
  );
};
