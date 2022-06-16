import { FC, PropsWithChildren } from "react";
import { SpaceProps } from "@stevenr/shared";
import { StyledTitle } from "./style";

type IProps = SpaceProps;

const FileManagerLabel: FC<PropsWithChildren<IProps>> = ({ children, ...restProps }) => {
    return <StyledTitle {...restProps}>{children}</StyledTitle>;
};

export default FileManagerLabel;
