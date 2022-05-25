import styles from "./User.module.css";

const User = (props) => {
  const onClickHandler = () => {
    props.onDeleteUser(props.user.id);
  };

  return (
    <li onClick={onClickHandler}>
      <div className={styles.user}>
        {props.user.username} ( {props.user.age} )
      </div>
    </li>
  );
};

export default User;
