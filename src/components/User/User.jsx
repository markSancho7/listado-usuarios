import { StyledImg, StyledState, StyledUser } from './styles';

const User = ({ profileImage, name, email, active }) => {
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
			<button>detalles</button>
		</StyledUser>
	);
};
export default User;
