import "./Signup.css";
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const Login = ()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    useEffect(()=>{
        const user = localStorage.getItem("User");
        if(user){
            navigate("/");
        }
    },[navigate]);
    const handleLogin = async ()=>{
        try {
            const loggedIn = await axios.post("http://localhost:8080/login",{
                email,
                password
            });
            console.log("loggedIn", loggedIn);
            if(loggedIn.status === 200){
                const userData = {...loggedIn.data.userDetails};
                setEmail(userData.email);
                window.alert(`Welcome ${userData.fullName}!`);
                localStorage.setItem("User",JSON.stringify(userData));
                navigate("/");
            }
        } catch (error) {
            console.log(error);
            let err = error.response.data;
            if(err.status === 400){
                window.alert("logged in fail due to "+err.message);
            }else{
                window.alert("Logged In failed");
            }
        }
    }
    return(
        <div className="SignUp">
            <h1>Login....!</h1>
            <input type="email" placeholder="Enter your Email" value={email} onChange={e=>setEmail(e.target.value)}/>
            <input type="password" placeholder="Enter your Password" value={password} onChange={e=>setPassword(e.target.value)}/>
            <button type="button" onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login;