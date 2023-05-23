import { useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';

import { api } from '../../services/api';
import { FormatCurrency } from '../../utils/formatCurrency';
import { Product } from '../../@types/Product';
import { CartItem } from '../../@types/CartItem';
import { OrderConfirmedModal } from '../OrderConfirmedModal';
import { Text } from '../Text';
import { Button } from '../Button';
import { PlusCircle } from '../Icons/PlusCircle';
import { MinusCircle } from '../Icons/MinusCircle';

import { Actions, Container, Image, Item, ProductDetails, ProductItem, Quantity, Summary, Total } from './styles';

interface CartProps {
	cartItems: CartItem[];
	onAddToCart: (product: Product) => void;
	onRemoveToCart: (product: Product) => void;
	onConfirmedOrder: () => void;
	selectedTable: string;
}

export function Cart({ cartItems, selectedTable, onAddToCart, onRemoveToCart, onConfirmedOrder }: CartProps) {
	const [isConfirmedModalVisible, setIsConfirmedModalVisbile] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const total = cartItems.reduce((acc, cartItem) => {
		acc += cartItem.quantity * cartItem.product.price;

		return acc;
	}, 0);

	async function handleConfirmOrder() {
		try {
			setIsLoading(true);

			await api.post('/orders', {
				table: selectedTable,
				orderItems: cartItems.map((cartItem) => ({
					product_id: cartItem.product.id,
					qtd: cartItem.quantity
				}))
			});

			setIsConfirmedModalVisbile(true);
		} catch (error) {
			setIsLoading(false);
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	}

	function handleOk() {
		setIsConfirmedModalVisbile(false);
		onConfirmedOrder();
	}

	return (
		<Container>
			<FlatList
				style={{ 	marginBottom: 16, maxHeight: 130 }}
				data={cartItems}
				keyExtractor={item => item.product.id}
				renderItem={({item: cartItem}) => (
					<Item>
						<ProductItem>
							<Image
								source={{ uri: `${api.defaults.baseURL}/image/${cartItem.product.imagePath}`}}
								resizeMode='contain'
							/>
							<Quantity>
								<Text size={14}>{cartItem.quantity}x</Text>
							</Quantity>
							<ProductDetails>
								<Text size={14} weight='600'>{cartItem.product.name}</Text>
								<Text size={14} mt={4}>{FormatCurrency(cartItem.product.price)}</Text>
							</ProductDetails>
						</ProductItem>
						<Actions>
							<TouchableOpacity
								style={{ padding: 8 }}
								onPress={() => onAddToCart(cartItem.product)}
							>
								<PlusCircle />
							</TouchableOpacity>
							<TouchableOpacity
								style={{ padding: 8 }}
								onPress={() => onRemoveToCart(cartItem.product)}
							>
								<MinusCircle />
							</TouchableOpacity>
						</Actions>
					</Item>
				)}
				showsVerticalScrollIndicator={false}
			/>

			<Summary>
				<Total>
					{cartItems.length > 0 ? (
						<>
							<Text>Total</Text>
							<Text size={20} weight='600'>{FormatCurrency(total)}</Text>
						</>
					) : (
						<>
							<Text color='#999'>Seu carrinho</Text>
							<Text color='#999'>está vazio</Text>
						</>
					)}
				</Total>

				<Button
					title='Confirmar pedido'
					disabled={cartItems.length == 0}
					loading={isLoading}
					onPress={handleConfirmOrder}
				/>
			</Summary>

			<OrderConfirmedModal
				visible={isConfirmedModalVisible}
				onOk={handleOk}
			/>
		</Container>
	);
}
