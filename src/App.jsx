import { useState } from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css'
import HomePage from './modules/HomePage.jsx';
import TopicsPage from './modules/TopicsPage.jsx';
import GalleryPage from './modules/GalleryPage.jsx';
import ContactPage from './modules/ContactPage.jsx';
import OrderPage from './modules/OrderPage.jsx';

import Navigation from './modules/Navigation.jsx';
import { PiPersonSimpleHikeFill } from "react-icons/pi";
import products from './data/products.js';

import AutosPage from './modules/autos/AutosPage.jsx';
import CreateAutos from './modules/autos/CreateAutos.jsx';
import UpdateAutos from './modules/autos/UpdateAutos.jsx';


function App() {
const [auto, setAuto] = useState([]);

  return (
    <>
    <div>
      <header>
        <h1>Anthony Stark<PiPersonSimpleHikeFill /></h1>
        <p>Web Development Portfolio</p>
      </header>

      <Router>
      <Navigation />
        <main>
        <section>
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path='/topics' element={<TopicsPage />}></Route>
            <Route path='/gallery' element={<GalleryPage />}></Route>
            <Route path='/contact' element={<ContactPage />}></Route>
            <Route path='/order' element={<OrderPage products={products} />}></Route>

            <Route path="/autosPage" element={<AutosPage setAuto={setAuto} />} />
            <Route path="/create" element={<CreateAutos />} />
            <Route path='/updateAuto' element={<UpdateAutos autoToUpdate={auto}/>} />

        </Routes>
        </section>
        </main>
      </Router>

      <footer>
          <p>&copy; {new Date().getFullYear()} Anthony Stark</p>
      </footer>
    </div>
    </>
  );
}

export default App
