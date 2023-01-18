import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage/LandingPage";
import Dashboard from "./pages/Dashboard/Dashboard";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Cocktail from "./pages/Cocktail/Cocktail";
import Error from "./pages/Error/Error";
import { useState, useEffect, createContext } from "react";
import { firebaseAuth } from "./Firebase";
import { onAuthStateChanged } from "@firebase/auth";

export const UserContext = createContext();

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [userName, setUserName] = useState("");
  const [cocktail, setCocktail] = useState("");

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        const name = user.displayName;
        setUserName(name);
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
  }, []);

  return (
    <div className="App">
      <UserContext.Provider
        value={{
          currentUser,
          setCurrentUser,
          userName,
          setUserName,
          cocktail,
          setCocktail
        }}
      >
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
      </UserContext.Provider>
    </div>
  );
}

export default App;
