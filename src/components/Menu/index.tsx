import { useState } from 'react';
import { FlatList } from 'react-native';

import { FormatCurrency } from '../../utils/formatCurrency';
import { Text } from '../Text';
import { useTheme } from 'styled-components/native';

import { AddToCartButton, Image, Price, ProductItem, ProductDetails, Separator } from './styles';
import { ProductModal } from '../ProductModal';
import { Product } from '../../@types/Product';
import { api } from '../../services/api';

interface MenuProps {
	products: Product[];
	onAddToCart: (product: Product) => void;
}

export function Menu({ products, onAddToCart }: MenuProps) {
	const [isModalVisible, setIsModalVisivel] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

	const { COLORS } = useTheme();

	function handleOpenModal(product: Product) {
		setIsModalVisivel(true);
		setSelectedProduct(product);
	}

	return (
		<>
			<ProductModal
				visible={isModalVisible}
				onClose={() => setIsModalVisivel(false)}
				product={selectedProduct}
				onAddToCart={onAddToCart}
			/>

			<FlatList
				data={products}
				keyExtractor={item => item.id}
				renderItem={({ item: product }) => (
					<ProductItem
						activeOpacity={0.8}
						onPress={() => handleOpenModal(product)}
					>
						<Image source={{ uri: `${api.defaults.baseURL}/image/${product.imagePath}`}} resizeMode='contain'  />
						<ProductDetails>
							<Text weight='600'>{product.name}</Text>
							<Text size={14}>{product.description}</Text>
							<Price>
								<Text size={14} weight='600'>{FormatCurrency(product.price)}</Text>
								<AddToCartButton onPress={() => onAddToCart(product)}>
									<Text color={COLORS.PRIMARY}>+</Text>
								</AddToCartButton>
							</Price>
						</ProductDetails>
					</ProductItem>
				)}
				ItemSeparatorComponent={() => <Separator />}
			/>
		</>
	);
}
