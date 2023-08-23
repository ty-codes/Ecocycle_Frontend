import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styled from "styled-components";
import { device } from "../constants";
import { useMediaQuery } from "react-responsive";
import { Logo } from '.';


export default function NavBar() {
    const isMobile = useMediaQuery({ maxWidth: 992 });

    return (
        <>

            {['md'].map((expand) => (
                <Wrapper key={expand} bg="#000000" expand={expand} className="">
                    <Navbar.Brand className="logo" href="/">
                        <Logo />
                    </Navbar.Brand>
                    <div>

                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton >
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    <Logo />
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav >
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/">Collection Centres</Nav.Link>

                                    <Nav.Link href="/">About Us</Nav.Link>
                                    <Nav.Link href="marketplace">Marketplace</Nav.Link>


                                    {isMobile && (
                                        <Create>
                                           <Nav.Link href="register">Register</Nav.Link>

                                            <Button className='navlink-button' href="login" >
                                                Sign in
                                            </Button>
                                        </Create>
                                    )}
                                </Nav>

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </div>
                    {!isMobile &&
                        <Create>
                            <Nav.Link href="register">Register</Nav.Link>

                            <Button  className='navlink-button' href="login">
                                Sign in
                            </Button>
                        </Create>
                    }

                </Wrapper>
            ))}
        </>
    )
}

const Wrapper = styled(Navbar)`
    min-height: 70px;
    height: 10vh;
    display: flex;
    justify-content: space-between;
    background: transparent;
    padding: 0 50px;
    background: white;
    border-radius: 10px;
    margin: 0.5em 0;
    width: 100%;

    @media ${device.isSmallDevice} {
        height: 60px;
    }

    @media ${device.mobileL} {
        padding: 0 20px;
    }


    a:not(.logo), a:not(.logo):focus,
    a:not(.logo):hover,
    a:not(.logo):active {
        font-style: normal;
        font-weight: 600;
        font-size: 1.1vw;
        margin: 0 !important;
        text-align: center;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: center;
        padding-inline: 2vw !important;

        @media ${device.laptopL} {
            font-size: 13px;
            padding-inline: 8px !important;
        }
    }

    a:not(.logo):focus,
    a:not(.logo):hover,
    a:not(.logo):active {
        font-size: 1.1vw;

        @media ${device.laptopL} {
            font-size: 13px;
        }
    }

    button.navbar-toggler.collapsed {
        padding: 0;
        width: 2.5em;
        margin: 0em !important;
        position: absolute;
        right: 10px;
        top: 20px;
        border: none;
        outline: none;
    }

    .navbar-brand {
        padding: 0 !important;
    }

    .navbar-toggler {
        border: none;

        &:focus {
            text-decoration: none;
            outline: none;
            box-shadow: none;
        }
    }

    .logo {
        width: 4vw;
        height: 4vw;

        @media ${device.isSmallDevice} {
            width: 80px;
            height: 35px;
        }
    }

`;

const Button = styled.a`
    font-size: 1.1vw;
    background-color: ${props => props.theme.primaryColor};
    border-radius: 5px;
    height: 4vh;
    min-height: 40px;
    cursor: pointer;
    padding: 0 10px;
    padding-inline: 2vw !important;


    @media ${device.laptopL} {
        font-size: 13px;
        padding-inline: 8px !important;
    }

    .outlined {
        background-color: white;
        color: ${props => props.theme.black};
        border: 1px solid ${props => props.theme.primaryColor}
    }
`;

const Create = styled.div`
    display: flex;
    align-items: center;

    @media ${device.isSmallDevice} {
        flex-direction: column;
        align-self: start;
    }
    a:not(.logo), a:not(.logo):focus,
    a:not(.logo):hover,
    a:not(.logo):active {
        font-style: normal;
        font-size: 1.1vw;
        margin: 0 0.5em !important;
        text-align: center;
        text-transform: capitalize;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: center;
        padding-inline: 2vw !important;


        @media ${device.laptopL} {
            font-size: 13px;
            padding-inline: 8px !important;
        }
        
        @media ${device.isSmallDevice} {
            margin: 0 0 1em 0 !important;
            align-self: start;
            padding: 8px 0 !important;
            font-size: 14px;
        }   
    }
   .outlined {
        background-color: white;
        color: ${props => props.theme.black} !important;
        border: 1px solid ${props => props.theme.primaryColor}
    }
`;