import Button from "../../components/Button/Button";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import {
  Title,
  Div,
  TitleBox,
  Header,
  LogoHome,
  ButtonLogin,
} from "./HomePage.styled";

function HomePage() {
  return (
    <>
      <Header>
        <LogoHome src={logo} alt="" />
        <ButtonLogin>LogIn</ButtonLogin>
      </Header>

      <Div>
        <TitleBox>
          <Title>Hello User</Title>
          <NavLink to={`/tweets`}>
            <Button>Go to tweets</Button>
          </NavLink>
        </TitleBox>
      </Div>
    </>
  );
}

export default HomePage;
