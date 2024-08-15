"use server";
import configuration from "@/server/configuration";
import { IPokemon } from "@/interfaces/IPokemon";
import { encrypt, decrypt } from "@/utils/crypto";

export async function getPokemonEncrypt({
  pokemonName,
}: {
  pokemonName: string;
}) {
  const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || "";
  console.log(ENCRYPTION_KEY);

  try {
    pokemonName = await decrypt(pokemonName, ENCRYPTION_KEY);
    console.log(pokemonName);
    let url = `${configuration.baseURL}/${configuration.paths.getPokemon}/${pokemonName}`;

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

    return encrypt(JSON.stringify(data), ENCRYPTION_KEY);
  } catch (error) {
    console.error("Error in getPokemon:", error);
    return encrypt(
      JSON.stringify({ error: "An error occurred" }),
      ENCRYPTION_KEY
    );
  }
}

export async function getPokemon({ pokemonName }: { pokemonName: string }) {
  try {
    let url = `${configuration.baseURL}/${configuration.paths.getPokemon}/${pokemonName}`;

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

    return data;
  } catch (error) {
    console.error("Error in getPokemon:", error);
    return null;
  }
}
