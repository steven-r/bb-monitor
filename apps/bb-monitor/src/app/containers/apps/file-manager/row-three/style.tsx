import styled, { device } from "@stevenr/shared";

export const StyledDevider = styled.div`
    width: 100%;
    height: 10px;
    display: none;
    ${device.xlarge} {
        display: block;
    }
`;
