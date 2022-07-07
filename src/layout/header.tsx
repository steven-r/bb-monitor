import { useAuthenticator } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
import { Avatar, Box, Header, Image, Menu } from 'grommet';
import { FC, PropsWithChildren, useEffect, useState } from 'react';
import Gravatar from 'react-gravatar';
import { useNavigate } from 'react-router-dom';
import { AnchorLink } from '../components/AnchorLink';

const LayoutHeader: FC<PropsWithChildren<any>> = ({ children }) => {
    const navigate = useNavigate();
    const [groups, setGroups] = useState<string[]>([]);
    const { user, authStatus, signOut } = useAuthenticator((context) => [
        context.user,
    ]);
    useEffect(() => {
        if (authStatus === 'authenticated')
            Auth.currentAuthenticatedUser().then((data) => {
                setGroups([
                    ...(data.signInUserSession.accessToken.payload[
                        'cognito:groups'
                    ] ?? []),
                ]);
            });
    }, [authStatus]);

    const menuItems: any[] = [
        { label: 'Sign-Off', onClick: () => signOut(), size: 'small' },
    ];
    if (groups.includes('Admins')) {
        menuItems.push({
            label: 'Users',
            onClick: () => navigate('/admin-user-list'),
            size: 'small',
        });
    }

    return (
        <Header
            background="black"
            pad="small"
            margin={{ bottom: 'small' }}
            alignContent=""
            sticky="scrollup"
        >
            <Box direction="row">
                <AnchorLink
                    to="/"
                    size="small"
                    icon={<Image src="/logo.svg" alt="BB Logo" />}
                    label="BB Monitor"
                    color="lightgreen"
                />
            </Box>
            {children}
            {authStatus === 'authenticated' && (
                <Menu
                    label={
                        <Avatar size="small">
                            <Gravatar
                                email={user.attributes?.email}
                                size={50}
                            />
                        </Avatar>
                    }
                    items={menuItems}
                />
            )}
            {authStatus !== 'authenticated' && (
                <AnchorLink to="/sign-in">Sign-In</AnchorLink>
            )}
        </Header>
    );
};

export default LayoutHeader;
