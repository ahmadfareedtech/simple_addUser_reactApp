import styles from "./UserInput.module.css";

import { useState } from "react";
import Button from "../UI/Buttons/Button";
import Card from "../UI/Card";

const UserInput = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(0);

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const submitUserHandler = (event) => {
    event.preventDefault();

    if (username.trim().length === 0) return;

    const newUser = {
      id: Math.random().toString(),
      username: username,
      age: +age,
    };

    props.onAddUser(newUser);
    setUsername("");
    setAge(0);
  };

  return (
    <Card>
      <form onSubmit={submitUserHandler}>
        <div className={styles["form-controls"]}>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={usernameChangeHandler}
          />

          <label>Age (Years)</label>
          <input
            type="number"
            value={age}
            min="1"
            step="1"
            onChange={ageChangeHandler}
          />
        </div>
        <Button />
      </form>
    </Card>
  );
};

export default UserInput;
