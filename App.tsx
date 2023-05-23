import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { ThemeProvider } from 'styled-components/native';

import { Home } from './src/screens/Home';
import theme from './src/styles/theme';

export default function App() {

	const [isFontsLoaded] = useFonts({
		'GeneralSans-400': require('./src/assets/fonts/GeneralSans-Regular.otf'),
		'GeneralSans-600': require('./src/assets/fonts/GeneralSans-Semibold.otf'),
		'GeneralSans-700': require('./src/assets/fonts/GeneralSans-Bold.otf'),
	});

	if (!isFontsLoaded) {
		return null;
	}

	return (
		<ThemeProvider theme={theme}>
			<StatusBar barStyle='dark-content' backgroundColor='transparent' translucent />
			<Home />
		</ThemeProvider>
	);
}


