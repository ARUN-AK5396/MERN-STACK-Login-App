import {useState} from 'react'
import './Styles.css'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';
function SignUp() {
    const [name, setName] = useState();
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [confirmPassword,setConfirmPassword] = useState();
    const navigate = useNavigate();

    const handleInput = (e) => {
        e.preventDefault()

        if(password != confirmPassword){
            alert("Password did not match")
            return;
        }
        axios.post('http://localhost:3001/signup',{name,email,password})
        .then(result =>{
            console.log(result)
            alert("Your data was stored successfully")
            navigate('/home')
        } )
        .catch(err => {
            console.log(err)
            alert("Something went wrong !! Try again later")
        })
        
    }
  return (
    <div className='main_component'>
        <h2 style={{textAlign:'center'}}>SignUp page</h2>
        <form onSubmit={handleInput} className='form_tag'>
            <input 
                type='text'
                required
                name='name' 
                placeholder='Enter your name'
                onChange={(e) => setName(e.target.value)}
            />
            <input 
                type='email' 
                required
                name='email' 
                placeholder='Enter your Email' 
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                type='password'
                required 
                name='password' 
                placeholder='Enter you password' 
                onChange={(e) => setPassword(e.target.value)}
            />
            <input 
                type='password' 
                name='confirmPassword' 
                placeholder='Enter confirm password'
                onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button className='link'  type='submit' >Submit</button>
            <h4>Already have an account?? <Link to='/login'> Sign in</Link></h4>
        </form>
    </div>
  )
}

export default SignUp;