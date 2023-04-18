import styled from "styled-components";
import { Logo } from "../../components/TweetCard/TweetCard.styled";
import { ButtonStyled } from "../../components/Button/Button.styled";
import cardImg from "../../assets/card-img.png";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const LogoHome = styled(Logo)`
  width: 122px;
  height: 35px;
  position: initial;
`;

export const ButtonLogin = styled(ButtonStyled)`
  min-width: 40px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  padding: 8px 24px;
`;

export const Title = styled.h1`
  margin-bottom: 30px;
`;

export const Div = styled.div`
  background-image: url(${cardImg});
  background-repeat: no-repeat;
  background-size: auto;
  height: 100vh;
  margin-top: 80px;
`;

export const TitleBox = styled.div`
  margin-left: 270px;
`;
