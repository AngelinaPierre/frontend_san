import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import styles from "./css/LoginForm.module.css";

export const LoginForm = () => {
  const navigate = useNavigate();

  const onSubmitButtonContainerClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  return (
    <form className={styles.form}>
      <div className={styles.rectangleDiv} />
      <div className={styles.esqueceuSuaSenha}>Esqueceu sua senha?</div>
      <div
        className={styles.submitButtonDiv}
        onClick={onSubmitButtonContainerClick}
      >
        <div className={styles.textDiv}>
          <div className={styles.labelDiv}>Login</div>
        </div>
      </div>
      <TextField
        className={styles.emailInputTextField}
        sx={{ width: 332.1206359863281 }}
        color="secondary"
        variant="outlined"
        type="text"
        label="Email"
        placeholder="Type.."
        size="medium"
        margin="none"
      />
      <TextField
        className={styles.senhaInputTextField}
        sx={{ width: 332.1206359863281 }}
        color="secondary"
        variant="outlined"
        type="text"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility">
                <Icon>visibility</Icon>
              </IconButton>
            </InputAdornment>
          ),
        }}
        label="Password"
        placeholder="Type..."
        size="medium"
        margin="none"
        required
      />
      <div className={styles.loginDiv}>Login</div>
    </form>
  );
};
