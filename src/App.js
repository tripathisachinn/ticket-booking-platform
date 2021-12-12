import './App.css';
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Header />
      <Routes>
        <Route path = "/" element={<Home />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
