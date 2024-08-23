import styled from "styled-components";
import Icon from "./Icons";

interface InputProps {
  $m?: string;
}

interface InputWithButtonProps
  extends InputProps,
    React.InputHTMLAttributes<HTMLInputElement> {
  $icon: string;
}

const generalColors = {
  principalDark: "#292929",
};

const Input = styled.input<InputProps>`
  width: 16rem;
  height: 3.5rem;
  padding: 0.3rem 0.5rem;
  padding-right: 2.5rem;
  background-color: transparent;
  border: 2px solid ${generalColors.principalDark};
  border-radius: 0.5rem;
  font-size: 1rem;
  margin: ${(props) => (props.$m ? props.$m : ".5rem")};

  @media screen and (max-width: 60rem) {
    width: 100%;
  }

  :-moz-placeholder {
    color: #636161;
  }
`;

const InputContainer = styled.div`
  width: auto;
  height: auto;
  position: relative;

  @media screen and (max-width: 60rem) {
    width: 100%;
  }
`;

const InputIcon = styled.label`
  position: absolute;
  top: 0;
  right: 3%;
`;

const InputWithIcon = () => {
  return (
    <InputContainer>
      <Input placeholder="Hola" />
      <InputIcon>X</InputIcon>
    </InputContainer>
  );
};

export { Input, InputWithIcon };
