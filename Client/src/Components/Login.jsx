import {useState} from 'react'
import {Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {

  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const navigation = useNavigate();

    const handleInput = (e) => {
       e.preventDefault()
      axios.post('http://localhost:3001/login',{email,password})
      .then(result => {
        if(result.data === 'Success'){
          alert("Your redirected to Home screen");
          navigation('/home')
        }
        else if(result.data === 'You have entered wrong password'){
          alert("You have entered Wrong password !!! try again")
        }
        else if(result.data === "No record exist"){
          alert("No record found!! Sign up first.")
        }
        else{
          alert("Something went wrong try again later")
        }
      })
    }

  return (
    <div className='main_component'>
      <h2 style={{textAlign:'center'}}>Login Page</h2>
        <form onSubmit={handleInput} className='form_tag'>
            <input type='email' name='email' placeholder='Enter your Email' onChange={(e) => setEmail(e.target.value) }  />
            <input type='password' name='pass' placeholder='Enter you password' onChange={(e) => setPassword(e.target.value)} />

            <button className='link' type='submit' >Login</button>
            <h4>You dont have account?? <Link to='/'> Signup</Link></h4>
        </form>
    </div>
  )
}

export default Login