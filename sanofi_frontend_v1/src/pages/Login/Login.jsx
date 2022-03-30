import { LoginForm } from "./LoginForm";
import { SystemBar } from "../../components/SystemBar/SystemBar";
import styles from "./css/Login.module.css";

export const Login = () => {
  return (
    <div className={styles.loginDiv}>
      <img className={styles.backgroundIcon} alt="" src="background@2x.png" />
      <LoginForm />
      <SystemBar />
    </div>
  );
};
