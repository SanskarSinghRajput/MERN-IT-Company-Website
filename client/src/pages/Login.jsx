import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const URL = "http://localhost:5000/api/auth/login";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  // handling the input values
  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      console.log("login form", response);
 
      const res_data = await response.json();

      if(response.ok){
        // alert("Login Successful");
        // stored the token in localhost
        storeTokenInLS(res_data.token);
        
        setUser({ email: "", password: "" });
        toast.success("Login Successful");
        navigate("/");
      } else {
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
        console.log("invalid credential");
      }
    } catch (error) {
      console.log(error);
    }
  };
   
  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img
                  src="/images/login.png"
                  alt="Let's fill the login form"
                  width="500"
                  height="500"
                />
              </div>
               {/* our main registration code  */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">Login form</h1>
                <br />

                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      name="email"
                      value={user.email}  
                      onChange={handleInput}
                      placeholder="email"
                    />
                  </div>

                  <div>
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder="password"
                    />
                  </div>

                  <br />

                  <button type="submit" className="btn btn-submit">LogIn</button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default Login
