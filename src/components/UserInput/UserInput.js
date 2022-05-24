import styles from "./UserInput.module.css";

import Button from "./UI/Buttons/Button";

const UserInput = () => {
  return (
    <form>
      <div className={styles["form-controls"]}>
        <label>Username</label>
        <input type="text" />

        <label>Age (Years)</label>
        <input type="number" min="1" step="1" />
      </div>
      <Button />
    </form>
  );
};

export default UserInput;
