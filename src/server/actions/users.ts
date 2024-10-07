"use server";
import configuration from "@/server/configuration";
import { Iuser } from "@/interfaces/IUser";
import { encrypt, decrypt } from "@/utils/crypto";
import { validateUser } from "@/utils/validateUser";

export async function getuserEncrypt({
  userName,
}: {
  userName: string;
}) {
  const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || "";
  console.log(ENCRYPTION_KEY);

  try {
    userName = await decrypt(userName, ENCRYPTION_KEY);
    console.log(userName);
    let url = `${configuration.baseURL}/${configuration.paths.getUserByName}/${userName}`;
    console.log(url);

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(response);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
    const userData: Iuser | null = validateUser(data);

    return encrypt(JSON.stringify(userData), ENCRYPTION_KEY);
  } catch (error) {
    console.error("Error in getuser:", error);
    return encrypt(
      JSON.stringify({ error: "An error occurred" }),
      ENCRYPTION_KEY
    );
  }
}

export async function getuser({ userName }: { userName: string }) {
  try {
    let url = `${configuration.baseURL}/${configuration.paths.getUserByName}/${userName}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const userData: Iuser | null = validateUser(data);

    return userData;
  } catch (error) {
    console.error("Error in getuser:", error);
    return null;
  }
}
