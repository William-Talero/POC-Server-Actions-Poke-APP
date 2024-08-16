"use client";
import * as React from "react";
import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { Iuser } from "@/interfaces/IUser";

const CardElement = ({ user }: { user: Iuser }) => {
  const router = useRouter();
  return (
    <div className="flex flex-wrap justify-center mt-[3rem]">
      <div>
        <Card className="m-1 md:w-[30rem] w-[20rem] cursor-pointer">
          <CardHeader className="flex gap-3 py-4">
            <div className="flex flex-col">
              <p className="text-xl">{user.name.toUpperCase()}</p>
              <p className="text-md">Código: {user.id}</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="text-md font-bold">País: {user.pais}</p>
            <p className="text-md font-bold">Teléfono: {user.telefono}</p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default CardElement;
