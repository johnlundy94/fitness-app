import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { setUserSession } from "../service/AuthService";

const registerUrl = process.env.REACT_APP_REGISTER_URL;

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();
    if (
      username.trim() === "" ||
      email.trim() === "" ||
      name.trim() === "" ||
      password.trim() === ""
    ) {
      setErrorMessage("All fields are required");
      return;
    }
    setErrorMessage(null);
    const requestConfig = {
      headers: {
        "x-api-key": process.env.REACT_APP_X_API_KEY,
      },
    };

    const requestBody = {
      username: username,
      email: email,
      name: name,
      password: password,
    };

    try {
      const response = await axios.post(
        registerUrl,
        requestBody,
        requestConfig
      );
      setUserSession(response.data.user, response.data.token);
      navigate("/questions");
    } catch (error) {
      if (
        error.response &&
        (error.response.status === 401 || error.response.status === 403)
      ) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage("Server not responding");
      }
    }
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
        <input type="submit" value="Sign Up" />
      </form>
      <br />
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
}

export default SignUp;
