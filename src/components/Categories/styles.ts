import { Platform } from 'react-native';
import styled from 'styled-components/native';

const isAndroid = Platform.OS === 'android';

interface ButtonProps {
	selectedCategory: boolean;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
	align-items: center;
	margin-right: 24px;
	opacity: ${({selectedCategory}) => selectedCategory ?  1 : 0.4}
`;

export const Icon = styled.View<ButtonProps>`
	margin-bottom: 4px;
	width: 44px;
	height: 44px;
	background-color: ${({theme}) => theme.COLORS.WHITE};

	border-radius: 22px;
	box-shadow: 0px 2px 1px rgba(0, 0, 0, ${isAndroid ? 0.5 : 0.1});
	elevation: ${({selectedCategory}) => selectedCategory ? 2 : 0 };

	align-items: center;
	justify-content: center;
`;
