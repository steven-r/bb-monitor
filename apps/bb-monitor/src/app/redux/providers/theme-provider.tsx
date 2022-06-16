import { FC, PropsWithChildren } from "react";
import { ThemeProvider } from "@stevenr/shared";
import { GlobalStyle } from "@stevenr/shared/css";
import { TTheme } from "@stevenr/shared/types";
import { useAppDispatch, useAppSelector } from "../hooks";
import { toggleTheme } from "../slices/ui";
import SettingsCard from "../../components/settings";
import { themes } from "@stevenr/shared/styled";

type IProps = {}

const Theme: FC<PropsWithChildren<IProps>> = ({ children }) => {
    const dispatch = useAppDispatch();
    const { theme } = useAppSelector((state: any) => state.ui);

    const themeHandler = (curTheme: TTheme) => {
        dispatch(toggleTheme({ theme: curTheme }));
    };

    return (
        <ThemeProvider theme={themes[theme]}>
            <GlobalStyle />
            <SettingsCard themeHandler={themeHandler} curTheme={theme} />
            {children}
        </ThemeProvider>
    );
};

export default Theme;
