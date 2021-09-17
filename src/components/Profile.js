import React  , {useState,useEffect}from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import ProfileCard from './ProfileCard';



const Profile = ({match}) => {
    const [user, setUser] = useState([]);
    const fetchUser =()=>{
        // .get(`https://jsonplaceholder.typicode.com/users/?id=${match.params.id}`)
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then((res)=>setUser(res.data[0]))
        .catch((err)=>console.log(err));  
    };
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then((res)=>setUser(res.data))
        .catch((err)=>console.log(err));  
    console.log(user)
    },[]);

   
    return (
        <div className="container">
            {user.map((el,i)=><ProfileCard key={i}  {...el}> </ProfileCard>)}
        </div>
    )
}

export default Profile
