import styled, { themeGet } from "@stevenr/shared";
import { Input } from "@stevenr/components";

export const StyledForm = styled.form`
    flex: 1;
    display: flex;
    align-items: center;
    input {
        &:hover,
        &:focus,
        &:active {
            border-color: ${themeGet("colors.primary")};
            box-shadow: none;
        }
    }
`;

export const StyledInput = styled(({ ...rest }) => <Input {...rest} />)`
    border-width: 0;
    background-color: transparent;
    font-size: inherit;
    padding: 0;
    color: ${themeGet("colors.text2")};
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
`;