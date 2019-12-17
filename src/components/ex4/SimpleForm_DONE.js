import React, { Component } from 'react';
import './SimpleForm.scss';

/*
	In this exercise we will be NESTING our components, as well
	as introducing using REFS to handle managing child component state
*/

class InputField extends Component {
	state = {
		value: '', // ✨
	}
	inputRef = React.createRef(); // 🍰
	get value() {
		return this.state.value;
	}
	handleChange = (event) => {
		// ✨
		this.setState({ value: event.target.value });
	}
	render() {
		return (
			<input
				type="text"
				ref={this.inputRef} // 🍰
				value={this.state.value} // ✨
				onChange={this.handleChange} // ✨
			/>
		);
	}
}

class Button extends Component {
	render() {
		return (
			// 🍰 Check prop for a color prop and use in-line CSS to modify the
			//     background-color of the button. The style tag in JSX is used
			//     a little different than in normal HTML.
			<button
				onClick={this.props.onClick}
				style={{
					// 🍰 CSS styles are used with camel case (as JS can't have
					//     hyphens in var names). Note how this is a double bracket {{}}
					//     due to how all JS is surrounded in {}, but this is an object.
					//     {object} = {{}}.
					backgroundColor: this.props.color,
				}}
			>
				{this.props.value}
			</button>
		);
	}
}

export default class SimpleForm extends Component {
	inputRef = React.createRef(); // ✨
	handleButton1Click = () => {
		// ✨ This uses our `get value()` above, which acts as a static property
		//     on the class, allowing us to directly access it like a normal property
		alert(this.inputRef.current.value);
	}
	handleButton2Click = () => {
		// ✨ Get our inputRef, then go into that components' inputRef, and focus
		//     the DOM node
		this.inputRef.current.inputRef.current.focus();
	}
	render() {
		return (
			<div id="my-simple-form">
				{/* ✨ Add ref and onClick props! */}
				<InputField ref={this.inputRef} />
				<Button value="Print Input" onClick={this.handleButton1Click} />
				<Button value="B2" onClick={this.handleButton2Click} />
			</div>
		)
	}
}
