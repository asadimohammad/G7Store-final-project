import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Inputs from "../../components/Inputs";


const Login = () => {
  let [username, setUsername] = useState();
  let [Password, setPassword] = useState();

  let navigate = useNavigate()



  const submitHandler = async(e) => {
    e.preventDefault();
    let user = {
      email: username,
      password: Password,
    };
    let BASE_URL = 'https://wins-api-v2.liara.run/api/'

    let loginRes = await axios('/login' , {
      method: 'POST',
      baseURL: BASE_URL,
      data: user
    })
    if(loginRes.status === 200 ){
      localStorage.setItem('access-token' , loginRes.data.token)
      navigate('/')
    }
  };

  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        {/* <Inputs lableTxt = 'Username' type='text' placeholder='Username' change={changeHandler}/> */}
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Email"
        />
        <input
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <Inputs type="submit" />
      </form>
    </div>
  );
};

export default Login;
