import React, { useContext, useRef, useState } from 'react';
import classNames from 'classnames';
import { motion, MotionStyle } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Brand from '../Brand/Brand';
import Navigation, { NavigationLine } from '../Navigation/Navigation';
import User from '../User/User';
import { dashboardMenu, demoPages, layoutMenu } from '../../menu';
import ThemeContext from '../../contexts/themeContext';

import Icon from '../../components/icon/Icon';
import Tooltips from '../../components/bootstrap/Tooltips';
import useAsideTouch from '../../hooks/useAsideTouch';
import Popovers from '../../components/bootstrap/Popovers';

const Aside = () => {
	const { asideStatus, setAsideStatus } = useContext(ThemeContext);

	const { asideStyle, touchStatus, hasTouchButton, asideWidthWithSpace, x } = useAsideTouch();

	const isModernDesign = process.env.REACT_APP_MODERN_DESGIN === 'true';

	const constraintsRef = useRef(null);

	const [doc, setDoc] = useState(false);

	const { t } = useTranslation(['translation', 'menu']);

	return (
		<>
			<motion.aside
				style={asideStyle as MotionStyle}
				className={classNames(
					'aside',
					{ open: asideStatus },
					{
						'aside-touch-bar': hasTouchButton && isModernDesign,
						'aside-touch-bar-close': !touchStatus && hasTouchButton && isModernDesign,
						'aside-touch-bar-open': touchStatus && hasTouchButton && isModernDesign,
					},
				)}>
				<div className='aside-head'>
					<Brand asideStatus={asideStatus} setAsideStatus={setAsideStatus} />
				</div>
				<div className='aside-body'>
					<Navigation menu={dashboardMenu} id='aside-dashboard' />
					<NavigationLine />
					{!doc && (
						<>
							<Navigation menu={demoPages} id='aside-demo-pages' />
							<NavigationLine />
							<Navigation menu={layoutMenu} id='aside-menu' />
							<NavigationLine />
							<nav>
								<div className='navigation'>
									<div className='navigation-item'>
										<span className='navigation-link navigation-link-pill'>
											<span className='navigation-link-info'>
												<span className='navigation-text'>
													<Popovers
														title='Aside.js'
														desc={
															<code>src/layout/Aside/Aside.js</code>
														}>
														Aside
													</Popovers>
													<code className='ps-3'>Aside.js</code>
												</span>
											</span>
										</span>
									</div>
								</div>
							</nav>
						</>
					)}

					{asideStatus && doc && <div className='p-4'>Documentation</div>}
				</div>
				<div className='aside-foot'>
					<nav aria-label='aside-bottom-menu'>
						<div className='navigation'>
							<div
								role='presentation'
								className='navigation-item cursor-pointer'
								onClick={() => {
									setDoc(!doc);
								}}
								data-tour='documentation'>
								<span className='navigation-link navigation-link-pill'>
									<span className='navigation-link-info'>
										<Icon
											icon={doc ? 'ToggleOn' : 'ToggleOff'}
											color={doc ? 'success' : null}
											className='navigation-icon'
										/>
										<span className='navigation-text'>
											{t('menu:Documentation')}
										</span>
									</span>
									<span className='navigation-link-extra'>
										<Icon
											icon='Circle'
											className={classNames(
												'navigation-notification',
												'text-success',
												'animate__animated animate__heartBeat animate__infinite animate__slower',
											)}
										/>
									</span>
								</span>
							</div>
						</div>
					</nav>
					<User />
				</div>
			</motion.aside>
			{asideStatus && hasTouchButton && isModernDesign && (
				<>
					<motion.div className='aside-drag-area' ref={constraintsRef} />
					<Tooltips title='Toggle Aside' flip={['top', 'right']}>
						<motion.div
							className='aside-touch'
							drag='x'
							whileDrag={{ scale: 1.2 }}
							whileHover={{ scale: 1.1 }}
							dragConstraints={constraintsRef}
							// onDrag={(event, info) => console.log(info.point.x, info.point.y)}
							dragElastic={0.1}
							style={{ x, zIndex: 1039 }}
							onClick={() => x.set(x.get() === 0 ? asideWidthWithSpace : 0)}
						/>
					</Tooltips>
				</>
			)}
		</>
	);
};

export default Aside;
