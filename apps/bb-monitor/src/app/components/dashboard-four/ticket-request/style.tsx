import styled from "@stevenr/shared";
import { CardHeader } from "@stevenr/components";

export const StyledHeader = styled(({ ...rest }) => <CardHeader {...rest} />)`
    padding-bottom: 0px;
    border-bottom: 0;
    padding-top: 20px;
`;

export const StyledChart = styled.div``;
