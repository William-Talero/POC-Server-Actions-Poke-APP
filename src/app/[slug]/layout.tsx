import React from "react";
import "../globals.css";
import { Providers } from "../providers";

export default function RestaurantLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Providers>{children}</Providers>;
}
