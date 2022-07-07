import { Main, Page, PageContent } from 'grommet';
import { Button, PageHeader, PageHeaderProps } from 'grommet/components';
import { FC, PropsWithChildren } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LayoutFooter from './footer';
import LayoutHeader from './header';

type IProps = {
    hideHeader?: boolean;
    hideFooter?: boolean;
    pageHeader?: PageHeaderProps;
};

const Layout: FC<PropsWithChildren<IProps>> = ({
    hideHeader,
    hideFooter,
    children,
    pageHeader,
}) => {
    return (
        <Page kind="narrow">
            <PageContent>
                <>
                    {!hideHeader && <LayoutHeader />}
                    {pageHeader && <DisplayPageHeader {...pageHeader} />}
                    <Main>{children}</Main>
                    {!hideFooter && <LayoutFooter />}
                </>
            </PageContent>
        </Page>
    );
};

export default Layout;
const  DisplayPageHeader: FC<PageHeaderProps> = ({ parent, ...rest}) => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    if (!parent && pathname !== "/") {
        parent = <Button onClick={() => navigate(-1)}>Back</Button>
    }
    return <PageHeader parent={parent} {...rest} />;
}
