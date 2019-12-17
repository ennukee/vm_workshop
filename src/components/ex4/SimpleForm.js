import React, { Component } from 'react';
import './SimpleForm.scss';

/*
	In this exercise we will be NESTING our components, as well
	as introducing using REFS to handle managing child component state

	⏰ Time allocated: 10-20 minutes
*/

class InputField extends Component {
	state = {
		// ✨ Add a state value to track our input's value
	}
	// 🍰 Add a ref and attach it to the input field below, then modify the usage
	//     of our second button to focus the field (using the ref) when clicked.
	get value() {
		return this.state.value;
	}
	handleChange = (event) => {
		// ✨ Implement this to change the value of state based on the event
		// 💚 Hint: You can access the value of a change event via `event.target.value`
	}
	render() {
		return (
			// ✨ Add a "value" and "onChange" prop to this input
			//     so that we can begin to track its value in state.
			<input type="text" />
		);
	}
}

class Button extends Component {
	render() {
		return (
			// 🍰 Check prop for a color prop and use in-line CSS to modify the
			//     background-color of the button. The style tag in JSX is used
			//     a little different than in normal HTML.
			// ✨ Add an onClick handler to this button and tie it to the "onClick"
			//     prop!
			<button>{/* ✨ Look for a prop to use as value of the button */}</button>
		);
	}
}

export default class SimpleForm extends Component {
	// 💚 Refs are created with `React.createRef()`
	// 💚 Refs are React's way of accessing DOM nodes or other react
	//     components without using props or additional document calls
	// 💚 You can attach a ref to JSX using the `ref` prop.
	//	   e.g. <div ref={this.someRefVar}>Hello</div>
	inputRef = null; // ✨ Replace null with a ref!
	handleButton1Click = () => {
		// ✨ Implement this -- read from our ref and alert() it.
		// 💚 NOTE: To access a ref, you also need to do `.current` on it, so
		//     inputRef.current will access whatever the ref is referring to.
	}
	handleButton2Click = () => {
		// ✨ Implement this -- feel free to do whatever here, or
		//	   attempt the bonus further up to focus the input field.
	}
	render() {
		return (
			<div id="my-simple-form">
				{/* ✨ Add the appropriate props to these components (ref, onClick) */}
				<InputField />
				<Button value="Print Input" />
				<Button value="B2" />
			</div>
		)
	}
}
