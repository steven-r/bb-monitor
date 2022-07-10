import React from 'react';
import { dashboardMenu, authPages, layoutMenu } from '../menu';
import DashboardHeader from '../pages/common/Headers/DashboardHeader';
import DefaultHeader from '../pages/common/Headers/DefaultHeader';

const headers = [
	{ path: layoutMenu.pageLayout.subMenu.onlySubheader.path, element: null, exact: true },
	{ path: layoutMenu.pageLayout.subMenu.onlyContent.path, element: null, exact: true },
	{ path: layoutMenu.blank.path, element: null, exact: true },
	{ path: authPages.login.path, element: null, exact: true },
	{ path: authPages.signUp.path, element: null, exact: true },
	{ path: authPages.page404.path, element: null, exact: true },
	{ path: dashboardMenu.dashboard.path, element: <DashboardHeader />, exact: true },
	{
		path: `*`,
		element: <DefaultHeader />,
	},
];

export default headers;
