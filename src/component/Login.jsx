import React from 'react'
import jwtDecode from 'jwt-decode';
import {useState} from 'react'
import { useHistory } from 'react-router-dom';
const Login = () => {
  
  const history = useHistory();
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');


    const handleLogin = async () => {
        
           // Perform your login/authentication API call here and retrieve the JWT token
           const response = await fetch('http://localhost:8080/api/v1/auth/authenticate', {
            method: 'POST',
            body: JSON.stringify({ email, password }), // Include the username and password in the request body
            headers: {
              'Content-Type': 'application/json',
            },
          });
      
          if (response.ok) {
            const data = await response.json();



            console.log(data.access_token);
            console.log("success authenticated");


          
  
  
        const token = data.access_token; // Replace this with the actual property name of your JWT token
            
         // Store the token in local storage
           localStorage.setItem('token', token);

          //   // Decode the JWT token to retrieve user information, including the role
            const decodedToken = jwtDecode(token);

            console.log(decodedToken);

            const userRole = decodedToken.role; // Assuming 'roles' is the property containing the user's role
            
            console.log(userRole);


            if(userRole==="ADMIN"){
              history.push('/admin')
            }
            else if(userRole==="MANAGER"){
              history.push('/manager')
            }
            else if(userRole==="CUSTOMER"){
              history.push('/customer')
            }
            // Navigate to the appropriate page based on the user's role
            // if (userRole.includes('admin')) {
            //   history.push('/admin'); // Replace '/admin' with the path to the admin page
            // } else {
            //   history.push('/user'); // Replace '/user' with the path to the user page
            // }
          } else {
            // Handle login failure
          }


    }




  return (
    <div>
      <div className="container">
        <h1>Log in</h1>

            <div className="mb-3">
                    <label for="lastname" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3 row">
                    <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword" onChange={(e) => setPassword(e.target.value)} />
                    </div>
            </div>

            <button type="button" className="btn btn-success" onClick={handleLogin}>Register</button>


      </div>
    </div>
  )
}

export default Login
