import { FC, PropsWithChildren } from "react";
import { StyledTitle } from "./style";

type IProps = {}

const WidgetTitle: FC<PropsWithChildren<IProps>> = ({ children }) => {
    return <StyledTitle>{children}</StyledTitle>;
};

export default WidgetTitle;
