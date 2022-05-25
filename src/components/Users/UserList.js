import User from "./User";
import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <ul className={styles["user-list"]}>
      {props.users.map((user) => (
        <User onDeleteUser={props.onDelete} key={user.id} user={user} />
      ))}
    </ul>
  );
};

export default UserList;
