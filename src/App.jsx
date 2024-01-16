import { BrowserRouter } from 'react-router-dom';
import ListUsers from './components/listUsers/ListUsers';
import Router from './router/Router';

const App = () => {
	return (
		<BrowserRouter>
			<Router />
		</BrowserRouter>
	);
};
export default App;
