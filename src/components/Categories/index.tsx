import { TouchableOpacityProps } from 'react-native';
import { Text } from '../Text';
import { Icon } from './styles';
import { Container } from './styles';

interface CategoriesProps extends TouchableOpacityProps {
	data: {
		id: string;
		icon: string;
		name: string;
	}
	selectedCategory: string;
}

export function Categories({ data, selectedCategory, ...rest }: CategoriesProps) {
	return (
		<Container
			key={data.id}
			activeOpacity={0.7}
			selectedCategory={selectedCategory === data.id}
			{...rest}
		>
			<Icon selectedCategory={selectedCategory === data.id}>
				<Text>{data.icon}</Text>
			</Icon>
			<Text size={14} weight='600'>
				{data.name}
			</Text>
		</Container>
	);
}
