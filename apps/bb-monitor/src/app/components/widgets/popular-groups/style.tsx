import styled, { themeGet } from "@stevenr/shared";

export const StyledName = styled.p`
    font-weight: 500;
    margin-bottom: 0px;
`;

export const StyledRole = styled.span`
    font-size: 13px;
    color: ${themeGet("colors.text3")};
`;
