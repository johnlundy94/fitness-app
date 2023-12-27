import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      Home
      <br />
      Go back to welcome page
      <br />
      <Link to="/">Log Out</Link>
    </>
  );
}

export default Home;
