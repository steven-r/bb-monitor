import { FC, PropsWithChildren } from "react";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../store";

type IProps = {}

const PersistProvider: FC<PropsWithChildren<IProps>> = ({ children }) => {
    return (
        <PersistGate loading={null} persistor={persistor}>
            {children}
        </PersistGate>
    );
};

export default PersistProvider;
