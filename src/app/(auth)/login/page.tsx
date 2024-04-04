import LoginForm from "@/components/loginForm/LoginForm";
import { handleGithubLogin } from "@/lib/action";
import styles from "./login.module.css";
import ButtonGithub from "@/components/loginForm/ButtonGithub";

const LoginPage = () => {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <ButtonGithub />
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;