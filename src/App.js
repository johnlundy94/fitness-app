import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Questions from "./pages/Questions";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route
            path="/signin"
            element={<PublicRoute element={<SignIn />} />}
          />
          <Route
            path="/signup"
            element={<PublicRoute element={<SignUp />} />}
          />
          <Route path="/home" element={<PrivateRoute element={<Home />} />} />
          <Route
            path="/questions"
            element={<PrivateRoute element={<Questions />} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
