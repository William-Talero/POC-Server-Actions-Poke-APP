import * as React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

const Header = ({ site }: { site: string }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [];
  const router = useRouter();

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p
            className="font-bold text-inherit"
            onClick={() => router.push("/")}
          >
            User APP
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-4"
        justify="center"
      ></NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex"></NavbarItem>
        {/* <NavbarItem>
            <Button onClick={() => router.push("/")}>Volver</Button>
        </NavbarItem> */}
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
