import { FC, PropsWithChildren } from "react";
import { StyledHeader } from "./style";

type IProps = {}

const Header: FC<PropsWithChildren<IProps>> = ({ children }) => {
    return <StyledHeader>{children}</StyledHeader>;
};

export default Header;
