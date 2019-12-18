import React, { Component } from 'react';
import './Button.scss';

export default class Button extends Component {
	static defaultProps = {
		initialCount: 0,
	}
	state = {
		// ✨ Check our props for `initialCount`, otherwise set it to 0!
		count: this.props.initialCount || 0,
	}
	handleClick = () => {
		// ✨ Incrementing state! Used in onClick prop below
		const { count } = this.state;
		this.setState({ count: count + 1 });

		/*
		  🍰 You can actually do this all in the setState call!
			this.setState((previousState) => { count: previousState.count + 1 });

		  or using fancy destructuring...
			this.setState(({ count }) => { count: count + 1 });
		*/
	}
	handleMouseOver = () => {
		// 🍰 To handle mouseover, it's as simple as using the
		//     "onMouseOver" prop!
		const { count } = this.state;
		this.setState({ count: count - 1 });
	}
	render() {
		// 💄 "Object destructuring" syntax for cleaner JSX below
		const { count } = this.state;
		return (
			<>
				<div id="count">{ count }</div>
				<div
					className="ex1 button"
					onClick={this.handleClick}
					onMouseOver={this.handleMouseOver}
				>
					Click me
				</div>
			</>
		);
	}
}
