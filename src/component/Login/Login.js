import React, { useState } from "react";
import CustomInput from "../customField/CustomInput";
import "../RegisterComponent/Register.scss";
import { useDispatch, useSelector } from "react-redux";
import { Loggedin } from "../../store/Actions/postAction";
import { Link } from "react-router-dom";
import  { Navigate } from 'react-router'
 
import {signinRequest} from '../../store/saga/Action'

const Login = () => {
  const [input, setInput] = useState({ email: "", password: "" })
  const[showPass,setShowPass]=useState(false)
  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  };
  const selector = useSelector((state) => state.Reducer)
  const dispatch = useDispatch()
  const onSubmit = () => {
    dispatch(signinRequest(input))
    if(selector.pending){
    setInput({
      email: "",
      password: "",
    });
  }
  };
  const clickHandler=()=>{
    setShowPass(!showPass)
}

  if (selector.pending) {
    return <Navigate to='/dashboard' />
  }

  return (
    <div className="input-container">
      <div className="input-fields">
        <h3 className="text-font" style={{textAlign:"center"}}> LOGIN page</h3>
        <CustomInput
          type="email"
          name="email"
          onChange={onChange}
          value={input.email}
        />
        <CustomInput
          type="password"
          name="password"
          onChange={onChange}
          value={input.password}
          showPass={showPass}
          clickHandler={clickHandler}
        />
        <div className="button">
          <button className="btn" onClick={onSubmit}>
            submit
          </button>
        </div>
        <h5 style={{ textAlign: "center" }}>
          Create an Account <Link to="/sigup">signup</Link>
        </h5>
      </div>
    </div>
  );
};

export default Login;
