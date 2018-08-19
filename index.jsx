import React from 'react';
import ReactDOM from 'react-dom';
import Art from './frontend/components/art';

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	ReactDOM.render(<Art />, root);
});
