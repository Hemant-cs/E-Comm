import {Link} from "react-router-dom";
import "./Nav.css";
import {useNavigate} from "react-router-dom";

function Nav(){
    let isLoggedIn = localStorage.getItem("User");
    const navigate = useNavigate();
    const handleLogout = ()=>{
        localStorage.removeItem("User");
        navigate("/logout");
    }
    return(
        <div className="NavBar">
            <ul>
                <li><Link to="/">All Product list Component</Link></li>
                <li><Link to="/add-product">Add Product</Link></li>
                <li><Link to="/update-product">Update Product</Link></li>
                {isLoggedIn && <li><Link to="/profile">Profile</Link></li>}
                {isLoggedIn ? 
                    <li><Link to="/logout" onClick={handleLogout}>Logout</Link></li> :
                    <li><Link to="/signup">Login/Sign Up</Link></li>
                }
            </ul>
        </div>
    )
}

export default Nav;