"use client";
import React, { useState } from "react";
import { db } from "@/firebase/db";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import toast from "react-hot-toast";

const EmailInput = () => {
  const [email, setEmail] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const addUser = async (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("Please enter an email address");
      setStatus("error");
      return;
    }

    try {
      setIsDisabled(true)

      // Check if email exists
      const waitlistRef = collection(db, "prerelease-registrations");
      const q = query(waitlistRef, where("email", "==", email.toLowerCase()));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        toast.error("This email is already registered!");
        setIsDisabled(false);
        return;
      }

      // Add new email to waitlist
      await addDoc(waitlistRef, {
        email: email.toLowerCase(),
        timestamp: new Date().toISOString(),
        isNew: true,
      });

      setIsDisabled(false);
      toast.success("You've been added to the waitlist!");

    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <form onSubmit={addUser}>
      <input
        type="email"
        placeholder="placeholder@email.com"
        className="outline-none w-full pb-2 text-2xl font-medium"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <div className="w-full h-[3px] bg-gradient-to-r from-[#265DF7] to-[#6EC8FF]"></div>
      <input
        className="cursor-pointer text-white bg-gradient-to-r from-[#265DF7] to-[#6EC8FF] rounded-2xl px-10 py-3 text-2xl font-bold mt-5 relative z-50"
        disabled={isDisabled}
        type="submit"
      />
    </form>
  );
};

export default EmailInput;
