import { Message } from "@stevenr/api-interfaces";
import React, { useEffect, useState } from "react";
import { Heart } from "react-feather";
import {
    StyledFooter,
    StyledFooterLeft,
    StyledFooterRight,
    StyledFooterNav,
    StyledFotterNavLink,
} from "./style";

const Footer: React.FC = () => {
    const [m, setMessage] = useState<Message>({ message: '' });

    useEffect(() => {
      fetch('/api')
        .then((r) => r.json())
        .then(setMessage);
    }, []);

    return (
        <StyledFooter>
            <StyledFooterRight>
                <StyledFooterNav>
                    <StyledFotterNavLink path="/show-license">
                        License
                    </StyledFotterNavLink>
                    <StyledFotterNavLink path="/show-changelog">
                        Change Log
                    </StyledFotterNavLink>
                    <StyledFotterNavLink path="https://hasthemes.com/contact-us/">
                        Get Help
                    </StyledFotterNavLink>
                </StyledFooterNav>
            </StyledFooterRight>
            <StyledFooterLeft>
                <span>&copy; Stephen Reindl {new Date().getFullYear()} </span>
                <span className="copright-link">
                    MADE WITH <Heart size="24" /> BY{"  "}
                    <a
                        href="https://themeforest.net/user/bootxperts/portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        BootXperts
                    </a>
                </span>
                <span>{m.message}</span>
            </StyledFooterLeft>
        </StyledFooter>
    );
};

export default Footer;
