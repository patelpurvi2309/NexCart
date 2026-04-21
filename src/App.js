import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom"
import Header from './Component/Header';
import Shop from './Component/Shop';
import Order from './Component/Order';
import About from './Component/About';
import Contact from './Component/Contact';
import Addtocart from './Component/Addtocart';
import Catwise from './Component/Catwise';
import Home from './Component/Home';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/order" element={<Order />} />
        <Route path="/Addtocart" element={<Addtocart />} />
        <Route path="/catproduct/:catId" element={<Catwise />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
