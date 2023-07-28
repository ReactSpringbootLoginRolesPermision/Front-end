import React from 'react'
import { useHistory } from 'react-router-dom';
import { useState } from 'react'

const Signup = () => {

    const [firstname,setFirstname] = useState("")
    const [lastname,setLastname] = useState("")
    const [email,setEmail] = useState("")
    const [password,setpassword] = useState("")
    const [role,setRole] = useState("")
    const history = useHistory();
    const handleRegister = async () => {
        // Perform your login/authentication API call here and retrieve the JWT token
        const response = await fetch('http://localhost:8080/api/v1/auth/register', {
          method: 'POST',
          body: JSON.stringify({ firstname,lastname,email,role, password }), // Include the username and password in the request body
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (response.ok) {
          const data = await response.json();


          console.log("success registered");

          history.push('/login');
        //   console.log(data);


        //   const token = data.token; // Replace this with the actual property name of your JWT token
    
        //   // Decode the JWT token to retrieve user information, including the role
        //   const decodedToken = jwtDecode(token);
        //   const userRole = decodedToken.roles; // Assuming 'roles' is the property containing the user's role
    
        //   // Navigate to the appropriate page based on the user's role
        //   if (userRole.includes('admin')) {
        //     history.push('/admin'); // Replace '/admin' with the path to the admin page
        //   } else {
        //     history.push('/user'); // Replace '/user' with the path to the user page
        //   }
        } else {
          // Handle login failure
        }
      };




  return (
    <div>
        
        <div className='container'>
            <div className="mb-3">
                    <label for="useremail" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="useremail" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)}
                    />
            </div>
            <div className="mb-3">
                    <label for="firstname" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="firstname" placeholder="Firstname" onChange={(e) => setFirstname(e.target.value)}
                    />
            </div>
            <div className="mb-3">
                    <label for="lastname" className="form-label">Last Name</label>
                    <input type="email" className="form-control" id="lastname" placeholder="Last name" onChange={(e) => setLastname(e.target.value)} />
            </div>
            <div className="mb-3">
                    <label for="lastname" className="form-label">Role</label>
                    <input type="email" className="form-control" id="role" placeholder="Last name" onChange={(e) => setRole(e.target.value)} />
            </div>
            <div className="mb-3 row">
                    <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword" onChange={(e) => setpassword(e.target.value)} />
                    </div>
            </div>

            <button type="button" className="btn btn-success" onClick={handleRegister}>Register</button>
        </div>

        
      
    </div>
  )
}

export default Signup
