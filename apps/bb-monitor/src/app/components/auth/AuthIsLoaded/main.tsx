import React, { FC, PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { isLoaded } from "react-redux-firebase";
import { RootState } from "../../../redux/store";
import Preloader from "../../preloader";

type IProps = {}

const AuthIsLoaded: FC<PropsWithChildren<IProps>> = ({ children }) => {
    const auth = useSelector<RootState>((state) => state.firebase.auth)
    console.log("AuthIsLoaded -->", auth);
    if (!isLoaded(auth)) return <Preloader></Preloader>;
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>
  }

export default AuthIsLoaded;