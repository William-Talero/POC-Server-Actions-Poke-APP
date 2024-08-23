import React from "react";
import styled from "styled-components";
import HouseIcon from "@/assets/icons/houseIcon.svg";
import MasterIcon from "@/assets/icons/masterIcon.svg";
import PlusIcon from "@/assets/icons/plusIcon.svg";

const icons = {
  house: HouseIcon,
  master: MasterIcon,
  plus: PlusIcon,
};

interface IconProps {
  name: keyof typeof icons;
}

const StyledSvgIcon = styled.svg`
  width: 15%;
  height: auto;
  max-height: 60%;
`;

const Icon = ({ name = "plus" }: IconProps) => {
  const SvgIcon = icons[name];
  return <StyledSvgIcon as={SvgIcon} />;
};

export default Icon;
