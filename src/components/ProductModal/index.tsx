import { FlatList, Modal } from 'react-native';
import { Product } from '../../@types/Product';
import { Close } from '../Icons/Close';

import { CloseButton, Footer, FooterContainer, Header, Ingredient, Ingredients, Price, ProductDetails, ProductImage } from './styles';
import { Text } from '../Text';
import { useTheme } from 'styled-components/native';
import { Button } from '../Button';
import { FormatCurrency } from '../../utils/formatCurrency';
import { api } from '../../services/api';

interface ProductModal {
	visible: boolean;
	product: Product | null;
	onClose: () => void;
	onAddToCart: (product: Product) => void;
}

export function ProductModal({ product, visible, onAddToCart, onClose }: ProductModal) {
	if(!product) {
		return null;
	}

	const { COLORS } = useTheme();

	function handleAddToCart() {
		onAddToCart(product!);
		onClose();
	}

	return (
		<Modal
			visible={visible}
			animationType='slide'
			presentationStyle='pageSheet'
			onRequestClose={onClose}
		>
			<ProductImage source={{ uri: `${api.defaults.baseURL}/image/${product.imagePath}` }} resizeMode='contain'>
				<CloseButton
					activeOpacity={0.7}
					onPress={onClose}
				>
					<Close />
				</CloseButton>
			</ProductImage>

			<ProductDetails>
				<Header>
					<Text size={24} weight='600'>{product.name}</Text>
					<Text color={COLORS['GRAY-400']} mt={8}>{product.description}</Text>
				</Header>

				{	product.ingredients.length > 0 &&
					<Ingredients>
						<Text weight='600' mb={16}>Ingredientes</Text>

						<FlatList
							data={product.ingredients}
							keyExtractor={ingredient => ingredient.id}
							renderItem={({item}) => (
								<Ingredient>
									<Text>{item.icon}</Text>
									<Text size={14}>{item.name}</Text>
								</Ingredient>
							)}
							showsVerticalScrollIndicator={false}
						/>
					</Ingredients>
				}
			</ProductDetails>

			<Footer>
				<FooterContainer>
					<Price>
						<Text>Preço</Text>
						<Text size={20} weight='600'>{FormatCurrency(product.price)}</Text>
					</Price>

					<Button
						title='Adicionar ao pedido'
						onPress={handleAddToCart}
					/>
				</FooterContainer>
			</Footer>
		</Modal>
	);
}
