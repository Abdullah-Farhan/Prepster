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
      setEmail("");
      toast.success("You've been added to the waitlist!");

    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <form onSubmit={addUser} className="md:w-3/4">
      <input
        type="email"
        placeholder="placeholder@email.com"
        className="outline-none w-full pb-2 text-2xl font-medium"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <div className="w-full h-[3px] bg-gradient-custom"></div>
      <input
        className="cursor-pointer text-white bg-gradient-custom rounded-xl px-16 py-1.5 text-2xl font-semibold mt-7 relative z-50"
        disabled={isDisabled}
        type="submit"
        value="SUBMIT"
      />
    </form>
  );
};

export default EmailInput;
