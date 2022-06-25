import styled, { device, space } from "@stevenr/shared";

export const StyledWrap = styled(({ pb, ...rest }) => <div {...rest} />)`
    ${device.small} {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    ${space}
`;
