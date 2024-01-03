import React from "react";

const Login = () => {
  return (
    <div className="w-full h-[100vh] bg-[#E3E2DF]">
      <div className="">
        <h1>Sign In</h1>
        <p>
          Don't have an account? <a href="#">Sign Up</a>{" "}
        </p>
        <div className="">
          <div class="mb-6">
            <input
              type="email"
              id="email"
              class=" border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="email address"
              required
            ></input>
            <input
              type="password"
              id="password"
              class=" border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="password"
              required
            ></input>
          </div>
        </div>
        <a href="#">Forgot your password</a>
      </div>
    </div>
  );
};

export default Login;
