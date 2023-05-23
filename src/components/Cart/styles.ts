import styled from 'styled-components/native';

export const Container = styled.View``;

export const Item = styled.View`
	padding: 8px 0px;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const ProductItem = styled.View`
	flex-direction: row;
`;


export const Actions = styled.View`
	gap: 16px;
	flex-direction: row;
`;

export const Image = styled.Image`
	height: 40px;
	width: 48px;
	border-radius: 6px;
`;

export const Quantity = styled.View`
	min-width: 20px;
	margin-left: 12px;
`;

export const ProductDetails = styled.View`
	margin-left: 4px;
`;

export const Summary = styled.View`
	flex-direction: row;
	justify-content: space-between;
`;

export const Total = styled.View`

`;
