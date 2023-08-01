
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/About';
import Contact from './pages/Contact';
import Exhibit from './pages/Exhibit';
import Home from './pages/Home';
import Mashup from './pages/Mashup';
import Layout from './pages/Layout';
import { NoPage } from './pages/NoPage';
import ViewMashup from './pages/ViewMashup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Mashup" element={<Mashup />} />
          <Route path="/Exhibit" element={<Exhibit />} />
          <Route path="/ViewMashups/:mashup" element={<ViewMashup />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
