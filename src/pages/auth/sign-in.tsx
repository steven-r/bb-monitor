import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import Layout from '../../layout';
import '@aws-amplify/ui-react/styles.css';
import { useNavigate, useSearchParams } from 'react-router-dom';

const AuthDisplay = () => {
    const {authStatus} = useAuthenticator();
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    if (authStatus === 'authenticated') {
        let path = searchParams.get('redirect') || '/';
        if (!path.startsWith('/')) path='/';
        navigate(path);
    }
    return (
        <Layout>
            <Authenticator>
                Hello
            </Authenticator>
        </Layout>
    );
}

export default AuthDisplay;