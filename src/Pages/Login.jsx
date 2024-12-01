import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Scss/login.scss";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handlelogin = async (event) => {
    event.preventDefault();
    console.log("Button clicked", email, password);
    try {
      const res = await fetch("", {
        method: postMessage,
        Headers: {
          "content-type": "apllication/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const userData = await res.json();
      if (userData.sucess) {
        alert("login sucessful");
        navigate("/");
      } else {
        alert(userData.message);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className="body-login">
      <form className="form-login" onSubmit={handlelogin}>
        <h2 className="h-2">LOG IN</h2>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="logform-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="logform-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button className="logbutton" type="submit" onClick={handlelogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
