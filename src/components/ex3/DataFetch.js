import React, { Component } from 'react';
import './DataFetch.scss';
import { Link } from "react-router-dom";

// Usage: const response = requestApi(someParameter)
import requestApi from './util/fetch';

/*
	This exercise focuses on Lifecycle Methods -- specifically the two
	 most common, componentDidMount and componentDidUpdate.

	⏰ Time allocated: 20-25 minutes

	💚 componentDidMount is ran whenever a component is FIRST LOADED. It
		will run ONCE and never again until it is removed (more below the
		code if you want some specifics)
	💚 componentDidUpdate is ran whenever a components' STATE or PROPS are
		updated. This is NOT run on initial render like componentDidMount.
		This lifecycle has TWO PARAMS representing the props and state of
		the component prior to its update.

	Look in the code below for your tasks, marked with ✨
*/

export default class DataFetch extends Component {
	state = {
		// ✨ Write your default state here
	}
	componentDidMount = () => {
		// ✨ Implement this using requestApi, which takes a single string param.
		//     You can access the param via `this.props.param`
		// ✨ The result will be an object with keys "age", "hobby", and "name".
		//     store all of these in state.
		// 🍰 Check if the response is null -- if it is,
		//     handle it however you like (clear state, use an alert, etc) but
		//     make it obvious to the user something went wrong
	}
	componentDidUpdate = (previousProps, previousState) => {
		// ✨ Implement this similarly to above, but compare the current props
		//     to the previous props and see if the param has changed. If it has,
		//     (and ONLY if it has), perform a requestApi call again and refresh
		//     state with new data.
		// 🐛 NEVER use setState in componentDidUpdate without a conditional
		//     You will infinitely trigger componentDidUpdate if you setState
		//     unconditionally.
	}
	render() {
		return (
			<div id="data-fetch">
				{/*
					🍰 Look into JS ternary expressions and conditionally render
						a 'placeholder' view if there is no data in state.
						To test it, change the name in the URL to some invalid
						name (e.g. "Bob")
				 */}
				<div id="output-display">
					{/* ✨ Fill in the divs below with your state to be shown */}
					<div id="age">
						Age:
					</div>
					<div id="hobby">
						Hobby:
					</div>
					<div id="name">
						Name: 
					</div>
				</div>
				{/* Don't touch this bit */}
				<div id="other-people">
					<Link to="/c/3/Jon">Jon</Link>
					<Link to="/c/3/Harry">Harry</Link>
					<Link to="/c/3/Larry">Larry</Link>
					<Link to="/c/3/Invalid">Invalid</Link>
				</div>
			</div>
		);
	}
}

/*
	Expanding on above points

	"💚 componentDidMount is ran whenever a component is FIRST LOADED. It
		will run ONCE and never again until it is removed"
	 > Note that we say "loaded" and "mounted", this isn't necessarily an
		ultimate "one-time-only" because if you ever conditionally render the
		component (e.g. with an in-line if-else aka a ternary) then it will rerun
		the componentDidMount every time it's loaded after being previously unloaded
	  For example: if state.A then load <SomeComponent> otherwise load <ThisComponent>
		if A = true, SomeComponents' mount will run, but if you change A to false,
		then back to true again, the mount WILL run again.

*/