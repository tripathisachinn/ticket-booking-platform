import './App.css';
import Header from './components/partials/Header';
import Footer1 from './components/partials/Footer1';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Header />
      <Routes>
        <Route path = "/" element={<Home />} />
        <Route path = "/about" element={<About />} />
        <Route path = "/contact" element={<Contact />} />
      </Routes>
      <Footer1 />
      </BrowserRouter>
    </div>
  );
}

export default App;
