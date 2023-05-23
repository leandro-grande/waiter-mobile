import styled from 'styled-components/native';


export const Overlay = styled.KeyboardAvoidingView`
	flex: 1;
	background: rgba(0, 0, 0, 0.6);

	align-items: center;
	justify-content: center;

	padding: 24px;
`;

export const ModalBody = styled.View`
	width: 100%;
	padding: 24px;
	background-color: ${({theme}) => theme.COLORS.WHITE};
	border-radius: 8px;
`;

export const Header = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const CloseModal = styled.TouchableOpacity`
	padding: 8px;
`;

export const InputModal = styled.TextInput`
	width: 100%;
	height: 56px;
	padding: 16px;

	background: ${({theme}) => theme.COLORS.WHITE};
	border: 1px solid ${({theme}) => theme.COLORS.LINE};
	border-radius: 8px;

	margin: 32px 0px 24px;
`;
