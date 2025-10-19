import './App.css';
import Footer from './Component/Footer';
import Nav from "./Component/Nav";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Signup from './Component/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<h1>Home Page</h1>}></Route>
          <Route path='/add-product' element={<h1>Add Product Component</h1>}></Route>
          <Route path='/update-product' element={<h1>Update Product Componet</h1>}></Route>
          <Route path='/profile' element={<h1>Profile Component</h1>}></Route>
          <Route path='/logout' element={<h1>Logout Component</h1>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
