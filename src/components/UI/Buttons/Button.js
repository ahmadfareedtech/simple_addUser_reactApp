import styles from "./Button.module.css";

const Button = () => {
  return (
    <button className={styles.btn} type="submit">
      Add User
    </button>
  );
};

export default Button;
