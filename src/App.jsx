import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./store/authSlice";
import Login from "./Components/Login";
import TaskInput from "./Components/TaskInput";
import TaskList from "./Components/TaskList";
import "../src/index.css"

const App = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div className="app">
      {isAuthenticated ? (
        <>
          <div className="navbar">
            <h2>Welcome, {user}!</h2>
            <button
              className="logout-button"
              onClick={() => dispatch(logout())}
            >
              Logout
            </button>
          </div>
          <TaskInput />
          <TaskList />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
