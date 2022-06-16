import { FC, PropsWithChildren } from "react";
import { StyledTime } from "./style";

type IProps = {}

const TimelineTime: FC<PropsWithChildren<IProps>> = ({ children }) => {
    return <StyledTime>{children}</StyledTime>;
};

export default TimelineTime;
