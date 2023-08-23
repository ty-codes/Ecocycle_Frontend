import React, { Suspense, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import { useMediaQuery } from "react-responsive";
import { Outlet } from "react-router-dom";
import { PageLoader } from "./components";
import { useUserContext } from "./context/UserContext";
import { useModalContext } from "./context/ModalContext";

const Landing = React.lazy(() => import("./pages/Landing"));
const Login = React.lazy(() => import("./pages/Login"));
const Register = React.lazy(() => import("./pages/Register"));
const Marketplace = React.lazy(() => import("./pages/Marketplace"));


function App() {
  return (

      <Router>
        <Suspense
          fallback={
            <Wrapper>
              <PageLoader />
            </Wrapper>
          }
        >
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="marketplace" element={<Marketplace />} />
            <Route path="*" element={<Landing />} />
          </Routes>
        </Suspense>
      </Router>
  );
}

const PagesWrapper = () => {
  const isSmallDevice = useMediaQuery({ maxWidth: 768 });

  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const { user, isLoggedIn } = useUserContext();
  const { setModalType, setIsOpenModal } = useModalContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || !isLoggedIn) {
      navigate("/signin");
    }
  }, []);

  return (
    <Container isSmallDevice={isSmallDevice}>
      {/* <TopNav
        isSmallDevice={isSmallDevice}
        setIsSideNavOpen={setIsSideNavOpen}
        setModalType={setModalType}
        setIsOpenModal={setIsOpenModal}
      />
      <SideNav
        isSideNavOpen={isSideNavOpen}
        setIsSideNavOpen={setIsSideNavOpen}
      /> */}
      <Outlet />
    </Container>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  margin-top: 5em;
`;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;

  @media (min-width: 1024px) {
    &::-webkit-scrollbar {
      display: none;
      width: 9px;

      &:hover {
        cursor: pointer;
      }
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background: white;
      box-shadow: inset 0 0 5px grey;
      border-radius: 10px;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.primaryColor};
    }
  }
`;

export default App;
