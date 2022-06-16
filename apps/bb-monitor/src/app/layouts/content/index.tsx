import React, { PropsWithChildren } from "react";
import { SpaceProps, BorderProps } from "@stevenr/shared";
import { Container } from "@stevenr/components";
import { StyledContent } from "./style";

interface IProps extends SpaceProps, BorderProps {
    className?: string;
    fullHeight?: boolean;
    align?: "top" | "center" | "bottom";
}

const Content: React.FC<PropsWithChildren<IProps>> = ({
    children,
    className,
    fullHeight,
    align,
    ...restProps
}) => {
    return (
        <StyledContent
            $fullHeight={fullHeight}
            $align={align}
            className={className}
            {...restProps}
        >
            <Container className="container" pl="0" pr="0">
                {children}
            </Container>
        </StyledContent>
    );
};

export default Content;
