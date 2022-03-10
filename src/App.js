import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import LandingPage from './pages/LandingPage/LandingPage';
import PhiView from './pages/PhiView/PhiView';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Error from './pages/Error/Error';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
          <Routes>
            <Route path='/signin' element={<SignIn />} />
            <Route path='/philosophers/:id' element={<PhiView />} />
            <Route path='/' exact element={<LandingPage />} />
            <Route path='/signup' exact element={<SignUp />} />
            <Route path='*' element={<Error />} />
          </Routes>
      </Router>

    </div>
  );
}

export default App;
