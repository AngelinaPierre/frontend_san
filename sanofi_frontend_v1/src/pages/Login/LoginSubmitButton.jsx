import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../css/SubmitButton.module.css";

export const LoginSubmitButton = () => {
  const navigate = useNavigate();

  const onSubmitButtonContainerClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  return (
    <div
      className={styles.submitButtonDiv}
      onClick={onSubmitButtonContainerClick}
    >
      <div className={styles.textDiv}>
        <div className={styles.labelDiv}>ENTRAR</div>
      </div>
    </div>
  );
};
