import styled from 'styled-components/native';


export const Container = styled.View`
	flex: 1;
	background: ${({theme}) => theme.COLORS.PRIMARY};
	align-items: center;
	justify-content: center;
`;

export const OkButton = styled.TouchableOpacity`
	height: 44px;
	width: 72px;
	background-color: ${({theme}) => theme.COLORS.WHITE};
	border-radius: 48px;

	align-items: center;
	justify-content: center;
	margin-top: 24px;
`;
