import styled from "styled-components";
import Icon from "./Icons";
import { Container } from "postcss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  $m?: string;
  $w?: string;
  $h?: string;
  $title?: string;
  $description?: string;
}

interface InputWithButtonProps
  extends InputProps,
    React.InputHTMLAttributes<HTMLInputElement> {
  $icon: "house" | "master" | "plus";
}

interface InputContainerProps {
  $m?: string;
  $w?: string;
  $h?: string;
}

const generalColors = {
  principalDark: "#292929",
};

const InputElement = styled.input<InputProps>`
  width: ${(props) => (props.$w ? props.$w : "100%")};
  height: ${(props) => (props.$h ? props.$h : "3.5rem")};
  padding: 0.3rem 0.5rem;
  background-color: transparent;
  border: 2px solid ${generalColors.principalDark};
  border-radius: 0.5rem;
  font-size: 1rem;
  margin: 0;

  @media screen and (max-width: 60rem) {
    width: 100%;
  }

  :-moz-placeholder {
    color: #636161;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`;

const InputForIcon = styled(InputElement)`
  padding-right: 10%;
  margin: 0;

  @media screen and (max-width: 60rem) {
    padding-right: 15%;
  }
`;

const InputIcon = styled.div`
  width: 10%;
  max-width: 2rem;
  height: 70%;
  position: absolute;
  right: 2%;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;

  & :only-child {
    fill: light-dark(#000, #fff) !important;
  }
`;

const InputGeneralContainer = styled.div<InputContainerProps>`
  width: ${(props) => (props.$w ? props.$w : "100%")};
  height: auto;
  margin: ${(props) => (props.$m ? props.$m : "0")};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const InputTitle = styled.div`
  font-size: 1rem;
  font-weight: 600;
  margin: 0.3rem 0.2rem;
`;

const InputDescription = styled(InputTitle)`
  font-size: 0.8rem;
`;

const Input = (data: InputProps) => {
  const { $w, $m, $title, $description } = data;

  return (
    <InputGeneralContainer $w={$w} $m={$m}>
      {$title && <InputTitle>{$title}</InputTitle>}
      <InputContainer>
        <InputElement {...data} />
      </InputContainer>
      {$description && <InputDescription>{$description}</InputDescription>}
    </InputGeneralContainer>
  );
};

const InputWithIcon = (data: InputWithButtonProps) => {
  const { $icon, $w, $m, $title, $description } = data;

  return (
    <InputGeneralContainer $w={$w} $m={$m}>
      {$title && <InputTitle>{$title}</InputTitle>}
      <InputContainer>
        <InputForIcon {...data} />
        <InputIcon>
          <Icon $name={$icon} $w="100%" />
        </InputIcon>
      </InputContainer>
      {$description && <InputDescription>{$description}</InputDescription>}
    </InputGeneralContainer>
  );
};

export { Input, InputWithIcon };
