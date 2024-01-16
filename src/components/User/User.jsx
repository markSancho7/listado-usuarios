import { Link } from 'react-router-dom';
import { StyledImg, StyledState, StyledUser } from './styles';

const User = ({ userId, profileImage, name, email, active }) => {
	return (
		<StyledUser>
			<StyledImg src={profileImage} alt='' />
			<div>
				<h3>{name}</h3>
				<h4>{email}</h4>
			</div>
			<StyledState $active={active}>
				{active ? 'active' : 'no active'}
			</StyledState>
			<Link to={`/${userId}`}>detalles</Link>
		</StyledUser>
	);
};
export default User;
