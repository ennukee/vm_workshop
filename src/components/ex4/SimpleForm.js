import React, { Component } from 'react';
import './SimpleForm.scss';

/*
	This exercise focuses on interactions between nested components,
	 as well as making use of React "Refs" to simplify interacting
	 with child components.

	⏰ Time allocated: 10-20 minutes

	Look in the code below for your tasks, marked with ✨ -- recommended to read
	 all of them before starting, they are marked loosely with an order to do them in
*/

class InputField extends Component {
	state = {
		// ✨ 1. Add a state value to track our input's value
	}
	// 🍰 Add a ref and attach it to the input field below, then modify the usage
	//     of our second button to focus the field (using the ref) when clicked.
	get value() {
		return this.state.value;
	}
	handleChange = (event) => {
		// ✨ 2. Implement this to change the value of state based on the event
		// 💚 Hint: You can access the value of a change event via `event.target.value`
	}
	render() {
		return (
			// ✨ 3. Add a "value" and "onChange" prop to this input
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
			// ✨ 4. Add an onClick handler to this button and tie it to the "onClick"
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
	inputRef = null; // ✨ 5. Replace null with a ref!
	handleButton1Click = () => {
		// ✨ 7. Implement this -- read from our ref and alert() it.
		// 💚 NOTE: To access a ref, you also need to do `.current` on it, so
		//     inputRef.current will access whatever the ref is referring to.
	}
	handleButton2Click = () => {
		// ✨ 8. Implement this -- feel free to do whatever here, or
		//	   attempt the bonus further up to focus the input field.
	}
	render() {
		return (
			<div id="my-simple-form">
				{/* ✨ 6. Add the appropriate props to these components (ref, onClick) */}
				<InputField />
				<Button value="Print Input" />
				<Button value="B2" />
			</div>
		);
	}
}
