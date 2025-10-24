import {Link} from "react-router-dom";
import "./Nav.css";
import {useNavigate} from "react-router-dom";
import logo from "../Resource/e-comm.jpeg";

function Nav(){
    let isLoggedIn = localStorage.getItem("User");
    const navigate = useNavigate();
    const handleLogout = ()=>{
        localStorage.removeItem("User");
        navigate("/logout");
    }
    return(
        <div className="NavBar">
            <img alt="logo" style={{width: "15%", marginTop: "10px", cursor: "pointer"}} src={logo} onClick={()=>navigate("/")}/>
            {isLoggedIn ? 
            <div>
                    <ul>
                        <li><Link to="/add-product">Add Product</Link></li>
                        <li><Link to="/update-product">Update Product</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/logout" onClick={handleLogout}>Logout</Link></li>
                    </ul>
                </div> : 
                <div>
                    <ul>
                        <li><Link to="/signup">Login/Sign Up</Link></li>
                    </ul>
                </div>
            }
        </div>
    )
}

export default Nav;