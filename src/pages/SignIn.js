import { Link } from "react-router-dom";
import { useState } from "react";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const submitHandler = (event) => {
    event.preventDefault();
    if (username.trim() === "" || password.trim() === "") {
      setErrorMessage("Username and password are required");
      return;
    }

    console.log("Logged In");
  };

  return (
    <>
      Go to Home
      <br />
      <Link to="/home">Home</Link>
      <br />
      <form onSubmit={submitHandler}>
        <h5>Sign In</h5>
        Username:{" "}
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <br />
        Password:{" "}
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <input type="submit" value="Sign In" />
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
}

export default SignIn;
