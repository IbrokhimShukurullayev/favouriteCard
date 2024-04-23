import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home'
import Single from './pages/single/Single';

import {Routes , Route} from "react-router-dom"
import Favourite from './pages/favouriteProduct/Favourite';

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single/:id" element={<Single />} />
        <Route path="/favourite" element={<Favourite />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
