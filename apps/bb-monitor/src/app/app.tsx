import React, { Suspense, lazy } from 'react';
import { useSelector } from 'react-redux';
import { FirebaseReducer, isEmpty } from 'react-redux-firebase';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RequireAuth from './components/auth/PrivateRoute';
import Preloader from './components/preloader';
import LandingPage from './pages/landing-page';
import { RootState } from './redux/store';

// Classic Pages

const DashboardOne = lazy(() => import('./pages/dashboard-one'));
const SignIn = lazy(() => import('./pages/signin'));
const SignUp = lazy(() => import('./pages/signup'));
const VerifyAccount = lazy(() => import('./pages/verify-account'));
const ForgotPassword = lazy(() => import('./pages/forgot-password'));
const ErrorNotFound = lazy(() => import('./pages/error-404'));
const Error500 = lazy(() => import('./pages/error-500'));
const Error503 = lazy(() => import('./pages/error-503'));
const Error505 = lazy(() => import('./pages/error-505'));
const ProfileView = lazy(() => import('./pages/profile-view'));
const Connections = lazy(() => import('./pages/connections'));
const Timeline = lazy(() => import('./pages/timeline'));
const ShowLicensePage = lazy(() => import('./pages/show-license'));
const ShowChangelogPage = lazy(() => import('./pages/show-changelog'));

const App: React.FC = () => {
  const auth = useSelector<RootState, FirebaseReducer.AuthState>(
    (state) => state.firebase.auth,
    (a, b) => a.isLoaded === b.isLoaded && a.isEmpty === b.isEmpty
  );

  return (
    <BrowserRouter>
      <Suspense fallback={<Preloader />}>
        <Routes>
          {/* Dashboard Routes */}
          <Route
            path="/"
            element={
              isEmpty(auth) || auth.isAnonymous ? (
                <LandingPage />
              ) : (
                <Navigate to="/app" replace />
              )
            }
          />
          <Route
            path="app"
            element={
              <RequireAuth>
                <DashboardOne />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="profile-view"
            element={
              <RequireAuth>
                <ProfileView />
              </RequireAuth>
            }
          />
          {/* User Routes */}
          <Route
            path="connections"
            element={
              <RequireAuth>
                <Connections />
              </RequireAuth>
            }
          />

          {/* Other Routes */}
          <Route
            path="timeline"
            element={
              <RequireAuth>
                <Timeline />
              </RequireAuth>
            }
          />

          {/* Authentication Routes */}
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="verify-account" element={<VerifyAccount />} />
          <Route path="forgot-password" element={<ForgotPassword />} />

          {/* Error Routes */}
          <Route path="error-500" element={<Error500 />} />
          <Route path="error-503" element={<Error503 />} />
          <Route path="error-505" element={<Error505 />} />

          <Route path="show-license" element={<ShowLicensePage />} />
          <Route path="show-changelog" element={<ShowChangelogPage />} />

          {/* Apps Routes */}

          {/* 404 Page Route */}
          <Route path="*" element={<ErrorNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
