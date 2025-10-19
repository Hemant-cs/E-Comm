import React from "react";
import {Link} from "react-router-dom";
import "./Nav.css";

function Nav(){
    return(
        <div className="NavBar">
            <ul>
                <li><Link to="/">All Product list Component</Link></li>
                <li><Link to="/add-product">Add Product</Link></li>
                <li><Link to="/update-product">Update Product</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/logout">Logout</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
            </ul>
        </div>
    )
}

export default Nav;