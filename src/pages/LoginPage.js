import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const navigate = useNavigate();

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/ticket");
    } catch (err) {
      console.log(err.response?.data.message);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="bg-pink-500 m-auto p-14 text-black">
        <div className="flex justify-center text-xl my-2">
          <strong>Login</strong>
        </div>
        <form onSubmit={handleSubmitForm}>
          <div className="flex flex-col">
            <label>Username</label>
            <input
              className=" h-8 my-2"
              placeholder=" Input your username"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password</label>
            <input
              type="password"
              className=" h-8 my-2"
              placeholder="Input your password"
            />
            <div className="flex justify-center">
              <button
                className=" bg-white w-20 rounded-lg"
                type="submit"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
        <hr className="my-3" />
        <div className="flex justify-end">
          <button>Sign up</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
