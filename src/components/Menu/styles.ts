import styled from 'styled-components/native';


export const ProductItem = styled.TouchableOpacity`
	flex-direction: row;
	align-items: center;
	gap: 16px;
`;

export const Image = styled.Image`
	height: 96px;
	width: 120px;

	border-radius: 8px;
`;

export const ProductDetails = styled.View`
	flex: 1;
	gap: 8px;

`;

export const Price = styled.View`
	flex-direction: row;
	justify-content: space-between;
`;

export const AddToCartButton = styled.TouchableOpacity`
	height: 24px;
	width: 24px;
	background-color: ${({theme}) => theme.COLORS.WHITE};
	border: 1px solid ${({theme}) => theme.COLORS.PRIMARY};
	border-radius: 12px;

	align-items: center;
	justify-content: center;
`;

export const Separator = styled.View`
	height: 1px;
	width: 100%;
	background: ${({theme}) => theme.COLORS.LINE};
	margin: 24px 0px;
`;
