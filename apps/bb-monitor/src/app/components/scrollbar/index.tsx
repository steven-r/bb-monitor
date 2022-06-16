import { FC, PropsWithChildren } from "react";
import { PositionProps } from "@stevenr/shared";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { StyledWrap } from "./style";

const ScrollBar: FC<PropsWithChildren<PositionProps>> = ({ children, ...rest }) => {
    return (
        <StyledWrap {...rest} className="scrollbar">
            <PerfectScrollbar>{children}</PerfectScrollbar>
        </StyledWrap>
    );
};

export default ScrollBar;
