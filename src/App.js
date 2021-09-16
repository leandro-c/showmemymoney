import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import { ChakraProvider, Box } from "@chakra-ui/react";
import CakeChart from './components/CakeChart'
import OperationsInvesmets from "./components/OperationsInvesmets";

import MyInvestments from './components/MyInvestments'
import OtherInvesments from './components/OtherInvesments'

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.

// We are going to use this route config in 2
// spots: once for the sidebar and once in the main
// content section. All routes are in the same
// order they would appear in a <Switch>.
const routes = [
	{
		path: "/",
		exact: true,
		sidebar: () => null,
		main: () => <CakeChart/>
	},
	{
		path: "/cajadeahorro",
		sidebar: () => null,
		main: () => <h2>Caja de ahorro</h2>
	},
	{
		path: "/bonoa23",
		sidebar: () => null,
		main: () => <OperationsInvesmets/>
	},
	{
		path: "/accionescocacola",
		sidebar: () => null,
		main: () => <OperationsInvesmets/>
	}
];

export default function App() {
	
	return (
		<ChakraProvider>
			<Router>
				<Box d="flex">
					<Box p="10"margin={2}>
						<MyInvestments />
						<OtherInvesments/>
						<Switch>
							{routes.map((route, index) => (
								// You can render a <Route> in as many places
								// as you want in your app. It will render along
								// with any other <Route>s that also match the URL.
								// So, a sidebar or breadcrumbs or anything else
								// that requires you to render multiple things
								// in multiple places at the same URL is nothing
								// more than multiple <Route>s.
								<Route
									key={index}
									path={route.path}
									exact={route.exact}
									children={<route.sidebar />}
								/>
							))}
						</Switch>
					</Box>

					<Box d="flex" p="10">
						<Switch>
							{routes.map((route, index) => (
								// Render more <Route>s with the same paths as
								// above, but different components this time.
								<Route
									key={index}
									path={route.path}
									exact={route.exact}
									children={<route.main />}
								/>
							))}
						</Switch>
					</Box>
				</Box>
			</Router>
		</ChakraProvider>
	);
}