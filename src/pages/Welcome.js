import { Link } from "react-router-dom";

function Welcome() {
  return (
    <>
      <h1>Welcome</h1>
      <div>
        Sign in or Sign up
        <br />
        <Link to="/signin">Sign In</Link>
        <br />
        <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
}

export default Welcome;
