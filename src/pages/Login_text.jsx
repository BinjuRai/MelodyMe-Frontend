import React,{useEffect, useState} from 'react'

export default function Login_text() {
     const [message,setMessage] = useState("Default data")
   const [name, setName] = useState("name")
    const [email, setEmail] = useState("email")
    const [password, setPassword] =useState("password")
     
    const updateCurrentData = () =>{
        setData("New data")
    }
     useEffect(
            ()=> {
                setMessage("Enter your details")
            },
            []
        )
    useEffect(
        () => {
            if(name === "Salin"){
                setMessage("Welcome salin");
            }
        },
        [name] 
    )
    
    const handleName = (e) => setName(e.target.value) 
    const handleEmail = (e) => setEmail(e.target.value) 
    const handlePassword = (e) => setPassword(e.target.value) 
    const handleSubmit = (e)=> {
        if(!name|| !email || !password){
            setMessage("Provide all informaton")
        }else{
            setMessage("Congratulation")
        }
    }
    return (
    <div>
        {message}
        <input onChange={handleName}></input>
        <input onChange={handleEmail}></input>
        <input onChange={handlePassword}></input>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
