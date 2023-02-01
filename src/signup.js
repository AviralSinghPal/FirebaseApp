import React,{useState} from "react";

const Signup = (props) =>{
    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email);
    }


    return(<>
        <form onSubmit={handleSubmit}>
        <h1>SignUp </h1>
        <br/>
        <div>
            <label htmlFor="name">Name:</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Your Name"/>   
            <label htmlFor="email">Email:</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="your@email.com"/>        
            <label htmlFor="password">Password:</label>
            <input type = "password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="********"/>
        </div>
        <br/>
        <button type="submit" >Submit</button>
        <div>Already have a account <button onClick={() => props.onFormSwitch('login')}>Login</button> </div>
        </form>
        </>);
}

export default Signup;