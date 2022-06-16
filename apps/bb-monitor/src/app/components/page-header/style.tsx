import styled, { device, space } from "@stevenr/shared";

export const StyledWrap = styled(({ pb, ...rest }) => <div {...rest} />)`
    ${device.small} {
        justify-content: space-between;
        align-items: center;
        display: flex;
    }
    ${space}
`;
