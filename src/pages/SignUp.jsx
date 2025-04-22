import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router";
import OAuth from "../components/OAuth";

const IMG_URL =
  "https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { email, password, name } = formData;

  function onChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  }

  function handleTogglePasswordVisibility() {
    setShowPassword((curState) => !curState);
  }

  return (
    <section>
      <h1 className="mt-6 text-center text-3xl font-bold">Sign Up</h1>

      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center px-6 py-12">
        <div className="mb-12 md:mb-6 md:w-[67%] lg:w-[50%]">
          <img className="w-full rounded-2xl" src={IMG_URL} alt="KEY image" />
        </div>
        <div className="w-full md:w-[67%] lg:ml-20 lg:w-[40%]">
          <form>
            <input
              type="text"
              id="name"
              value={name}
              onChange={onChange}
              placeholder="Full name"
              className="mb-6 w-full rounded border-gray-300 bg-white px-4 py-2 text-xl text-gray-700 transition ease-in-out"
            />
            <input
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email address"
              className="mb-6 w-full rounded border-gray-300 bg-white px-4 py-2 text-xl text-gray-700 transition ease-in-out"
            />
            <div className="relative mb-6">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={onChange}
                placeholder="Password"
                className="w-full rounded border-gray-300 bg-white px-4 py-2 text-xl text-gray-700 transition ease-in-out"
              />

              {showPassword ? (
                <AiFillEyeInvisible
                  onClick={handleTogglePasswordVisibility}
                  className="absolute right-3 top-3 cursor-pointer text-xl"
                />
              ) : (
                <AiFillEye
                  onClick={handleTogglePasswordVisibility}
                  className="absolute right-3 top-3 cursor-pointer text-xl"
                />
              )}
            </div>
            <div className="flex items-center justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="mb-6">
                Already have an account?
                <Link
                  to="/sign-in"
                  className="ml-1 text-red-600 transition duration-200 ease-in-out hover:text-red-700"
                >
                  Sign in
                </Link>
              </p>
              <p className="mb-6">
                <Link
                  to="/forgot-password"
                  className="text-blue-600 transition duration-200 ease-in-out hover:text-blue-800"
                >
                  Forgot password?
                </Link>
              </p>
            </div>
            <button
              className="w-full rounded bg-blue-600 px-7 py-3 text-sm font-medium uppercase text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg active:bg-blue-800"
              type="submit"
            >
              Sign up
            </button>
            <div className="my-4 flex items-center before:flex-1 before:border-t before:border-gray-300 after:flex-1 after:border-t after:border-gray-300">
              <p className="mx-4 text-center font-semibold">OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
}
