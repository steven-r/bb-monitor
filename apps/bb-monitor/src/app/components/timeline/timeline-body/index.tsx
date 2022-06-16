import { FC, PropsWithChildren } from "react";
import { StyleBody } from "./style";

type IProps = {}

const TimelineBody: FC<PropsWithChildren<IProps>> = ({ children }) => {
    return <StyleBody>{children}</StyleBody>;
};

export default TimelineBody;
