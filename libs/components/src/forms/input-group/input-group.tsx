import { FC, PropsWithChildren } from "react";
import classname from "classnames";
import { SpaceProps } from "@stevenr/shared";
import {
    StyledInputGroup,
    StyledInputGroupWrap,
    StyledInputGroupText,
} from "./style";

interface IProps extends SpaceProps {
    className?: string;
}

export const InputGroup: FC<PropsWithChildren<IProps>> = ({ children, className, ...rest }) => {
    return (
        <StyledInputGroup
            className={classname(className, "input-group")}
            {...rest}
        >
            {children}
        </StyledInputGroup>
    );
};

interface IWrap extends IProps {
    dir?: "append" | "prepend";
}

export const InputGroupAddon: FC<PropsWithChildren<IWrap>> = ({
    children,
    dir = "append",
    className,
    ...rest
}) => {
    return (
        <StyledInputGroupWrap
            className={classname(className, `input-group-${dir}`)}
            $dir={dir}
            {...rest}
        >
            {children}
        </StyledInputGroupWrap>
    );
};

export const InputGroupText: FC<PropsWithChildren<IProps>> = ({
    children,
    className,
    ...rest
}) => {
    return (
        <StyledInputGroupText
            className={classname(className, `input-group-text`)}
            {...rest}
        >
            {children}
        </StyledInputGroupText>
    );
};
