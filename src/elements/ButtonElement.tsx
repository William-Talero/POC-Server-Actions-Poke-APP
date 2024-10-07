import styled from "styled-components";
import masterIcon from "@/assets/icons/MASTER_ICON.svg";
import Image from "next/image";
import Icon from "./Icons";

interface ButtonProps {
  $bgcolor?: "primary" | "secondary";
  $type?: "primary" | "secondary";
  $w?: string;
  $h?: string;
  $size?: "sm" | "md" | "lg";
  $textcolor?: "primary" | "secondary";
  $m?: string;
}

interface ButtonWithIconProps
  extends ButtonProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  $icon: "house" | "plus" | "master";
  children: React.ReactNode;
}

const buttonSizes = {
  sm: {
    width: "4rem",
    height: "2.5rem",
    padding: ".2rem .4rem",
    fontSize: "0.6rem",
    smWidth: "40%",
  },
  md: {
    width: "8rem",
    height: "2.8rem",
    padding: ".3rem .5rem",
    fontSize: "0.8rem",
    smWidth: "60%",
  },
  lg: {
    width: "16rem",
    height: "2.8rem",
    padding: ".3rem .5rem",
    fontSize: "0.9rem",
    smWidth: "100%",
  },
};

const generalColors = {
  primary: "#659125",
  secondary: "#fc802a",
  terciary: "#3E6A27",
  quaternary: "#FC8029",
  disabled: "#EFEFEF",
  disabledSecond: "#8f8f8f",
  primaryHover: "#B9CC56",
  secondaryHover: "#FB6903",
};

const Button = styled.button<ButtonProps>`
  width: ${(props) =>
    props.$size
      ? buttonSizes[props.$size].width
      : props.$w
      ? props.$w
      : buttonSizes.md.width};
  height: ${(props) =>
    props.$size
      ? buttonSizes[props.$size].height
      : props.$h
      ? props.$h
      : buttonSizes.md.height};
  padding: ${(props) =>
    props.$size ? buttonSizes[props.$size].padding : buttonSizes.md.padding};
  background-color: ${(props) =>
    props.$type == "primary"
      ? props.$bgcolor
        ? generalColors[props.$bgcolor]
        : generalColors.primary
      : "transparent"};
  border: ${(props) =>
    props.$type == "primary" ? "none" : `1px solid ${generalColors.terciary}`};
  color: ${(props) =>
    props.$type == "primary"
      ? props.$textcolor
        ? props.$textcolor
        : "white"
      : props.$bgcolor
      ? generalColors[props.$bgcolor]
      : generalColors.terciary};
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 1rem 0;
  cursor: pointer;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) =>
    props.$size
      ? buttonSizes[props.$size].fontSize
      : buttonSizes.md.fontSize} !important;
  font-weight: 500 !important;
  margin: ${(props) => props.$m};

  &:hover {
    background-color: ${(props) =>
      props.$bgcolor
        ? generalColors[`${props.$bgcolor}Hover`]
        : generalColors.primary};
    color: #000;
    border: none;
  }

  :only-child {
    fill: ${(props) =>
      props.$type == "primary"
        ? props.$textcolor
          ? props.$textcolor
          : "white"
        : props.$bgcolor
        ? generalColors[props.$bgcolor]
        : generalColors.terciary};
  }

  &:hover :only-child {
    fill: #000 !important;
  }

  &:disabled {
    background-color: ${generalColors.disabled};
    cursor: not-allowed;
    color: ${generalColors.disabledSecond} !important;
    border: none;

    :only-child {
      fill: ${generalColors.disabledSecond} !important;
    }
  }

  &:active {
    background-color: ${generalColors.terciary};
    color: #fff !important;

    :only-child {
      fill: #fff !important;
    }
  }

  @media screen and (max-width: 60rem) {
    width: ${(props) =>
      props.$size
        ? buttonSizes[props.$size].smWidth
        : props.$w
        ? props.$w
        : buttonSizes.md.smWidth};
    font-size: 0.8rem;
  }

  @media screen and (max-width: 20rem) {
    font-size: 0.5rem;
  }
`;

const ButtonContent = styled.div`
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
`;

const OrangeButton = styled(Button)`
  height: 2.5rem;
  background-color: ${(props) =>
    props.$type == "primary"
      ? props.$bgcolor
        ? generalColors.secondary
        : generalColors.secondary
      : "transparent"};
  border-radius: 1rem;
  border-top-right-radius: 0;
  border: ${(props) =>
    props.$type == "primary"
      ? "none"
      : `1px solid ${generalColors.quaternary}`};
  color: ${(props) =>
    props.$type == "primary"
      ? props.$textcolor
        ? props.$textcolor
        : "white"
      : props.$bgcolor
      ? generalColors.secondary
      : generalColors.quaternary};

  &:hover {
    background-color: ${generalColors.secondaryHover};
    color: #fff;
  }

  &:active {
    background-color: ${generalColors.quaternary};
    border: 4px solid ${generalColors.secondaryHover};
  }

  &:disabled {
    background-color: ${generalColors.disabledSecond};
    color: #fff !important;
    border: none;
  }
`;

const ButtonWithIcon = (data: ButtonWithIconProps) => {
  const { $size, $icon: icon, children } = data;
  return (
    <Button {...data}>
      <Icon $name={icon} $w="20%" />
      <ButtonContent>{children}</ButtonContent>
      {$size == "lg" && <Icon $name={icon} $w="20%" />}
    </Button>
  );
};

export { Button, ButtonWithIcon, OrangeButton };
