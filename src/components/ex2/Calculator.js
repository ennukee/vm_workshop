import React, { Component } from 'react';
import './Calculator.scss';

/*
	Don't be mislead, this is still  making a component from scratch!
	 I just did all the visual work beforehand, so you can go right into
	 coding the component itself.

	⏰ Time allocated: 30-40 minutes

	The concept is simple, but the implementation may be more complex than
	 you would initially think. This exercise is meant to help build a good
	 understanding of state management.

	✨ Fill in the needed interpolation within the `output-display` div
	✨ When a number is clicked, attach it to the state appropriately
	   💚 The keyword here is "appropriately" -- depending on how you store
	       the data, your approach here may have to be different.
	   🐛 You can safely use the `handleClick` helper below -- the value
		   param will *always* be the number you clicked, you have my word.
		   (it can also be / - + = though)
	✨ When "clear" is clicked, reset back to defaults.
	✨ When you click any operation ( + - / ) reset the visual to a blank slate.
		Also, if you have pressed an operation previously, perform an operation on
		the currently visible data and the stored data before wiping slate
	   💚 e.g. "85 -" stores 85 and wipes visual. If you then type 65 +, it will
	       store 20 before wiping slate (85 - 65).
	✨ When "equals" is pressed, perform any final operations that are stored and
		display the output.
	   💚 For simplicity sake, you can use alert(...) to display your value and just
	       reset state immediately.
	🍰 Question: How might you approach allowing the user to use their keyboard
	    to enter numbers?
*/

export default class Calculator extends Component {
	state = {
		// Existing state stuff
		value: '',
	}
	handleClick = (event) => {
		const clickedValue = event.target.getAttribute('data-which');
		// ✨ Implement me!
		// 💚 This function will handle all button clicks in the calculator
		//     You can trust that "clickedValue" here is equivalent to the number or
		//     operation symbol hit in the calculator.
	}
	render() {
		return (
			<div id="calculator">
				<div id="output-display">
					{/* ✨ Calculator value state goes here */}
				</div>
				{/* ✨ Add the clearing operation to this button! */}
				<div id="clear-button" className="button">
					clear
				</div>

				{/* 🔴 Avoid touching anything below this point 🔴 */}
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
		);
	}
}
