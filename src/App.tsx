import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
      <Footer
        name="Contact Me"
        email="yuchenzhou2006@gmail.com"
        linkedinUrl="https://www.linkedin.com/in/yuchenz03/"
        githubUrl="https://github.com/yuchenz03"
        resumeUrl="https://drive.google.com/file/d/12ogzCdUSrAD9Laz_rDktk158WLNqUitn/view?usp=sharing"
      />
    </>
  );
}

export default App;
