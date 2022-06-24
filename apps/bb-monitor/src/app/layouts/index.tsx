import React, { PropsWithChildren } from "react";
import Header from "./header";
import Footer from "./footer";

interface IProps {
    hasSidebar?: boolean;
    hideFooter?: boolean;
    hideHeader?: boolean;
    sidebarLayout?: 1 | 2;
}

const Layout: React.FC<PropsWithChildren<IProps>> = ({
    children,
    hasSidebar,
    hideFooter,
    hideHeader,
    sidebarLayout,
}) => {
    return (
        <>
            {!hideHeader && <Header hasSidebar={hasSidebar} sidebarLayout={sidebarLayout} />}
            {children}
            {!hideFooter && <Footer />}
        </>
    );
};

Layout.defaultProps = {
    hideFooter: false,
    hideHeader: false
};

export default Layout;
