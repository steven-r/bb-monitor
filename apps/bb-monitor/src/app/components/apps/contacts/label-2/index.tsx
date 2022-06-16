import { FC, PropsWithChildren } from "react";
import { StyledLabel } from "./style";

type IProps = {}

const Label: FC<PropsWithChildren<IProps>> = ({ children }) => {
    return <StyledLabel>{children}</StyledLabel>;
};

export default Label;
