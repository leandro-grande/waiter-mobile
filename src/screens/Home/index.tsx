import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { useTheme } from 'styled-components/native';
import { api } from '../../services/api';

import { Categories as CategoriesList } from '../../@types/Categories';
import { Header } from '../../components/Header';
import { Categories } from '../../components/Categories';
import { Button } from '../../components/Button';
import { Menu } from '../../components/Menu';
import { TableModal } from '../../components/TableModal';
import { Cart } from '../../components/Cart';
import { CartItem } from '../../@types/CartItem';
import { Product } from '../../@types/Product';

import { Empty } from '../../components/Icons/Empty';
import { Text } from '../../components/Text';

import {
	CategoriesContainer,
	CenteredContainer,
	Container,
	Content,
	Footer,
	FooterContainer,
	MenuContainer
}
	from './styles';

export function Home() {
	const [selectedTable, setSelectedTable] = useState('');
	const [selectedCategory, setSelectedCategory] = useState('');
	const [isTableOpenedModal, setIsTableOpenedModal] = useState(false);
	const [cartItems, setCartItems] = useState<CartItem[]>([]);
	const [categories, setCategories] = useState<CategoriesList[]>([]);
	const [products, setProducts] = useState<Product[]>([]);
	const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	const { COLORS } = useTheme();

	function handleSelectCategory(categoryId: string) {
		const category = selectedCategory === categoryId ? '' : categoryId;

		const productsByCategory = products.filter(product => product.category_id === category);

		if (productsByCategory.length === 0 && category === '') {
			setSelectedProducts(products);
		} else {
			setSelectedProducts(productsByCategory);
		}

		setSelectedCategory(category);
	}

	function handleSaveTable(table: string) {
		setSelectedTable(table);
	}

	function handleResetOrder() {
		setSelectedTable('');
		setCartItems([]);
	}

	function handleAddToCart(product: Product) {
		if (!selectedTable) {
			setIsTableOpenedModal(true);
		}

		setCartItems((prevState) => {
			const itemIndex = prevState.findIndex(cartItem => cartItem.product.id === product.id);

			if (itemIndex < 0) {
				return [...prevState, {
					product,
					quantity: 1
				}];
			}

			const newCartItems = [...prevState];

			newCartItems[itemIndex].quantity += 1;

			return newCartItems;
		});
	}

	function handleRemoveToCart(product: Product) {

		setCartItems((prevState) => {
			const itemIndex = prevState.findIndex(cartItem => cartItem.product.id === product.id);

			const newCartItem = [...cartItems];

			if (newCartItem[itemIndex].quantity === 1) {
				newCartItem.splice(itemIndex, 1);
			} else {
				newCartItem[itemIndex].quantity -= 1;
			}

			return newCartItem;
		});
	}

	useEffect(() => {
		Promise.all([
			api.get('/categories'),
			api.get('/products'),
		]).then((response) => {
			setCategories(response[0].data.categories);
			setProducts(response[1].data);
			setSelectedProducts(response[1].data);
		}).finally(() => {
			setIsLoading(false);
		});

	}, []);

	return (
		<>
			<Container>
				<Header
					selectedTable={selectedTable}
					onCancelOrder={handleResetOrder}
				/>

				<Content>
					{isLoading && (
						<CenteredContainer>
							<ActivityIndicator color={COLORS.PRIMARY} size='large' />
						</CenteredContainer>
					)}

					{!isLoading && (
						<>
							<CategoriesContainer>
								<FlatList
									data={categories}
									keyExtractor={item => item.id}
									renderItem={({item}) => (
										<Categories
											data={item}
											onPress={() => handleSelectCategory(item.id)}
											selectedCategory={selectedCategory}
										/>
									)}
									horizontal
									showsHorizontalScrollIndicator={false}
									contentContainerStyle={{ paddingRight: 32 }}
								/>
							</CategoriesContainer>

							{selectedProducts.length > 0 ? (
								<MenuContainer>
									<Menu
										products={selectedProducts}
										onAddToCart={handleAddToCart}
									/>
								</MenuContainer>
							) : (
								<CenteredContainer>
									<Empty />
									<Text mt={16}>Nenhum produto foi encontrado</Text>
								</CenteredContainer>
							)}
						</>
					)}
				</Content>

				<TableModal
					visible={isTableOpenedModal}
					onClose={() => setIsTableOpenedModal(false)}
					onSave={handleSaveTable}
				/>
			</Container>

			<Footer>
				<FooterContainer>
					{ !selectedTable ? (
						<Button
							title='Novo Pedido'
							disabled={isLoading || products.length === 0}
							onPress={() => setIsTableOpenedModal(true)}
						/>
					) : (
						<Cart
							cartItems={cartItems}
							onAddToCart={handleAddToCart}
							onRemoveToCart={handleRemoveToCart}
							onConfirmedOrder={handleResetOrder}
							selectedTable={selectedTable}
						/>
					)}
				</FooterContainer>
			</Footer>
		</>
	);
}
