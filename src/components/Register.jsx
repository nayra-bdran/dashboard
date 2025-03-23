import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, setDoc } from "firebase/firestore";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
      });

      await setDoc(doc(db, "Users", user.uid), {
        email: user.email,
        firstName: firstName,
        lastName: lastName,
        createdAt: new Date(),
      });

      toast.success("Account created successfully!");
      console.log("User Registered Successfully:", user);
    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          toast.error("This email is already registered. Please log in.");
          break;
        case "auth/invalid-email":
          toast.error("Invalid email address.");
          break;
        case "auth/weak-password":
          toast.error("Weak password. Must be at least 6 characters.");
          break;
        default:
          toast.error("An error occurred: " + error.message);
          break;
      }
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 space-y-4"
      >
        <h3 className="text-2xl font-bold text-center text-gray-800">Sign Up</h3>

        <div className="flex flex-col">
          <label className="mb-1 text-sm text-gray-600">First Name</label>
          <input
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#514EF3]"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm text-gray-600">Last Name</label>
          <input
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#514EF3]"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm text-gray-600">Email Address</label>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#514EF3]"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm text-gray-600">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#514EF3]"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#514EF3] text-white py-2 rounded-md transition duration-200"
        >
          Sign Up
        </button>

        <p className="text-sm text-center text-gray-600 mt-3">
          Already have an account?{" "}
          <Link to="/login" className="text-[#514EF3] hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
