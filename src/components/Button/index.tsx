import { ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { Text } from '../Text';
import { Container } from './styles';

interface ButtonProps extends TouchableOpacityProps {
	title: string;
	disabled?: boolean;
	loading?: boolean;
	onPress: () => void;
}

export function Button({ title, disabled, onPress, loading = false }: ButtonProps) {
	return (
		<Container disabled={disabled || loading} onPress={onPress}>
			{ loading ? (
				<ActivityIndicator color='#FFF' />
			): (
				<Text color='#FFF' weight='600'>{title}</Text>
			) }
		</Container>
	);
}
