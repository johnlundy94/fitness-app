import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { setUserSession } from "../service/AuthService";

const loginUrl = process.env.REACT_APP_LOGIN_URL;

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();
    if (username.trim() === "" || password.trim() === "") {
      setErrorMessage("Username and password are required");
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
      password: password,
    };

    try {
      const response = await axios.post(loginUrl, requestBody, requestConfig);
      setUserSession(response.data.user, response.data.token);
      navigate("/home");
      console.log(response);
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
};

export default SignIn;
