import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./store/authSlice";
import Login from "./Components/Login";
import TaskInput from "./Components/TaskInput";
import TaskList from "./Components/TaskList";

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
  style={{
    padding: "6px 12px",
    backgroundColor: "#ff4757",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "bold",
    transition: "0.3s",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
  }} 
  onMouseOver={(e) => e.target.style.backgroundColor = "#e84118"}
  onMouseOut={(e) => e.target.style.backgroundColor = "#ff4757"}
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
