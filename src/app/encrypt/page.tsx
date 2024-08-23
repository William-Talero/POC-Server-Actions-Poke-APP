"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import { getuserEncrypt } from "@/server/actions/users";
import { encrypt, decrypt } from "@/utils/crypto";
import { Iuser } from "@/interfaces/IUser";
import CardElement from "@/elements/CardElement";
import { Button } from "@/elements/ButtonElement";

export default function Home() {
  const [user, setuser] = useState<string>("");
  const [userData, setuserData] = useState<Iuser | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const ENCRYPTION_KEY = process.env.NEXT_PUBLIC_ENCRYPTION_KEY || "";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {
      const encrypted = await encrypt(user, ENCRYPTION_KEY);
      const encryptedResponse = await getuserEncrypt({
        userName: encrypted,
      });
      console.log(encryptedResponse);
      const decryptedResponse = await decrypt(
        encryptedResponse,
        ENCRYPTION_KEY
      );

      const userData = JSON.parse(decryptedResponse);
      setuserData(userData);
      setLoading(false);
    } catch (error) {
      console.error("Error in handleSubmit:", error);
      setLoading(false);
    }
  };

  return (
    <main className="w-full flex min-h-svh flex-col items-center relative">
      <Header site="home" />
      <p className="text-2xl my-[2rem]">user</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="userName"
          placeholder="Enter a user name"
          className="border-2 border-gray-300 p-2 rounded-md w-full"
          value={user}
          onChange={(e) => setuser(e.target.value.toLowerCase())}
        />
        <Button $w="100%" $bgcolor="primary" type="submit">Search</Button>
      </form>
      {loading && <p className="mt-[3rem]">Loading...</p>}
      {!loading && userData !== null && (
        <CardElement user={userData} />
      )}
      {!loading && userData === null && (
        <h1 className="text-md text-center mt-[3rem]">No user found</h1>
      )}
    </main>
  );
}
