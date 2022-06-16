import { FC } from "react";
import { Spinner } from "@stevenr/components";
import { StyledLoader } from "./style";

const Preloader: FC = () => {
    return (
        <StyledLoader>
            <Spinner size="lg" color="primary" />
        </StyledLoader>
    );
};

export default Preloader;
