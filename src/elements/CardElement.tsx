"use client";
import * as React from "react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { IPokemon } from "@/interfaces/IPokemon";

const CardElement = ({ pokemon }: { pokemon: IPokemon }) => {
  const router = useRouter();
  return (
    <div className="flex flex-wrap justify-center mt-[3rem]">
      <div>
        <Card className="m-1 md:w-[30rem] w-[20rem] cursor-pointer">
          <CardHeader className="flex gap-3 py-4">
            <div className="flex flex-col">
              <p className="text-xl">{pokemon.name.toUpperCase()}</p>
              <p className="text-md">Number: {pokemon.id}</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="text-xl text-green-700">Weight: {pokemon.weight}</p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default CardElement;
