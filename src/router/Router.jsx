import { Route, Routes } from 'react-router-dom';
import ListUsers from '../components/listUsers/ListUsers';
import UsersDetails from '../components/users-details/UsersDetails';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<ListUsers />} />
			<Route path='/:userId' element={<UsersDetails></UsersDetails>} />
		</Routes>
	);
};
export default Router;
