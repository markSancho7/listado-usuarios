const User = props => {
	return (
		<div>
			<img src={props.profileImage} alt='' />
			<div>
				<h3>{props.name}</h3>
				<h4>{props.email}</h4>
			</div>
			<p>{props.active === 'true'}</p>
		</div>
	);
};
export default User;
