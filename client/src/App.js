import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Cocktail from "./pages/Cocktail/Cocktail";
import Error from "./pages/Error/Error";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/signin"
            element={<SignIn />}
          />
          <Route
            path="/"
            exact
            element={<LandingPage />}
          />
          <Route
            path="/signup"
            exact
            element={<SignUp />}
          />
          <Route
            path="/dashboard"
            exact
            element={<Dashboard />}
          />
          <Route
            path="/cocktail/:id"
            exact
            element={<Cocktail />}
          />
          <Route
            path="*"
            element={<Error />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
