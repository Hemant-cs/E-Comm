import {Link} from "react-router-dom";
import {useContext, useEffect} from "react";
import "./Nav.css";
import { UserContext } from "./UserDetails";
import {useNavigate} from "react-router-dom";

function Nav(){
    // let isLoggedIn = localStorage.getItem("User");
    const {userData} = useContext(UserContext);
    const {setUserData} = useContext(UserContext);
    const navigate = useNavigate();
    const handleLogout = ()=>{
        localStorage.removeItem("User");
        setUserData(null);
        navigate("/logout");
    }
    useEffect(()=>{
        const userDetails = localStorage.getItem("User");
        if(userDetails){
            setUserData(userDetails);
        }
    },[setUserData])
    return(
        <div className="NavBar">
            <ul>
                <li><Link to="/">All Product list Component</Link></li>
                <li><Link to="/add-product">Add Product</Link></li>
                <li><Link to="/update-product">Update Product</Link></li>
                {userData && <li><Link to="/profile">Profile</Link></li>}
                {userData ? 
                    <li><Link to="/logout" onClick={handleLogout}>Logout</Link></li> :
                    <li><Link to="/signup">Login/Sign Up</Link></li>
                }
            </ul>
        </div>
    )
}

export default Nav;