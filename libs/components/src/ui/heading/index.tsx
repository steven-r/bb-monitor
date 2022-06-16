import { FC, ElementType, forwardRef, PropsWithChildren } from "react";
import { SpaceProps, ColorProps, TypographyProps } from "@stevenr/shared";
import { StyledHeading } from "./style";

interface IProps extends SpaceProps, ColorProps, TypographyProps {
    as?: ElementType;
    className?: string;
    tt?: string;
}

const Heading: FC<PropsWithChildren<IProps>> = forwardRef(
    ({ as, className, tt, children, ...restProps }, ref) => {
        return (
            <StyledHeading
                as={as}
                className={className}
                $tt={tt}
                ref={ref}
                {...restProps}
            >
                {children}
            </StyledHeading>
        );
    }
);

Heading.displayName = "Heading";

export default Heading;
