import React from "react";

import "./App.scss";

import { Provider } from "react-redux";
import store from "./redux/store";
import { GraphicContainer } from "./components/organisms";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<GraphicContainer />
			</div>
		</Provider>
	);
}

export default App;
