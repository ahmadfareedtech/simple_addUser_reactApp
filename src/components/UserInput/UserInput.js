import styles from "./UserInput.module.css";

import React, { useState } from "react";
import Button from "../UI/Buttons/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

const UserInput = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(0);
  const [error, setError] = useState();

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const submitUserHandler = (event) => {
    event.preventDefault();

    if (username.trim().length === 0 || age < 1) {
      setError({
        title: "An error Occured!",
        message: "Enter a valid name or Age (non-empty)",
      });
      return;
    }

    // CREATING NEW USER TO PASS TO APP COMPONENT
    const newUser = {
      id: Math.random().toString(),
      username: username,
      age: +age,
    };

    props.onAddUser(newUser);
    setUsername("");
    setAge(0);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
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
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default UserInput;
