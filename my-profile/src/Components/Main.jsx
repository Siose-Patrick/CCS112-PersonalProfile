import Navbar from "./NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Contact from './Pages/Contact';

function Main() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/skills" Component={Skills} />
          <Route path="/contact" Component={Contact} />
        </Routes>
      </Router>
    </>
  );
}

export default Main;
