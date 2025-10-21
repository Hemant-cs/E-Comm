import "./Signup.css";
import {useEffect, useState, useContext} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { UserContext } from "./UserDetails";


const Signup = ()=>{
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {setUserData} = useContext(UserContext);
    const navigate = useNavigate();
    useEffect(()=>{
        const user = localStorage.getItem("User");
        if(user){
            setUserData(user);
            navigate("/");
        }
    },[navigate, setUserData]);
    const handleSignUp = async ()=>{
        try {
            const signedUp = await axios.post("http://localhost:8080/signup",{
                fullName,
                email,
                password
            });
            console.log("signedUp", signedUp);
            if(signedUp.status === 200){
                setFullName("");
                setEmail("");
                setPassword("");
                window.alert("Register successfully!");
                const userData = {...signedUp.data};
                delete userData.password;
                localStorage.setItem("User",JSON.stringify(userData));
                setUserData(userData);
                navigate("/");
            }
        } catch (error) {
            console.error(error);
            window.alert("Signup failed");
        }
    }
    return(
        <div className="SignUp">
            <h1>Register Your Self....!</h1>
            <input type="text" placeholder="Enter your Full Name" value={fullName} onChange={e=>setFullName(e.target.value)} />
            <input type="email" placeholder="Enter your Email" value={email} onChange={e=>setEmail(e.target.value)}/>
            <input type="password" placeholder="Enter your Password" value={password} onChange={e=>setPassword(e.target.value)}/>
            <button type="button" onClick={handleSignUp}>Sign Up</button>
        </div>
    )
}

export default Signup;