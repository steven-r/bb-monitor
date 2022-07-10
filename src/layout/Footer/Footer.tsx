import React from 'react';
import { Link } from 'react-router-dom';
import { useMeasure } from 'react-use';

const Footer = () => {
	const [ref, { height }] = useMeasure<HTMLDivElement>();

	const root = document.documentElement;
	root.style.setProperty('--footer-height', `${height}px`);

	return (
		<footer ref={ref} className='footer'>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col'>
						Copyright &copy; {new Date().getFullYear()} Stephen Reindl
					</div>
					<div className='col-auto'>
						<Link to='/privacy-policy'>Privacy Policy</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
