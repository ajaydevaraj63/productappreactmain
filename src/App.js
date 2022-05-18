import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Addproduct from './components/Addproduct';
import Search from './components/Search';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import View from './components/View';

function App() {
  return (
   <>
  
  <BrowserRouter>
  <Routes>
  <Route path="/" exact element={<Addproduct/>}></Route>
  <Route path="/search" exact element={<Search/>}></Route>
  <Route path="/view" exact element={<View/>}></Route>
  </Routes>
  </BrowserRouter>
   
  </>
  );
}

export default App;
