"use client";
import React, { useState } from "react";

const EmailInput = () => {
  const [email, setEmail] = useState("");
  return (
    <input
      type="email"
      placeholder="placeholder@email.com"
      className="outline-none w-full pb-2 text-2xl font-medium"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  );
};

export default EmailInput;
