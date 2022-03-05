import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import LandingPage from './pages/LandingPage';
import SignIn from './pages/SignIn';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Routes>
            <Route path='/' exact component={LandingPage} />
            <Route path='./pages/SignIn' exact component={SignIn} />
          </Routes>
      </Router>

    </div>
  );
}

export default App;
