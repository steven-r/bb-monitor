import { FC, PropsWithChildren } from "react";
import { StyledDivider } from "./style";

type IDividerProps = {}

const Divider: FC<PropsWithChildren<IDividerProps>> = ({ children }) => {
    return <StyledDivider>{children}</StyledDivider>;
};

export default Divider;
