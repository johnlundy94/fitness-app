import { Link } from "react-router-dom";

function SignUp() {
  return (
    <>
      Sign Up
      <br />
      Move onto the questions
      <br />
      <Link to="/questions">Questions</Link>
    </>
  );
}

export default SignUp;
