import React, { PropsWithChildren } from "react";
import Aisde from "./aside";

interface IProps {
    aside?: "minimize";
    sidebarLayout?: 1 | 2;
}

const Layout: React.FC<PropsWithChildren<IProps>> = ({ children, aside, sidebarLayout }) => {
    return (
        <>
            <Aisde layout={aside} sidebarLayout={sidebarLayout} />
            {children}
        </>
    );
};

Layout.defaultProps = {
    sidebarLayout: 1,
};

export default Layout;
