import { Modal, ModalProps, StatusBar } from 'react-native';
import { useTheme } from 'styled-components/native';

import { CheckCircle } from '../Icons/CheckCircle';
import { Text } from '../Text';

import { Container, OkButton } from './styles';

interface OrderConfirmedModalProps {
	visible: boolean;
	onOk: () => void;
}

export function OrderConfirmedModal({ visible, onOk}: OrderConfirmedModalProps) {

	const { COLORS } = useTheme();

	return (
		<>
			<StatusBar barStyle='light-content' />
			<Modal
				animationType='fade'
				statusBarTranslucent
				visible={visible}
			>

				<Container>
					<CheckCircle />
					<Text
						color={COLORS.WHITE}
						size={20}
						weight='600'
						mt={12}
					>
						Pedido confirmado
					</Text>
					<Text color={COLORS.WHITE} mt={4}>O pedido já entrou na fila de produção!</Text>
					<OkButton onPress={onOk}>
						<Text color={COLORS.PRIMARY} weight='600'>OK</Text>
					</OkButton>

				</Container>
			</Modal>
		</>

	);
}
