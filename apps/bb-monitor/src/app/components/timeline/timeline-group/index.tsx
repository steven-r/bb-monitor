import { FC, PropsWithChildren } from "react";
import { StyledGroup } from "./style";

type IProps = {}

const TimelineGroup: FC<PropsWithChildren<IProps>> = ({ children }) => {
    return <StyledGroup>{children}</StyledGroup>;
};

export default TimelineGroup;
