import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import useDarkMode from '../../hooks/useDarkMode';
import Collapse from '../../components/bootstrap/Collapse';
import { NavigationItem, NavigationLine } from '../Navigation/Navigation';
import Icon from '../../components/icon/Icon';
import useNavigationItemHandle from '../../hooks/useNavigationItemHandle';
import { useFirebase } from '../../contexts/firebaseContext';

const User = () => {
	const navigate = useNavigate();
	const handleItem = useNavigationItemHandle();
	const { darkModeStatus, setDarkModeStatus } = useDarkMode();

	const [collapseStatus, setCollapseStatus] = useState<boolean>(false);

	const { t } = useTranslation(['translation', 'menu']);

	const { user, auth, isAuthenticated } = useFirebase();

	const signOut = () => {
		auth.signOut()
			.then(() => {
				navigate(`/`);
			})
			.catch((reason) => {
				console.log(reason);
			});
	};

	if (!(isAuthenticated && user)) {
		return (
			<NavigationItem
				key='login'
				id='login'
				title='Login'
				icon='Login'
				to='/auth-pages/login'
				rootId='aside-demo-pages'
			/>
		);
	} else
		return (
			<>
				<div
					className={classNames('user', { open: collapseStatus })}
					role='presentation'
					onClick={() => setCollapseStatus(!collapseStatus)}>
					{user?.photoURL && (
						<div className='user-avatar'>
							<img
								srcSet={user.photoURL}
								src={user.photoURL}
								alt='Avatar'
								width={128}
								height={128}
							/>
						</div>
					)}
					<div className='user-info'>
						<div className='user-name'>{user && user.displayName}</div>
						<div className='user-sub-title'>
							{user && user.email}
							{/* <code className='ps-2'>User.js</code> */}
						</div>
					</div>
				</div>
				<Collapse isOpen={collapseStatus} className='user-menu'>
					<nav aria-label='aside-bottom-user-menu'>
						<div className='navigation'>
							<div
								role='presentation'
								className='navigation-item cursor-pointer'
								onClick={() =>
									navigate(
										`/`,
										// @ts-ignore
										handleItem(),
									)
								}>
								<span className='navigation-link navigation-link-pill'>
									<span className='navigation-link-info'>
										<Icon icon='AccountBox' className='navigation-icon' />
										<span className='navigation-text'>{t('menu:Profile')}</span>
									</span>
								</span>
							</div>
							<div
								role='presentation'
								className='navigation-item cursor-pointer'
								onClick={() => {
									setDarkModeStatus(!darkModeStatus);
									handleItem();
								}}>
								<span className='navigation-link navigation-link-pill'>
									<span className='navigation-link-info'>
										<Icon
											icon={darkModeStatus ? 'DarkMode' : 'LightMode'}
											color={darkModeStatus ? 'info' : 'warning'}
											className='navigation-icon'
										/>
										<span className='navigation-text'>
											{darkModeStatus
												? t('menu:DarkMode')
												: t('menu:LightMode')}
										</span>
									</span>
								</span>
							</div>
						</div>
					</nav>
					<NavigationLine />
					<nav aria-label='aside-bottom-user-menu-2'>
						<div className='navigation'>
							<div
								role='presentation'
								className='navigation-item cursor-pointer'
								onClick={signOut}>
								<span className='navigation-link navigation-link-pill'>
									<span className='navigation-link-info'>
										<Icon icon='Logout' className='navigation-icon' />
										<span className='navigation-text'>{t('menu:Logout')}</span>
									</span>
								</span>
							</div>
						</div>
					</nav>
				</Collapse>
			</>
		);
};

export default User;
