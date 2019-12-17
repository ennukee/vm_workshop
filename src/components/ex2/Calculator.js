import React, { Component } from 'react';
import './Calculator.scss';

/*
	Don't be mislead, this is still  making a component from scratch!
	 I just did all the visual work beforehand, so you can go right into
	 coding the component itself.

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
	✨ When "clear" is clicked, reset our value back to nothing
	✨ When you click any operaiton ( + - / ) reset the visual to a blank slate.
		Also, if you have pressed an operation previously, perform an operation on
		the currently visible data and the stored data before wiping slate
	   💚 e.g. "85 -" stores 85 and wipes visual. If you then type 65 +, it will
	       store 20 before wiping slate (85 - 65).
	✨ When "equals" is pressed, perform any final operations that are stored and
		display the output.
	   💚 For simplicity sake, you can use alert(...) to display your value and just
	       reset state immediately.
	🍰🔥 How could you refactor our handleClick to no longer need us passing in `value`?
		  Hint: This requires usage of the `event` param
	🍰 If a user presses two operations in a row, only store the latest one
		(e.g. a user presses 85, then hits + and - subsequently, you only care
			for the - press)
*/

export default class Calculator extends Component {
	state = {
		// Existing state stuff
		value: '',
	}
	handleClick = (event, clickedValue) => {
		// 💚 This function will handle all button clicks in the calculator
		//     You can trust that "clickedValue" here is equivalent to the number or
		//     operation symbol hit in the calculator.
		console.log(this.state.value, clickedValue);
	}
	render() {
		return (
			<div id="calculator">
				<div id="output-display">
					{/* ✨ Calculator display state goes here */}
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
							className={+value ? 'button number-button' : 'button op-button'}
							onClick={(e) => this.handleClick(e, value)}
						>
							{value}
						</div>
					))
				}
			</div>
		);
	}
}
