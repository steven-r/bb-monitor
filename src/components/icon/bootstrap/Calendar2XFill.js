import * as React from 'react';

function SvgCalendar2XFill(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path d='M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zm9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5zm-6.6 5.146a.5.5 0 10-.708.708L7.293 10l-1.147 1.146a.5.5 0 00.708.708L8 10.707l1.146 1.147a.5.5 0 00.708-.708L8.707 10l1.147-1.146a.5.5 0 00-.708-.708L8 9.293 6.854 8.146z' />
		</svg>
	);
}

export default SvgCalendar2XFill;
