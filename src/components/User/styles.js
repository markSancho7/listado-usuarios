import { styled } from 'styled-components';

const StyledUser = styled.div`
	display: flex;
	box-sizing: border-box;
	padding: 20px;
	width: 600px;
	height: 100px;
	border-radius: 10px;
	gap: 20px;
	margin: 10px;
	justify-content: start;
	align-items: center;
	box-shadow: 0px 0px 5px 0px grey;
`;

const StyledImg = styled.img`
	width: 80px;
	height: 80px;
	border-radius: 100%;
`;
const StyledState = styled.p`
	color: green;
`;

export { StyledUser, StyledImg, StyledState };
