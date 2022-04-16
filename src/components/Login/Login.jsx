import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <div>
        <h3>Login Form</h3>
      </div>
      <div style={{ marginTop: "20px" }}>
        <Input
          type="text"
          placeholder="Enter Username"
          className={styles.inputUsername}
        />
      </div>
      <div style={{ marginTop: "20px" }}>
        <Input
          type="password"
          placeholder="Enter Password"
          className={styles.inputUsername}
        />
      </div>
      <div style={{ marginTop: "20px" }}>
        <Button className="btn btn-primary" text="Login" />
      </div>
    </div>
  );
};

export default Login;
