import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';


export const Container = styled.View`
	margin-top: ${getStatusBarHeight() + 24}px;
	padding: 0 24px;
`;

export const TitleHeader = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between
`;

export const CancelOrderButton = styled.TouchableOpacity``;

export const Table = styled.View`
	margin-top: 24px;
	padding: 16px;

	border: 1px solid ${({theme}) => theme.COLORS.LINE};
	border-radius: 8px;
	background: ${({theme}) => theme.COLORS.WHITE};
`;
