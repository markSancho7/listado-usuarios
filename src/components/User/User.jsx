import { StyledImg, StyledState, StyledUser } from './styles';

const User = props => {
	return (
		<StyledUser>
			<StyledImg src={props.profileImage} alt='' />
			<div>
				<h3>{props.name}</h3>
				<h4>{props.email}</h4>
			</div>
			<StyledState>
				{props.active ? `${'active'}` : `${'no active'}`}
			</StyledState>
		</StyledUser>
	);
};
export default User;
