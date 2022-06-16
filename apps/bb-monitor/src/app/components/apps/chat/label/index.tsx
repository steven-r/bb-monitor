import { FC, PropsWithChildren } from "react";
import { SpaceProps } from "@stevenr/shared";
import { StyledLabel } from "./style";

type IProps = SpaceProps;

const Label: FC<PropsWithChildren<IProps>> = ({ children, ...rest }) => {
    return <StyledLabel {...rest}>{children}</StyledLabel>;
};

export default Label;
