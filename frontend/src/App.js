import './App.css';
import Footer from './Component/Footer';
import Nav from "./Component/Nav";
import {BrowserRouter,Routes, Route} from "react-router-dom";
import Signup from './Component/Signup';
import PrivateComponent from './Component/PrivateComponent';
import { UserProvider } from './Component/UserDetails';
import Profile from './Component/Profile';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
          <Nav/>
          <Routes>
            <Route element={<PrivateComponent/>}>
              <Route path='/' element={<h1>Home Page</h1>}></Route>
              <Route path='/add-product' element={<h1>Add Product Component</h1>}></Route>
              <Route path='/update-product' element={<h1>Update Product Componet</h1>}></Route>
              <Route path='/profile' element={<Profile />}></Route>
              <Route path='/logout' element={<h1>See You Soon!</h1>}></Route>
            </Route>
            <Route path='/signup' element={<Signup/>}></Route>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
