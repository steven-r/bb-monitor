import React, { lazy, Suspense } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@fontsource/inter/variable.css';
import { grommet, Grommet } from 'grommet';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageLoadSpinner from './components/PageLoadSpinner';

// auth stuff
import awsmobile from './aws-exports';
import { Amplify }  from 'aws-amplify';
import AuthDisplay from './pages/auth/sign-in';

// const { host } = window.location;

// Fix issues with multiple redirect urls.
// Try to figure out which one to use...
// if (awsmobile.oauth.redirectSignIn.includes(',')) {
// const filterHost = (url: string) => new URL(url).host === host;
//   awsmobile.oauth.redirectSignIn = awsmobile.oauth.redirectSignIn
//     .split(',')
//     .filter(filterHost)
//     .shift() || "";
//   awsmobile.oauth.redirectSignOut = awsmobile.oauth.redirectSignOut
//     .split(',')
//     .filter(filterHost)
//     .shift() || "";
// }
Amplify.configure(awsmobile);

const HomePage = lazy(() => import('./pages/homepage'));
const PrivacyPolicy = lazy(() => import('./pages/privacy-policy'));
const AdminUserList = lazy(() => import('./pages/admin/users/list'));

function App() {
    return (
        <div className="App">
            <Authenticator.Provider>
                <Grommet theme={grommet}>
                    <BrowserRouter>
                        <Suspense fallback={<PageLoadSpinner />}>
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route
                                    path="/privacy-policy"
                                    element={<PrivacyPolicy />}
                                />
                                <Route path="/sign-in" element={<AuthDisplay />} />
                                <Route path="/admin-user-list" element={<AdminUserList />} />
                            </Routes>
                        </Suspense>
                    </BrowserRouter>
                </Grommet>
            </Authenticator.Provider>
        </div>
    );
}

export default App;
