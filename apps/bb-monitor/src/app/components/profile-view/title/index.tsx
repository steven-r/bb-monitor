import { FC, PropsWithChildren } from "react";

type IProps = {}

const Title: FC<PropsWithChildren<IProps>> = ({ children }) => {
    return <div>{children}</div>;
};

export default Title;
