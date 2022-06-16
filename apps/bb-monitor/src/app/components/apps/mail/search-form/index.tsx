import { FC } from "react";
import { StyledForm, StyledInput } from "./style";

const MailSearchForm: FC = () => {
    return (
        <StyledForm>
            <StyledInput
                id="file-search"
                name="file-search"
                placeholder="Search mail"
            />
        </StyledForm>
    );
};

export default MailSearchForm;
