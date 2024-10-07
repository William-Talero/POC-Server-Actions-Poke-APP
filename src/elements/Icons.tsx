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
  $name: keyof typeof icons;
  $w: string;
}

interface IconContainerProps {
  $wContainer: string;
}

interface IconContainerProps {
  $wContainer: string;
}

const IconContainer = styled.div<IconContainerProps>`
  width: ${(props) => props.$wContainer};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSvgIcon = styled.svg`
  width: 100%;
  height: auto;
  max-height: 60%;
`;

const Icon = ({ $name = "plus", $w }: IconProps) => {
  console.log(icons);
  const SvgIcon = icons[$name];
  console.log(SvgIcon);
  return (
    <IconContainer $wContainer={$w}>
      <StyledSvgIcon as={SvgIcon} />
    </IconContainer>
  );
};

export default Icon;
