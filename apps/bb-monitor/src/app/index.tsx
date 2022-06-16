import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import ThemeProvider from "./redux/providers/theme-provider";
import PersistProvider from "./redux/providers/persist-provider";
import { store } from "./redux/store";
import App from "./app";
import { createRoot } from "react-dom/client";

const container = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
    <Provider store={store}>
        <PersistProvider>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </PersistProvider>
    </Provider>
);
