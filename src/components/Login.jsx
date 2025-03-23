import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      toast.success("Logged in successfully!");

      navigate("/dashboard"); 
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          toast.error("This email is not registered.");
          break;
        case "auth/wrong-password":
          toast.error("Incorrect password.");
          break;
        case "auth/invalid-email":
          toast.error("Invalid email format.");
          break;
        default:
          toast.error("An error occurred: " + error.message);
      }

      console.error("Login error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 space-y-4"
      >
        <h3 className="text-2xl font-bold text-center text-gray-800">Login</h3>

        <div className="flex flex-col">
          <label className="mb-1 text-sm text-gray-600">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            autoComplete="email"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("email", { required: true })}
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm text-gray-600">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            autoComplete="current-password"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("password", { required: true })}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#514EF3] text-white py-2 rounded-md transition duration-200"
        >
          Login
        </button>

        <p className="text-sm text-center text-gray-600 mt-3">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Register now
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
