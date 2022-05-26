import Card from "../UI/Card";
import User from "./User";
import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card>
      <ul className={styles["user-list"]}>
        {props.users.map((user) => (
          <User onDeleteUser={props.onDelete} key={user.id} user={user} />
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
