import { FC, ElementType, PropsWithChildren } from "react";
import {
    SpaceProps,
    ColorProps,
    TypographyProps,
    LayoutProps,
} from "@stevenr/shared";
import { StyledText } from "./style";

interface IProps extends SpaceProps, ColorProps, TypographyProps, LayoutProps {
    as?: ElementType;
    className?: string;
}

const Text: FC<PropsWithChildren<IProps>> = ({ as, className, children, ...restProps }) => {
    return (
        <StyledText as={as} className={className} {...restProps}>
            {children}
        </StyledText>
    );
};

export default Text;
