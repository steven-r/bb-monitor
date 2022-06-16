import { FC, PropsWithChildren } from "react";
import { SpaceProps } from "@stevenr/shared";
import classnames from "classnames";
import { StyledGroup } from "./style";

interface IProps extends SpaceProps {
    className?: string;
}

export const FormGroup: FC<PropsWithChildren<IProps>> = ({ children, className, ...rest }) => {
    return (
        <StyledGroup className={classnames(className, "form-group")} {...rest}>
            {children}
        </StyledGroup>
    );
};
