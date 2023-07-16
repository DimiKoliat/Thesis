import React, { useState } from "react";
import {
    NavbarContainer,
    LeftContainer,
    RightContainer,
    NavbarExtendedContainer,
    NavbarInnerContainer,
    NavbarLinkContainer,
    NavbarLink,
    Logo,
    OpenLinksButton,
    NavbarLinkExtended,
    NavbarLinkLogo,
} from './Navbar.style';
import LogoImg from '../../images/logo.png'

function Navbar() {
    const [extendNavbar, setExtendNavbar] = useState(false);
    return (
        <NavbarContainer extendNavbar={extendNavbar}>
            <NavbarInnerContainer>
                <LeftContainer>
                    <NavbarLinkLogo to="/">
                        <Logo src={LogoImg}></Logo>
                    </NavbarLinkLogo>

                </LeftContainer>
                <RightContainer>
                    <NavbarLinkContainer>
                        <NavbarLink to="/"> Home</NavbarLink>
                        <NavbarLink to="/contact"> Contact</NavbarLink>
                        <NavbarLink to="/about"> About</NavbarLink>
                        <OpenLinksButton
                            onClick={() => {
                                setExtendNavbar((curr) => !curr);
                            }}
                        >
                            {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
                        </OpenLinksButton>
                    </NavbarLinkContainer>
                </RightContainer>
            </NavbarInnerContainer>
            {extendNavbar && (
                <NavbarExtendedContainer>
                    <NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
                    <NavbarLinkExtended to="/contact"> Contact</NavbarLinkExtended>
                    <NavbarLinkExtended to="/about"> About</NavbarLinkExtended>
                </NavbarExtendedContainer>
            )}
        </NavbarContainer>
    );
}
export default Navbar