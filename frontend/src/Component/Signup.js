import "./Signup.css";
import {useState} from "react";

const Signup = ()=>{
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSignUp = ()=>{
        console.log(fullName, email, password);
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