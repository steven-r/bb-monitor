import * as React from 'react';

function SvgWindowDock(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1em'
			height='1em'
			fill='currentColor'
			className='svg-icon'
			viewBox='0 0 16 16'
			{...props}>
			<path
				fillRule='evenodd'
				d='M15 5H1v8a1 1 0 001 1h12a1 1 0 001-1V5zm0-1H1V3a1 1 0 011-1h12a1 1 0 011 1v1zm1-1a2 2 0 00-2-2H2a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V3z'
			/>
			<path d='M3 11.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm4 0a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm4 0a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1z' />
		</svg>
	);
}

export default SvgWindowDock;
