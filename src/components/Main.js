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
import DataFetch from 'components/ex3/DataFetch';
import DataFetch_DONE from 'components/ex3/DataFetch_DONE';
import SimpleForm from 'components/ex4/SimpleForm';
import SimpleForm_DONE from 'components/ex4/SimpleForm_DONE';
import './Main.scss';

const idToComponent = {
	1: [Button, Button_DONE],
	2: [Calculator, Calculator_DONE],
	3: [DataFetch, DataFetch_DONE],
	4: [SimpleForm, SimpleForm_DONE],
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
		<LinkSection to="/c/1" desc={["Click handlers", "Basic state"]}>Button</LinkSection>
		<LinkSection to="/c/2" desc={["Complex state management"]}>Calculator</LinkSection>
		<LinkSection to="/c/3/Jon" desc={["Lifecycle methods"]}>Data Fetching</LinkSection>
		<LinkSection to="/c/4" desc={["Nested component interaction", "React Refs", "Callbacks"]}>Form</LinkSection>
	</div>
);

const LinkSection = ({ to, desc = [], children }) => (
	<div className="link-section">
		<Link to={to}>{children}</Link>
		<div className="link-desc">
			{
				desc.map((i) => (
					<div className="link-desc-item">{i}</div>
				))
			}
		</div>
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