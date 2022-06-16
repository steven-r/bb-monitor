import MailBody from "apps/bb-monitor/src/app/components/apps/mail/mail-body";
import MailForm from "apps/bb-monitor/src/app/components/apps/mail/mail-form";
import Sender from "apps/bb-monitor/src/app/components/apps/mail/sender";
import ToolbarIcons from "apps/bb-monitor/src/app/components/apps/mail/toolbar-icons";
import ScrollBar from "apps/bb-monitor/src/app/components/scrollbar";
import { useAppDispatch } from "apps/bb-monitor/src/app/redux/hooks";
import { toggleBody } from "apps/bb-monitor/src/app/redux/slices/ui";
import { FC } from "react";
import { ArrowLeft } from "react-feather";
import { StyledMain, StyledHeader, StyledBody, StyledToggleBtn } from "./style";

const Main: FC = () => {
    const dispatch = useAppDispatch();
    const bodyHandler = () => {
        dispatch(toggleBody());
    };
    return (
        <StyledMain>
            <StyledHeader>
                <StyledToggleBtn type="button" onClick={bodyHandler}>
                    <ArrowLeft />
                </StyledToggleBtn>
                <Sender
                    color="teal"
                    name="Reynante Labares"
                    time="Today, 11:40am"
                />
                <ToolbarIcons />
            </StyledHeader>
            <ScrollBar top="55px">
                <StyledBody>
                    <MailBody />
                    <MailForm placeholder="Type Here" />
                </StyledBody>
            </ScrollBar>
        </StyledMain>
    );
};

export default Main;
