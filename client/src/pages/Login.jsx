import Loginhead from "../components/Loginhead";
import Axios from "axios";
import {useDispatch,useSelector} from "react-redux";
import { login} from "../features/userSlice";
import { selectUser } from "../features/userSlice";
import React, { useState } from "react";
import { useHistory } from "react-router";
import "./login.css";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth,setAuth]=useState("");
  const user=useSelector(selectUser);
  const dispatch = useDispatch();
  let history=useHistory();
  
  function validateForm() {
    let validEmail=false
    let reg = /^([_\-\.a-zA-Z0-9]+)@([a-z]+)\.([a-z]){2,7}$/;
    let str = email;
    if (reg.test(str)) {
      
      validEmail = true;
  }
  else {
      validEmail = false;
  }

    return validEmail && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    Axios.post("http://localhost:3001/login",{
      useremail: email,
      userpass: password,
    }).then((response)=>{
      setAuth(response.data.message);
      if(auth === "Sucessful"){
        history.push("/home");
        console.log(response);
      dispatch(
        login({
          uid: response.data.id,
          uname:response.data.name,
        }
        )
      );
      }
      });
      
}

  return (
      <div>
      <Loginhead/>
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <div className="form-group" size="lg" controlId="email">
          <label>Email</label>
          <input className="form-control"
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group" size="lg" controlId="password">
          <label>Password</label>
          <input className="form-control"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br/>
        <br/>
        <button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </button>
      </form>
    </div>
    </div>
  );
}
