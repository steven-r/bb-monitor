import styled, { device } from "@stevenr/shared";

export const StyledWrap = styled.div`
    margin-top: 40px;
    ${device.large} {
        margin-top: 0px;
        padding-left: 25px;
        width: 260px;
    }
`;
