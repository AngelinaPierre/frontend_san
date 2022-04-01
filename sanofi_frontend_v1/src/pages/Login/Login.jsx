import { LoginForm } from "./LoginForm";
import { SystemBarIcon } from "../../components/SystemBarIcon";
import styles from "./css/Login.module.css";

export const Login = () => {
  return (
    <div className={styles.login}>
      <img className={styles.backgroundImg} alt="" src="background@2x.png" />
      <LoginForm />
      <SystemBarIcon systemBar='system-bar.svg'/>
    </div>
  );
};
