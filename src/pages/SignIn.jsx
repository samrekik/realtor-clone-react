import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";

export default function SignIn() {
  const [showPss, setShowPass] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;
  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };
  const togglePasswordVisibility = () => {
    setShowPass((prev) => !prev);
  };
  return (
    <section>
      <h1 className="text-3xl text-center mt-5 font-bold">Sign In</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2V5fGVufDB8fDB8fHww"
            alt="authImage"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form>
            <input
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="email adress"
              className="w-full px-4 py-2 border rounded-md "
            />
            <div className="relative    w-full">
              <input
                type={showPss ? "text" : "password"}
                id="password"
                value={password}
                onChange={onChange}
                placeholder="password"
                className=" w-full px-4 py-2 border rounded-md 
               my-5"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPss ? (
                  <AiFillEyeInvisible size={24} />
                ) : (
                  <AiFillEye size={24} />
                )}
              </button>
            </div>
            <div className="flex justify-between">
              <p>
                Don't have a account?
                <Link
                  to="/sign-up"
                  className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1"
                >
                  Register
                </Link>
              </p>
              <p>
                <Link
                  to="/forgot-password"
                  className="text-blue-600 hover:text-blue-700 transition duration-200 ease-in-out"
                >
                  Forgot Password ?
                </Link>
              </p>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 my-5 rounded-md hover:bg-blue-600 transition duration-300 cursor-pointer"
            >
              Sign In
            </button>
            <div className="flex items-center my-5 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
              <p className="text-center font-semibold mx-4">OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
}
