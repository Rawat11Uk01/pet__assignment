
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signup } = useUserAuth();
  const signUpHandler = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(email, password);
      navigate('/login')
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className="login__div">
    <div className="login__container">
      <h2 className="heading__primary600 textAlign__center">
    Join us today !
      </h2>
      <form className="input__container" onSubmit={signUpHandler}>
        {error &&  <div className="error__card">{error}</div>}
       
        <div className="flex direction_column gap__10px">
          <label htmlFor="Email" className="heading__small">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="Email"
            placeholder="Enter your email"
            className="input_style"
          />
        </div>
        <div className="flex direction_column gap__10px">
          <label htmlFor="Password" className="heading__small">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            id="Password"
            placeholder="Enter your Password"
            className="input_style"
          />
        </div>
        <button type="submit" className="btn__primary">
          Sign Up
        </button>
        <h2 className="heading__small textAlign__center">
          Already Have an account ? <span className="cursor__pointer" onClick={()=>navigate('/login')} style={{color:'blue'}}>SignIn</span>
        </h2>
      </form>
    </div>
  </div>
  );
};

export default Signup;


{/* <form onSubmit={(e) => signUpHandler(e)}>
{error}
<input value={name} onChange={(e) => setName(e.target.value)} />
<input value={password} onChange={(e) => setPassword(e.target.value)} />
<button type="Submit">Sign up</button>
</form> */}