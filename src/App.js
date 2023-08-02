
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
import { BrowseMashups } from './pages/BrowseMashups';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/MUcv.com/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/MUcv.com/About" element={<About />} />
          <Route path="/MUcv.com/Contact" element={<Contact />} />
          <Route path="/MUcv.com/Mashup" element={<Mashup />} />
          <Route path="/MUcv.com/Exhibit" element={<Exhibit />} />
          <Route path="/MUcv.com/BrowseMashups" element={<BrowseMashups/>} />
          <Route path="/MUcv.com/ViewMashups/:mashup" element={<ViewMashup />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
