import { FC, PropsWithChildren } from "react";
import { StyledItem } from "./style";

type IProps = {}

const TimelineItem: FC<PropsWithChildren<IProps>> = ({ children }) => {
    return <StyledItem className="timeline-item">{children}</StyledItem>;
};

export default TimelineItem;
