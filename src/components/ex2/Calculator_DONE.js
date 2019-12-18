import React, { Component } from 'react';
import './Calculator.scss';

export default class Calculator extends Component {
	state = {
		endValue: 0, // State value for our underlying "end" value tracking
		lastOperation: null, // Track last operation used
		value: '',
	}
	handleClick = (event) => {
		const clickedValue = event.target.getAttribute('data-which');
		// 💚 When + is used as an unary operator, it is identical to Number(value)
		//     and when it fails, it returns NaN, which will fail a conditional
		//     Thus, this conditional only passes when value is a number.
		if (+clickedValue) {
			// 🍰 In-line previous state syntax from Button
			this.setState((prevState) => ({ value: prevState.value + clickedValue }));
		} else {
			const { lastOperation, value, endValue } = this.state;
			if (clickedValue === '=') {
				// Perform our math operation depending on the last operation
				// pressed (if applicable)
				switch (lastOperation) {
					case '+':
						// 💩 This is very unreadable code, don't do this in production.
						alert(+endValue + +value);
						break;
					case '-':
						alert(+endValue - +value);
						break;
					case '/':
						alert(+endValue / +value);
						break;
					default:
						alert(value);
						break;
				}
				// Reset our state back to defaults
				this.setState({ endValue: 0, lastOperation: null, value: '' });
				return;
			}
			// If it's not "=", then we conditionally find our new stored value
			//  based on the last operation clicked (if there is one), which is
			//  then stored in state in our hidden "endValue" field.
			let newStoredValue;
			switch (lastOperation) {
				case '+':
					// 💩 This is very unreadable code, don't do this in production.
					newStoredValue = (+endValue + +value);
					break;
				case '-':
					newStoredValue = (+endValue - +value);
					break;
				case '/':
					newStoredValue = (+endValue / +value);
					break;
				default:
					newStoredValue = value;
					break;
			}
			// Store our new calculated value, set the newly clicked operation for
			//  next usage, and clear visual state.
			this.setState({ endValue: newStoredValue, lastOperation: clickedValue, value: '' })
		}
	}
	handleClear = () => {
		// ✨ Resetting state via clear button
		this.setState({ value: '' });
	}
	render() {
		// 💚 Note that I don't use destructuring here because `value` is defined
		//     in the loop further down in this component, which will cause eslint
		//     errors
		return (
			<div id="calculator">
				<div id="output-display">
					{ this.state.value }
				</div>
				<div id="clear-button" onClick={this.handleClear} className="button">
					clear
				</div>
				{
					[1, 2, 3, 4, 5, 6, 7, 8, 9, '/', '-', '+', '='].map((value) => (
						<div
							id={`button-b${value}`}
							key={`key-${value}`}
							data-which={value}
							className={+value ? 'button number' : 'button operation'}
							onClick={this.handleClick}
						>
							{value}
						</div>
					))
				}
			</div>
		)
	}
}
