"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import { Iuser } from "@/interfaces/IUser";
import CardElement from "@/elements/CardElement";
import { Button } from "@/elements/ButtonElement";
import configuration from "@/server/configuration";

export default function Home() {
  const [user, setuser] = useState<string>("");
  const [userData, setuserData] = useState<Iuser | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {
      let url = `${configuration.baseURL}/${configuration.paths.getUserByName}/${user}`;

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: Iuser = await response.json();

      console.log(data);

      setuserData(data);
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
        <Button type="submit">Search</Button>
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
