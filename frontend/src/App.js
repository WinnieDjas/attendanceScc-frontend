import './App.css';
import Navbar from "./Components/Navbar";
import {BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Home from "./View/Home"

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Home/>
      <Routes> 
        <Route  exact path="/"  component={Home}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
