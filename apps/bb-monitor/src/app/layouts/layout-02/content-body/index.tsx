import React, { PropsWithChildren } from "react";
import { Container } from "@stevenr/components";
import { SpaceProps } from "@stevenr/shared";
import { StyledBody } from "./style";

interface IProps extends PropsWithChildren<SpaceProps> {
    container?: boolean;
}

const ContentBody: React.FC<IProps> = ({ children, container, ...rest }) => {
    return (
        <StyledBody className="content-body" {...rest}>
            {container && (
                <Container className="container" px="0" mb="25px">
                    {children}
                </Container>
            )}
            {!container && <>{children}</>}
        </StyledBody>
    );
};

ContentBody.defaultProps = {
    container: true,
};

export default ContentBody;
