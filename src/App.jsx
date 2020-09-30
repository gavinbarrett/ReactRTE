import React from 'react';
import ReactDOM from 'react-dom';
import { CommentForm } from './CommentForm';

const App = () => {
	return (<div id="app">
		<CommentForm width={50} height={30} max={1000}/>
	</div>);
}

ReactDOM.render(<App/>, document.getElementById('root'));
