import { FC, PropsWithChildren } from "react";
import { StyledFooter } from "./style";

type IProps = {}

const Footer: FC<PropsWithChildren<IProps>> = ({ children }) => {
    return <StyledFooter>{children}</StyledFooter>;
};

export default Footer;
