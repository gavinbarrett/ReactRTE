import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBold, faItalic } from '@fortawesome/free-solid-svg-icons';

const FormButton = ({n, styling, handler, icon}) => {

	console.log(n);

	const hover = () => {
		console.log('hover');
		document.getElementById(n).style.background = '#484848';
	}

	const unhover = () => {
		console.log('unhover');
		document.getElementById(n).style.background = 'gray';
	}

	return (<div id={n} style={styling} onClick={handler} onMouseEnter={hover} onMouseLeave={unhover}>
		<FontAwesomeIcon icon={icon}/>
	</div>);
}

const SelectBar = ({width}) => {
	
	const selectStyle = {
		width: `${width}vw`,
		display: 'flex',
	};
	
	const iconStyle = {
		width: '5vw',
		height: '5vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		border: '1px solid black'
	};
	
	const boldClick = () => {
		console.log('bold');
	}

	const italicClick = () => {
		console.log('italic');
	}

	return (<div id="selectbox" style={selectStyle}>
		<FormButton n={"bold"} styling={iconStyle} handler={boldClick} icon={faBold}/>
		<FormButton n={"italic"} styling={iconStyle} handler={italicClick} icon={faItalic}/>
	</div>);
}

const CommentForm = ({width, height, max}) => {
	
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
		borderRadius: '10px'
	};

	const textareaStyle = {
		width: `${width}vw`,
		height: `${height}vh`,
		fontSize: '2vw',
		resize: 'none',
		border: '0',
		borderRadius: '10px'
	};

	return (<div id="formwrapper">
		<div id="formbox" style={formboxStyle}>
			<SelectBar width={width}/>	
			<textarea id={"textblock"} style={textareaStyle} spellCheck={false} maxLength={max}></textarea>
		</div>
	</div>);
}

export {
	CommentForm
}
