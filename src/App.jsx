import { v4 } from 'uuid';
import User from './components/User/User';
import { USERS } from './constants/USERS';
import { useState } from 'react';

const App = () => {
	const [isChecked, setIsChecked] = useState(false);
	return (
		<>
			<div>
				<input></input>
				<div>
					<label htmlFor=''>filtrar por activos</label>
					<input type='checkbox'></input>
				</div>
				<select>
					<option>Por defecto</option>
					<option>Por nombre</option>
				</select>
			</div>
			<div>
				<User {...USERS[0]}></User>
			</div>
			<h1>{isChecked ? 'CHECKED' : 'NOT CHECKED'}</h1>
			<input
				type='checkbox'
				onChange={() => changeChecked(setIsChecked, event)}
			/>
		</>
	);
};
const changeChecked = (setIsChecked, event) => {
	setIsChecked(event.target.checked);
};

// <div>
// 		{USERS.map(user => {
// 		return <User key={v4()} {...user}></User>;
// 		})}
// 	</div>
export default App;
