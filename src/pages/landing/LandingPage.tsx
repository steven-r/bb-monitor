import React from 'react';

import PageWrapper from '../../layout/PageWrapper/PageWrapper';
import SubHeader, {
	SubHeaderLeft,
	SubHeaderRight,
	SubheaderSeparator,
} from '../../layout/SubHeader/SubHeader';
import Page from '../../layout/Page/Page';
import Popovers from '../../components/bootstrap/Popovers';

const LandingPage = () => {
	return (
		<PageWrapper title='Welcome'>
			<SubHeader>
				<SubHeaderLeft>
					<Popovers
						title='DashboardPage.js'
						desc={<code>src/pages/dashboard/DashboardPage.js</code>}>
						SubHeaderLeft
					</Popovers>
					<code>DashboardPage.js</code>
					<SubheaderSeparator />
				</SubHeaderLeft>
				<SubHeaderRight>
					<Popovers
						title='DashboardPage.js'
						desc={<code>src/pages/dashboard/DashboardPage.js</code>}>
						SubHeaderRight
					</Popovers>
					<code>DashboardPage.js</code>
				</SubHeaderRight>
			</SubHeader>
			<Page>
				<div className='row'>
					<div className='col-12 mb-3'>
						<h1>Welcome to BitBurner Monitor</h1>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default LandingPage;
