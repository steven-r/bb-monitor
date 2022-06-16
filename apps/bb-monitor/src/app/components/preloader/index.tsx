import { FC, useEffect, useState } from "react";
import { Spinner } from "@stevenr/components";
import { StyledLoader } from "./style";
import { Message } from "@stevenr/api-interfaces";

const Preloader: FC = () => {
    const [m, setMessage] = useState<Message>({ message: '' });

    useEffect(() => {
      fetch('/api')
        .then((r) => r.json())
        .then(setMessage);
    }, []);
  
    return (
        <StyledLoader>
            <Spinner size="lg" color="primary" />
            <span>{m.message}</span>
        </StyledLoader>
    );
};

export default Preloader;
