import React from "react";
import Layout from "../components/Layout";
import login from "../../public/login.jpg";
import { Link } from "react-router-dom";

function Login() {
  return (
    <Layout>
      <div className="bg-red-300 h-screen flex items-center justify-center">
        <div className="text-center border ">
          <div className="flex justify-center">
            <img
              src={login}
              alt=""
              className="object-cover object-center rounded-full md:w-28 w-20"
            />
          </div>
          <div>
            <form action="">
              <div className="flex flex-col gap-5 ">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="border border-black px-3 py-2 outline-none border-none rounded-md"
                />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="border border-black px-3 py-2 rounded-md"
                />
                <button className="bg-black text-white px-3 py-2 rounded-md">
                  Login
                </button>
                <Link  to="/Signup"><button className="bg-black text-white px-3 py-2 rounded-md w-full">
                  SignUp
                </button></Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
