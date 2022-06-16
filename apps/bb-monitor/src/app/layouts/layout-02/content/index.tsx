import React, { PropsWithChildren } from "react";
import { SpaceProps } from "@stevenr/shared";
import cn from "classnames";
import { StyledContent } from "./style";

interface IProps extends PropsWithChildren<SpaceProps> {
    className?: string;
    fullHeight?: boolean;
    align?: "top" | "center" | "bottom";
    aside?: "minimize";
}

const Content: React.FC<IProps> = ({
    children,
    className,
    fullHeight,
    align,
    aside,
    ...restProps
}) => {
    return (
        <StyledContent
            $fullHeight={fullHeight}
            $align={align}
            $aside={aside}
            className={cn(className, "content")}
            {...restProps}
        >
            {children}
        </StyledContent>
    );
};

export default Content;
