import React from 'react'
import {Link} from'react-router-dom'
import { useEffect,useState} from 'react';
import axios from 'axios';

const Customer = () => {

    // const [users, setUsers] = useState([]);
  const[myvariable,setMyvariable] = useState("")
  const token = localStorage.getItem('token');

    useEffect( () => {
      // Fetch data from API using the token in local storage
     

    console.log(token);
      axios.post('http://localhost:8080/api/v1/customer', { key: 'value' }, {
          headers: {
            'Authorization': `Bearer ${token}`,
          }
        })
          .then(response => {
            // Handle the successful response here

            setMyvariable((response.data).toString());
            console.log(response.data);
          })
          .catch(error => {
            // Handle errors here
            console.error('Error fetching data:', error);
          });

     
    }, []);


    const handlelogout = () =>{

      axios.post('http://localhost:8080/api/v1/auth/logout', { key: 'value' }, {
        headers: {
          
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => {
          // Handle the successful response here

          localStorage.removeItem('token');
          console.log(response.data);


        })
        .catch(error => {
          // Handle errors here
          console.error('Error fetching data:', error);
        });


    }


  return (
    <div className='container'>
      <h1>Welcome Customer</h1>

        <div className="col">
            <p>Response from the Customer Post : {myvariable} </p>
        </div>

        <div className="col">
            <Link to="/" onClick={handlelogout} type="button" className="btn btn-warning">Log out</Link>
        </div>

    </div>
  )
}

export default Customer
