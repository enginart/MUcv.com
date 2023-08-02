
import './App.css';
import { Routes, Route } from "react-router-dom";
import About from './pages/About';
import Contact from './pages/Contact';
import Exhibit from './pages/Exhibit';
import Home from './pages/Home';
import Mashup from './pages/Mashup';
import Layout from './pages/Layout';
import { NoPage } from './pages/NoPage';
import ViewMashup from './pages/ViewMashup';
import { BrowseMashups } from './pages/BrowseMashups';
import Footer from './pages/Footer';

function App() {
  return (
    <>
      <Layout />
      <Routes>
      <Route path="" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Mashup" element={<Mashup />} />
      <Route path="/Exhibit" element={<Exhibit />} />
      <Route path="/BrowseMashups" element={<BrowseMashups/>} />
      <Route path="/ViewMashups/:mashup" element={<ViewMashup />} />
      <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
