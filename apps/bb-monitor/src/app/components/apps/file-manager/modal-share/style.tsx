import styled, { device } from "@stevenr/shared";
import { ModalClose } from "@stevenr/components";

export const StyledClose = styled(({ ...rest }) => <ModalClose {...rest} />)`
    position: absolute;
    top: 15px;
    right: 20px;
`;

export const StyledTitle = styled.h5`
    font-size: 18px;
    margin-bottom: 30px;
    ${device.small} {
        font-size: 20px;
    }
`;

export const StyledWrap = styled.div`
    margin-top: 20px;
`;

export const StyledLabel = styled.label`
    display: block;
    margin-bottom: 0.5rem;
`;
