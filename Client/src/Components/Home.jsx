import { Link } from "react-router-dom"
import React,{useState} from "react"
import axios from 'axios'

function Home() {

  const [userDetails,setUserDetails] = useState()
  const email = "user@gmail.com";
  const fetchUserDetails = async () => {
    try{
      const response = await axios.post('http://localhost:3001/home', {email}).then(result => console.log(result))
      setUserDetails(response.data)
  
    }
    catch(error){
      console.log(error)
    }
  }
  React.useEffect(() => {
    fetchUserDetails();
  },[]);
  return (
    <div>
     {userDetails ? (
       <div>
         Welcome {userDetails.name}
         {userDetails.email}
       </div>
     ) : (
      <div> Loading...</div>
     )
    }
      <Link to="/"> LogOut</Link>
    </div>
  )
}

export default Home