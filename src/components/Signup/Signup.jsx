import Input from "../Input/Input";
import Button from "../Button/Button";
import styles from "./Signup.module.css";

const Signup = () => {
  return (
    <div className={styles.main}>
      <div>
        <h4>SignUp Here</h4>
      </div>
      <div>
        <Input
          type="text"
          placeholder="Enter Name"
          className={styles.inputname}
        />
      </div>
      <div>
        <Input
          type="email"
          placeholder="Enter Email"
          className={styles.inputname}
        />
      </div>
      <div>
        <Input
          type="password"
          placeholder="Enter password"
          className={styles.inputname}
        />
      </div>
      <div>
        <Input
          type="password"
          placeholder="Confirm password"
          className={styles.inputname}
        />
      </div>
      <div style={{ marginTop: "20px" }}>
        <Button className="btn btn-dark" text="Login" />
      </div>
    </div>
  );
};

export default Signup;
