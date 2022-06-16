import { FC, useState } from "react";
import CalendarComponent from "../../../calendar";
import { StyledWrap } from "./style";

const InlineCalendar: FC = () => {
    const [value, setValue] = useState(new Date());
    const changeHandler = () => {
        setValue(new Date());
    };
    return (
        <StyledWrap>
            <CalendarComponent onChange={changeHandler} value={value} />
        </StyledWrap>
    );
};

export default InlineCalendar;
