import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams,
} from "react-router-dom";
import Button from 'components/ex1/Button';
import Button_DONE from 'components/ex1/Button_DONE';
import Calculator from 'components/ex2/Calculator';
import Calculator_DONE from 'components/ex2/Calculator_DONE';
import DataFetch_DONE from 'components/ex3/DataFetch_DONE';
import DataFetch from 'components/ex3/DataFetch';
import './Main.scss';

const idToComponent = {
	1: [Button, Button_DONE],
	2: [Calculator, Calculator_DONE],
	3: [DataFetch, DataFetch_DONE],
};
const initialProps = {
	initialCount: 5,
};

const Exercise = () => {
	const { id, ...rest } = useParams();
	if (!idToComponent[id]) { return <></>; }
	const [WipComponent, CompletedComponent] = idToComponent[id];
	return (
		<div id="components">
			<div id="wip">
				<div className="component">
					<div className="component-label">You</div>
					<WipComponent {...initialProps} {...rest} />
				</div>
			</div>
			<div className="vr" />
			<div id="completed">
				<div className="component">
					<div className="component-label">Finished</div>
					<CompletedComponent {...initialProps} {...rest} />
				</div>
			</div>
		</div>
	);
};

export const Main = () => (
	<Router>
		<div id="main">
			<Sidebar />
			<SwitchContent />
		</div>
	</Router>
);


const Sidebar = () => (
	<div id="sidebar">
		<div id="title">
			UIS REACT WORKSHOP
		</div>
		<hr />
		<Link to="/c/1">Button</Link>
		<Link to="/c/2">Calculator</Link>
		<Link to="/c/3/Jon">Dynamic Data</Link>
	</div>
);

const SwitchContent = () => (
	<div id="content">
		<Switch>
			<Route path="/c/:id/:param?">
				<Exercise />
			</Route>
		</Switch>
	</div>
);