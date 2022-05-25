import { useState } from "react";
import "./App.css";
import UserInput from "./components/UserInput/UserInput";
import UserList from "./components/Users/UserList";

const dummy_users = [
  {
    id: "u11232",
    username: "Ahmad",
    age: 26,
  },

  {
    id: "u212123",
    username: "Afaq",
    age: 24,
  },
];

function App() {
  const [users, setUsers] = useState(dummy_users);

  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
  };

  const deleteUserHandler = (id) => {
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => user.id !== id);
    });
  };

  return (
    <div>
      <UserInput onAddUser={addUserHandler} />
      {users.length > 0 && (
        <UserList onDelete={deleteUserHandler} users={users} />
      )}
    </div>
  );
}

export default App;
