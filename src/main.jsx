import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { store } from './app/store';
import { Provider } from 'react-redux'
import './components/Styles/main.css'
import './styles.css'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter basename={"/frontend/"}>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
)
