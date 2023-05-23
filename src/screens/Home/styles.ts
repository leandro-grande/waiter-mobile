import styled from 'styled-components/native';


export const Container = styled.View`
	flex: 1;
	background: ${({theme}) => theme.COLORS.BACKGROUND};
`;

export const CenteredContainer = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;
`;

export const Content = styled.View`
	flex: 1;
	margin-top: 24px;
	padding: 0 24px;

`;

export const CategoriesContainer = styled.View`
	height: 74px;
`;

export const MenuContainer = styled.View`
	flex: 1;
	margin-top: 32px;
`;

export const Footer = styled.View`
	min-height: 110px;
	padding: 16px 24px;
	justify-content: center;
`;

export const FooterContainer = styled.SafeAreaView`
`;
