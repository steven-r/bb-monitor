import { FC, PropsWithChildren } from "react";
import { SpaceProps } from "@stevenr/shared";
import { StyledList, StyledItem } from "./style";

const List: FC<PropsWithChildren<SpaceProps>> = ({ children, ...rest }) => {
    return <StyledList {...rest}>{children}</StyledList>;
};

export default List;

type IProps = {}

export const ListItem: FC<PropsWithChildren<IProps>> = ({ children }) => {
    return <StyledItem>{children}</StyledItem>;
};
