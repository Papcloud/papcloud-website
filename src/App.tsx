import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Playground from "./components/Playground";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/playground" element={<Playground />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
