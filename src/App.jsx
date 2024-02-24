import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./containers/Home";
import Navbar from "./components/Navbar/nav";
import About from "./containers/About/About";
import Contact from "./containers/Contact/Contact";
import Portfolio from "./containers/Portfolio/Portfolio";
import Skills from "./containers/Skills/Skills";
// import Resume from "./containers/Resume/Resume";

function App() {
  return (
    <div className="App">
      {/*particles js */}

      {/*navbar*/}
      <Navbar />
      {/* main page content*/}
      <div className="App_main-page-content">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/about" element={<About />} />
        {/* <Route index path="/resume" element={<Resume />} /> */}
        <Route index path="/skills" element={<Skills />} />
        <Route index path="/portfolio" element={<Portfolio />} />
        <Route index path="/contact" element={<Contact />} />
      </Routes>
      </div>

     
    </div>
  );
}

export default App;
