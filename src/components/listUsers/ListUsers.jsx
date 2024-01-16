import { useState } from 'react';
import User from '../User/User';
import { USERS } from '../../constants/USERS';

const ListUsers = () => {
	const [onlyActive, setOnlyActive] = useState(false);
	const [search, setSearch] = useState('');
	const [select, setSelect] = useState('0');

	let filteredUsers = filterActiveUsers(USERS, onlyActive);
	filteredUsers = filterByName(filteredUsers, search);
	filteredUsers = filterBySelect(filteredUsers, select);

	return (
		<>
			<div>
				<input
					onInput={event => changeSearch(event.target.value, setSearch)}
				></input>
				<div>
					<label htmlFor=''>filtrar por activos</label>
					<input
						type='checkbox'
						onChange={() => changeActive(onlyActive, setOnlyActive)}
					></input>
				</div>
				<select onChange={event => changeSelect(event.target.value, setSelect)}>
					<option value={0}>Por defecto</option>
					<option value={1}>Por nombre</option>
				</select>
			</div>
			<div>
				{filteredUsers.map(user => {
					console.log(user);
					return <User key={user.userId} {...user}></User>;
				})}
			</div>
		</>
	);
};
// filtro por input checkbox active
const changeActive = (onlyActive, setOnlyActive) => {
	setOnlyActive(!onlyActive);
};
const filterActiveUsers = (users, onlyActive) => {
	if (!onlyActive) {
		return [...users];
	}
	return users.filter(user => user.active);
};

// filtro por nombre
const changeSearch = (inputValue, setSearch) => {
	setSearch(inputValue);
};
const filterByName = (users, search) => {
	if (!search) {
		return [...users];
	}
	return users.filter(user =>
		user.name.toLowerCase().includes(search.toLowerCase())
	);
};

// filtro por select

const changeSelect = (value, setSelect) => {
	setSelect(value);
};

const filterBySelect = (users, select) => {
	if (select === '0') {
		return [...users];
	}
	return users.sort((a, b) => {
		if (a.name > b.name) return 1;
		if (a.name < b.name) return -1;
		return 0;
	});
};

export default ListUsers;
