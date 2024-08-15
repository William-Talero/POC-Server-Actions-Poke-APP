"use client";
import React, { useState } from "react";
import Header from "@/components/Header";
import { IPokemon } from "@/interfaces/IPokemon";
import CardElement from "@/elements/CardElement";
import { Button } from "@/elements/ButtonElement";
import configuration from "@/server/configuration";

export default function Home() {
  const [pokemon, setPokemon] = useState<string>("");
  const [pokemonData, setPokemonData] = useState<IPokemon | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {
      let url = `${configuration.baseURL}/${configuration.paths.getPokemon}/${pokemon}`;

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: IPokemon = await response.json();
      console.log(data);

      setPokemonData(data);
      setLoading(false);
    } catch (error) {
      console.error("Error in handleSubmit:", error);
      setLoading(false);
    }
  };

  return (
    <main className="w-full flex min-h-svh flex-col items-center relative">
      <Header site="home" />
      <p className="text-2xl my-[2rem]">Pokemon</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="pokemonName"
          placeholder="Enter a Pokemon name"
          className="border-2 border-gray-300 p-2 rounded-md w-full"
          value={pokemon}
          onChange={(e) => setPokemon(e.target.value.toLowerCase())}
        />
        <Button type="submit">Search</Button>
      </form>
      {loading && <p className="mt-[3rem]">Loading...</p>}
      {!loading && pokemonData !== null && (
        <CardElement pokemon={pokemonData} />
      )}
      {!loading && pokemonData === null && (
        <h1 className="text-md text-center mt-[3rem]">No pokemon found</h1>
      )}
    </main>
  );
}
