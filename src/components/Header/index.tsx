import { useTheme } from 'styled-components/native';
import { Text } from '../Text';
import { CancelOrderButton, Container, Table, TitleHeader } from './styles';


interface HeaderProps {
	selectedTable: string;
	onCancelOrder: () => void;
}

export function Header({ selectedTable, onCancelOrder }: HeaderProps) {

	const { COLORS } = useTheme();

	return (
		<Container>
			{!selectedTable ? (
				<>
					<Text>Bem vindo(a) ao</Text>
					<Text
						weight='700'
						mt={4}
					>
						WAITER
						<Text>APP</Text>
					</Text>
				</>
			) : (
				<>
					<TitleHeader>
						<Text size={24} weight='600'>Pedido</Text>
						<CancelOrderButton
							activeOpacity={0.7}
							onPress={onCancelOrder}
						>
							<Text
								size={14}
								weight='600'
								color={COLORS.PRIMARY}
							>
								cancelar pedido
							</Text>
						</CancelOrderButton>
					</TitleHeader>
					<Table>
						<Text size={16}>{`Mesa ${selectedTable}`}</Text>
					</Table>
				</>
			)}
		</Container>
	);
}
