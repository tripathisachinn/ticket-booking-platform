import logo from './logo.svg';
import './App.css';
import Header from './components/partials/Header';
import Footer1 from './components/partials/Footer1';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">

      <Header />
      <Home />
      <Footer1 />
      
    </div>
  );
}

export default App;
