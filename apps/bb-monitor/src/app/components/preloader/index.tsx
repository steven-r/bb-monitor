import { FC, useEffect, useState } from "react";
import { Spinner } from "@stevenr/components";
import { StyledLoader } from "./style";
import { Message } from "@stevenr/api-interfaces";
import { environment } from "../../../environments/environment";

const Preloader: FC = () => {
    const [m, setMessage] = useState<Message>({ message: '' });

    useEffect(() => {
      fetch(environment.apiAddress)
        .then((r) => r.json())
        .then(setMessage)
        .catch(err => {
            console.log(err);
            setMessage({message: ''});
        });
    }, []);
  
    return (
        <StyledLoader>
            <Spinner size="lg" color="primary" />
            <span>{m.message}</span>
        </StyledLoader>
    );
};

export default Preloader;
