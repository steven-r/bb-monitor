import styled, { space, SpaceProps } from "@stevenr/shared";

export const StyledGroup = styled(({ mb, mt, ...rest }) => (
    <div {...rest} />
))<SpaceProps>`
    ${space}
`;
