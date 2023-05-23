import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
	padding: 14px 24px;
	background: ${({theme, disabled}) => disabled ? theme.COLORS['GRAY-500'] : theme.COLORS.PRIMARY};
	border-radius: 48px;
	align-items: center;
`;
