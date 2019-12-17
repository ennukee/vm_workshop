import React, { Component } from 'react';
import './Button.scss';

/*
    Welcome to the first exercise -- we'll be building the
	most common "first exercise" component, a Button.

	Tasks in all of these files will be marked with emojis
	  ✨ Adding a feature
	  💚 Refactoring / Tip
	  🔥 Removing code
	  🐛 Relating to potential code bugs
	  🍰 Extra / Bonus tasks

	You will have a few tasks to accomplish here
	✨ Add a "count" value to our state!
	✨ Add a new div to our output with id "count" -- The contents of
	    this div should in-line our new state variable
	   💚 e.g. <div id="some-element">{ someVariable }</div>
	   💚 React only renders one top-level element. You will need to
		   add a wrapper div to contain both the button and the label!
	✨ When the existing button is clicked (use the onClick prop), the
	    count should increment!
	   💚 Recommended to put this into its own function for readability,
	       don't forget "this"
	🍰 Configure your button so that it looks for a prop "initialCount"
		and puts that as our starting count if it exists
	🍰 Decrement the count when you --mouse over-- the button. Keep the
	    click increment in tact.
*/

export default class Button extends Component {
	state = {
		// Existing state stuff
	}
	render() {
		return (
			<div id="button">Click me</div>
		);
	}
}

/*
	Expanding on above points

	"💚 React only renders one top-level element. You will need to
		  add a wrapper div to contain both the button and the label!"
	 > This is due to how JSX is translated into JavaScript during compilation!
	   Essentially, what is passed into the `return` statement is broken down and
	   given to a parameter of React.createElement. However, if you have two elements
	   here, it will try to put two params in one param and explode.

*/
