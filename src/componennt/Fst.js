import React, { useState } from "react";
import Welcome from "./welcome";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginClick = () => {
    if (username === "correctUsername" && password === "correctPassword") {
      setLoggedIn(true);
    } else {
      alert("Invalid username or password");
    }
  };

  if (loggedIn) {
  //  return console.log("ghnd mra");
    return <Welcome></Welcome>;
  }

  return (
    <div>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <button onClick={handleLoginClick}>Login</button>
    </div>
  );
}

export default Login;
