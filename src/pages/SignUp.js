import { Link } from "react-router-dom";
import { useState } from "react";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Submitted");
  };

  return (
    <>
      Move onto the questions
      <br />
      <Link to="/questions">Questions</Link>
      {/* Form */}
      <form onSubmit={submitHandler}>
        <h5>Sign Up</h5>
        Name:{" "}
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />{" "}
        <br />
        Email:{" "}
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />{" "}
        <br />
        Username:{" "}
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />{" "}
        <br />
        Password:{" "}
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />{" "}
        <br />
        <input type="submit" value="Register" />
      </form>
    </>
  );
}

export default SignUp;
