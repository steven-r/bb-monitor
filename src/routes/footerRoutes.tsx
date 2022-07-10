import React from 'react';
import { authPages, layoutMenu } from '../menu';
import Footer from '../layout/Footer/Footer';

const footers = [
	{ path: layoutMenu.blank.path, element: null, exact: true },
	{ path: '/auth-pages/login', element: null, exact: true },
	{ path: authPages.signUp.path, element: null, exact: true },
	{ path: '*', element: <Footer /> },
];

export default footers;
