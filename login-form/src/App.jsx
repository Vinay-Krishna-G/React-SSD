import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [showPassword, setShowPassword] = React.useState(false);
  function showPasswordButton() {
    showPassword ? setShowPassword(false) : setShowPassword(true);
  }
  return (
    <div className="container">
      <h1>Welcome to My website</h1>
      <input placeholder="Email" />
      <div>
        <input
          placeholder="Password"
          type={showPassword ? "text" : "password"}
        />
        <button onClick={showPasswordButton}>
          {showPassword ? "Hide Password" : "Show Password"}
        </button>
      </div>
      <div>
        <button>Login</button>
        <button>SignUp</button>
      </div>
    </div>
  );
}

export default App;
