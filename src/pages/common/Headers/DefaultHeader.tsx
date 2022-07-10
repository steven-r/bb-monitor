import React from 'react';
import Header, { HeaderLeft, HeaderRight } from '../../../layout/Header/Header';
import Navigation from '../../../layout/Navigation/Navigation';
import { layoutMenu } from '../../../menu';
import useDeviceScreen from '../../../hooks/useDeviceScreen';
import Popovers from '../../../components/bootstrap/Popovers';
import EmailVerificationMissing from './EmailVerificationMissing';

const DefaultHeader = () => {
	const { width } = useDeviceScreen();
	return (
		<>
			<Header>
				<HeaderLeft>
					<Navigation
						menu={{ ...layoutMenu }}
						id='header-top-menu'
						horizontal={
							!!width && width >= Number(process.env.REACT_APP_MOBILE_BREAKPOINT_SIZE)
						}
					/>
				</HeaderLeft>
				<HeaderRight>
					<Popovers
						title='DefaultHeader.js'
						desc={<code>src/pages/common/Headers/DefaultHeader.js</code>}>
						Header Right
					</Popovers>
					<code>DefaultHeader.js</code>
				</HeaderRight>
			</Header>
			<EmailVerificationMissing />
		</>
	);
};

export default DefaultHeader;
