import { Link } from "react-router-dom";

function SignIn() {
  return (
    <>
      Sign In
      <br />
      Go to Home
      <br />
      <Link to="/home">Home</Link>
    </>
  );
}

export default SignIn;
