import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBold, faItalic } from '@fortawesome/free-solid-svg-icons';
const CommentForm = ({width, height}) => {
	
	const [bold, toggleBold] = useState(false);
	const [italic, toggleitalic] = useState(false);

	const switchBold = async () => {
		bold ? await toggleBold(false) : await toggleBold(true);
	}

	const switchItalic = async () => {
		italic ? await toggleItalic(false) : await toggleItalic(true);
	}

	const formboxStyle = {
		width: `${width*1.2}vw`,
		height: `${height*1.4}vh`,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		paddingTop: '5vh',
		background: 'gray',
	};

	const textareaStyle = {
		width: `${width}vw`,
		height: `${height}vh`,
		fontSize: '2vw',
		resize: 'none'
	};

	const selectStyle = {
		width: `${width}vw`,
		display: 'flex',
	};

	const iconStyle = {
		width: '10vw',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	};

	return (<div id="formwrapper">
		<div id="formbox" style={formboxStyle}>
			<textarea style={textareaStyle}></textarea>
			<div id="selectbox" style={selectStyle}>
				<div style={iconStyle}>
					<FontAwesomeIcon icon={faBold} />
				</div>
				<div style={iconStyle}>
					<FontAwesomeIcon icon={faItalic} />
				</div>
			</div>
		</div>
	</div>);
}

export {
	CommentForm
}
