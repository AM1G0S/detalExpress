import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {PersistGate} from "redux-persist/integration/react";
import App from './App.tsx'
import './index.css'
import store, {persistor} from "./redux/store.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<Provider store={store}>
			<React.StrictMode>
				<PersistGate persistor={persistor}>
					<App/>
				</PersistGate>
			</React.StrictMode>
		</Provider>
	</BrowserRouter>
)
