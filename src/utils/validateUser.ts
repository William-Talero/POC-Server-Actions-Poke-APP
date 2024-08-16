import { Iuser } from "@/interfaces/IUser";

export const validateUser = (data: any): Iuser | null => {
  if (
    typeof data.id === "number" &&
    typeof data.name === "string" &&
    typeof data.email === "string" &&
    typeof data.telefono === "string" &&
    typeof data.documentid === "string" &&
    typeof data.pais === "string"
  ) {
    return {
      id: data.id,
      name: data.name,
      email: data.email,
      telefono: data.telefono,
      pais: data.pais,
    };
  }
  return null;
};
