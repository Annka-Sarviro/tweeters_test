import { Outlet } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import { Container } from "./Layout.styled";

export const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
