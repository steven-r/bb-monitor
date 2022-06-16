import { FC, PropsWithChildren } from "react";
import { StyledFeedback } from "./style";

export interface IFeedback {
    state?: "success" | "warning" | "error";
    showState?: boolean;
    showErrorOnly?: boolean;
}

const Feedback: FC<PropsWithChildren<IFeedback>> = ({
    state,
    showState,
    showErrorOnly,
    children,
}) => {
    return (
        <StyledFeedback
            $state={state}
            $showState={showState}
            $showErrorOnly={showErrorOnly}
        >
            {children}
        </StyledFeedback>
    );
};

export default Feedback;
