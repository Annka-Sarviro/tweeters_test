import { ButtonStyled } from "./Button.styled";

const Button = (props) => {
  return (
    <ButtonStyled type="button" onClick={props.onClick} check={props.checked}>
      {props.children}
    </ButtonStyled>
  );
};

export default Button;
