import React, { Component } from 'react';
import './DataFetch.scss';
import { Link } from "react-router-dom";
import requestApi from './util/fetch';

export default class DataFetch extends Component {
	state = {
		age: 0,
		hobby: '',
		loading: false, // 🍰🍰
		name: '',
	}
	componentDidMount = () => this.loadData();
	componentDidUpdate = (previousProps, previousState) => {
		// ✨ Implement this similarly to above, but compare the current props
		//     to the previous props and see if the param has changed. If it has,
		//     (and ONLY if it has), perform a requestApi call again and refresh
		//     state with new data.
		// 🐛 NEVER use setState in componentDidUpdate without a conditional
		//     You will infinitely trigger componentDidUpdate if you setState
		//     unconditionally.
		if (previousProps.param !== this.props.param) {
			this.loadData();
		}
	}
	loadData = () => {
		// 🍰🍰 Set loading to true, then use setState's second param
		//        to fire off the request in a callback. Once that's done,
		//        we set loading to false at the same time we set our data.
		// 💚 setState has a less known second parameter, which takes a function
		//     that is executed after the state change has been performed (helps
		//     prevent any state desyncing, since setState is innately async)
		this.setState({ loading: true }, async () => {
			const data = await requestApi(this.props.param);
			if (!data) {
				alert('Danger! No response!');
			}
			this.setState({ ...data, loading: false });
		});
	}
	render() {
		const {
			name,
			age,
			hobby,
			loading, // 🍰🍰
		} = this.state;
		return (
			<div id="data-fetch">
				{ loading ? <div>Loading...</div> : null /* 🍰🍰 */}
				{
					// This is ternary syntax, one of the more confusing
					// bits you may encounter in React code. Since you can't use
					// an if-else with in-line code like you must in JSX, ternaries
					// are quite common. Form: `condition? if-true : if-false`.
					//  🍰 How might the condition below backfire?
					(name && age && hobby) ? (
						<div id="output-display">
							{/* ✨ Fill in the divs below with your state to be shown */}
							<div id="age">
								Age:
								{ age }
							</div>
							<div id="hobby">
								Hobby:
								{ hobby }
							</div>
							<div id="name">
								Name:
								{ name }
							</div>
						</div>
					) : (
						<div>No data!</div>
					)
				}
				{/* NOTE: We use a package called `classnames` at Vestmark to
					handle className logic like below. */}
				<div id="other-people" className={loading ? 'disabled' : ''}>
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