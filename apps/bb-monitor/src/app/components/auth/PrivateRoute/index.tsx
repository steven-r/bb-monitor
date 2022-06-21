import React, { FC, PropsWithChildren } from 'react';
import { useSelector } from 'react-redux';
import { FirebaseReducer, isEmpty, isLoaded } from 'react-redux-firebase';
import { Navigate } from 'react-router-dom';
import { RootState } from '../../../redux/store';

type IProps = any;

const RequireAuth: FC<PropsWithChildren<IProps>> = ({children}) => {
  const auth = useSelector<RootState, FirebaseReducer.AuthState>(
    (state) => state.firebase.auth,
    (a, b) => a.isLoaded === b.isLoaded && a.isEmpty === b.isEmpty
  );
  console.log("RequireAuth --> ", auth);
  if (auth.isAnonymous) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default RequireAuth;
