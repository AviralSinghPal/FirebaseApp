import React,{useState} from "react";

const Login = (props) => {
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');

const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(email)
}

    return (
    <>
    <form onSubmit={handleSubmit}>
    <h1>Login</h1>
    <br/>
    <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="you@email.com"/>        
        <label>Password:</label>
        <input type = "password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="********"/>
    </div>
    <br/>
    <button type="submit" >Login</button>
    <div>Don't have an account<button onClick={()=>props.onFormSwitch('signup')}>SignUp</button></div>
    </form>
    </>
    );
}

export default Login;