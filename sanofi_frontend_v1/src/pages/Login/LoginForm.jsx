import { LoginSubmitButton } from "./LoginSubmitButton";
import styles from "../../css/LoginForm.module.css";

export const LoginForm = () => {
  return (
    <div className={styles.formDiv}>
      <div className={styles.rectangleDiv} />
      <div className={styles.esqueceuSuaSenha}>Esqueceu sua senha?</div>
      <LoginSubmitButton />
      <div className={styles.emailInputDiv}>
        <div className={styles.assistiveTextDiv}>Inactive</div>
        <img className={styles.trailingIcon} alt="" src="trailing-icon.svg" />
        <img
          className={styles.textFieldOutline}
          alt=""
          src="text-field-outline.svg"
        />
        <div className={styles.inputTextDiv}>Email</div>
      </div>
      <div className={styles.senhaInputDiv}>
        <div className={styles.assistiveTextDiv}>Inactive</div>
        <img className={styles.trailingIcon1} alt="" src="trailing-icon.svg" />
        <img
          className={styles.textFieldOutline}
          alt=""
          src="text-field-outline.svg"
        />
        <div className={styles.inputTextDiv1}>Senha</div>
      </div>
      <div className={styles.loginDiv}>Login</div>
    </div>
  );
};
