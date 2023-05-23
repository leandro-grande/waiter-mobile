import { Modal, ModalProps, Platform } from 'react-native';
import { Text } from '../Text';
import { CloseModal, Header, InputModal, ModalBody, Overlay } from './styles';
import { Button } from '../Button';
import { useState } from 'react';

interface TableModalProps extends ModalProps {
	onClose: () => void;
	onSave: (table: string) => void;
}

export function TableModal({ onClose, onSave, ...rest }: TableModalProps) {
	const [table, setTable] = useState('');

	function handleSaveTable() {
		setTable('');
		onSave(table);
		onClose();
	}

	return (
		<Modal
			transparent
			statusBarTranslucent
			animationType='fade'
			{...rest}
		>
			<Overlay behavior={Platform.OS === 'ios' ? 'padding' : 'height' }>
				<ModalBody>
					<Header>
						<Text weight='600'>Informe a mesa</Text>
						<CloseModal onPress={onClose}>
							<Text size={18}>x</Text>
						</CloseModal>
					</Header>

					<InputModal
						placeholder='Número da mesa'
						keyboardType='numeric'
						onChangeText={setTable}
					/>

					<Button
						title='Salvar'
						activeOpacity={0.8}
						disabled={!table}
						onPress={handleSaveTable}
					/>
				</ModalBody>
			</Overlay>
		</Modal>

	);
}
