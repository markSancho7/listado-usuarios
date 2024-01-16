import { Link, useParams } from 'react-router-dom';
import { USERS } from '../../constants/USERS';

const UsersDetails = () => {
	const { userId } = useParams();
	console.log(userId);
	const { profileImage, name, email, active } = USERS.find(
		user => user.userId === userId
	);
	return (
		<>
			<img src={profileImage} alt='' />
			<h1>{name}</h1>
			<p>{email}</p>
			<p>{active}</p>
			<Link to={'/'}>HOME</Link>
		</>
	);
};
export default UsersDetails;
