import React, { lazy } from 'react';
import IsAuth from '../components/extras/IsAuth';
import { dashboardMenu, authPages, layoutMenu } from '../menu';
import Login from '../pages/presentation/auth/Login';

const LANDING = {
	WELCOME: lazy(() => import('../pages/landing/LandingPage')),
	PRIVACY_POLICY: lazy(() => import('../pages/presentation/common/privacy-policy')),
};

const APP = {
	DASHBOARD: lazy(() => import('../pages/dashboard/DashboardPage')),
};

const AUTH = {
	PAGE_404: lazy(() => import('../pages/presentation/auth/Page404')),
};
const PAGE_LAYOUTS = {
	HEADER_SUBHEADER: lazy(() => import('../pages/presentation/page-layouts/HeaderAndSubheader')),
	HEADER: lazy(() => import('../pages/presentation/page-layouts/OnlyHeader')),
	SUBHEADER: lazy(() => import('../pages/presentation/page-layouts/OnlySubheader')),
	CONTENT: lazy(() => import('../pages/presentation/page-layouts/OnlyContent')),
	BLANK: lazy(() => import('../pages/presentation/page-layouts/Blank')),
	ASIDE: lazy(() => import('../pages/presentation/aside-types/DefaultAsidePage')),
	MINIMIZE_ASIDE: lazy(() => import('../pages/presentation/aside-types/MinimizeAsidePage')),
};

const presentation = [
	/**
	 * Landing
	 */
	{
		path: dashboardMenu.dashboard.path,
		element: (
			<IsAuth isAuthenticated={<APP.DASHBOARD />} isNotAuthenticated={<LANDING.WELCOME />} />
		),
		exact: true,
	},
	{
		path: authPages.page404.path,
		element: <AUTH.PAGE_404 />,
		exact: true,
	},
	{
		path: authPages.login.path,
		element: <Login />,
		exact: true,
	},
	{
		path: authPages.signUp.path,
		element: <Login isSignUp />,
		exact: true,
	},
	{
		path: '/privacy-policy',
		element: <LANDING.PRIVACY_POLICY />,
		exact: true,
	},

	/** ************************************************** */

	/**
	 * Page Layout Types
	 */
	{
		path: layoutMenu.blank.path,
		element: <PAGE_LAYOUTS.BLANK />,
		exact: true,
	},
	{
		path: layoutMenu.pageLayout.subMenu.headerAndSubheader.path,
		element: <PAGE_LAYOUTS.HEADER_SUBHEADER />,
		exact: true,
	},
	{
		path: layoutMenu.pageLayout.subMenu.onlyHeader.path,
		element: <PAGE_LAYOUTS.HEADER />,
		exact: true,
	},
	{
		path: layoutMenu.pageLayout.subMenu.onlySubheader.path,
		element: <PAGE_LAYOUTS.SUBHEADER />,
		exact: true,
	},
	{
		path: layoutMenu.pageLayout.subMenu.onlyContent.path,
		element: <PAGE_LAYOUTS.CONTENT />,
		exact: true,
	},
	{
		path: layoutMenu.asideTypes.subMenu.defaultAside.path,
		element: <PAGE_LAYOUTS.ASIDE />,
		exact: true,
	},
	{
		path: layoutMenu.asideTypes.subMenu.minimizeAside.path,
		element: <PAGE_LAYOUTS.MINIMIZE_ASIDE />,
		exact: true,
	},
];
const contents = [...presentation];

export default contents;
