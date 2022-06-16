import { FC, PropsWithChildren } from "react";
import { StyledNav } from "./style";

type IProps = {}

const TimelineNav: FC<PropsWithChildren<IProps>> = ({ children }) => {
    return <StyledNav>{children}</StyledNav>;
};

export default TimelineNav;
