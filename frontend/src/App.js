import './App.css';
import Footer from './Component/Footer';
import Nav from "./Component/Nav";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Signup from './Component/Signup';
import PrivateComponent from './Component/PrivateComponent';
import Profile from './Component/Profile';
import Logout from './Component/Logout';
import AddProduct from './Component/AddProduct';
import Home from './Component/Home';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Nav/>
          <Routes>
            <Route element={<PrivateComponent/>}>
              <Route path='/' element={<Home />}></Route>
              <Route path='/add-product' element={<AddProduct />}></Route>
              <Route path='/update-product' element={<h1 style={{marginTop: "100px", fontStyle: "italic", marginLeft: "40%"}}>Update Product Componet</h1>}></Route>
              <Route path='/profile' element={<Profile />}></Route>
              <Route path='/logout' element={<Logout />}></Route>
            </Route>
            <Route path='/signup' element={<Signup/>}></Route>
          </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
