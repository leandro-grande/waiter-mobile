import styled from 'styled-components/native';


export const ContainerModal = styled.Modal`
	flex: 1;
`;



export const ProductImage = styled.ImageBackground`
	width: 100%;
	height: 200px;
`;

export const CloseButton = styled.TouchableOpacity`
	height: 32px;
	width: 32px;
	border-radius: 16px;
	background: ${({theme}) => theme.COLORS['GRAY-800']};

	align-items: center;
	justify-content: center;

	position: absolute;
	top: 24px;
	right: 24px;
`;

export const ProductDetails = styled.View`
	flex: 1;
	padding: 32px 24px 0;
	background: ${({theme}) => theme.COLORS.BACKGROUND};
`;

export const Header = styled.View`
`;

export const Ingredients = styled.View`
	flex: 1;
	margin-top: 32px;
`;

export const Ingredient = styled.View`
	height: 56px;
	flex-direction: row;
	gap: 20px;

	border: 1px solid rgba(204, 204, 204, 0.3);
	border-radius: 8px;

	align-items: center;
	margin-bottom: 8px;
	padding: 16px;
`;

export const Footer = styled.View`
	min-height: 110px;
	padding: 16px 24px;
	background: ${({theme}) => theme.COLORS.BACKGROUND};
	justify-content: center;
`;

export const FooterContainer = styled.SafeAreaView`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const Price = styled.View`


`;

