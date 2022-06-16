import styled, { layout, LayoutProps } from "@stevenr/shared";

export const StyledMap = styled(({ width, height, ...props }) => (
    <div {...props} />
))<LayoutProps>`
    ${layout}
`;
