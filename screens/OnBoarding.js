import React, {useState, useRef} from 'react';
import {useTheme} from '@react-navigation/native';
import {
	FlatList,
	StyleSheet,
	Image,
	View,
	useWindowDimensions,
	StatusBar,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Slides} from '../utility';
import Button from '../components/Button';
import ButtonGroup from '../components/ButtonGroup';
import Input from '../components/Input';
import Icon from '../components/Icon';
import Modal from '../components/Modal';
import useToggle from '../hooks/useToggle';
import BottomSheet from '../components/BottomSheet';
import useToggleRef from '../hooks/useToggleRef';
import Select from '../components/Select';
import DropDownPicker from 'react-native-dropdown-picker';
import Typography from '../components/Typography';
import Pagination from '../components/Pagination';
/**
 * Onboarding screen
 * @returns
 */
export default function OnBoarding({navigation}) {
	const [currentSlide, setCurrentSlide] = useState(0);
	// theme
	const theme = useTheme();
	const {width} = useWindowDimensions();

	const ref = useRef();

	const Skip = () => {
		navigation.replace('Signin');
	};

	const nextSlide = () => {
		const nextSlide = currentSlide + 1;
		if (nextSlide !== Slides.length) {
			const offset = nextSlide * width;
			ref?.current?.scrollToOffset({offset});
			setCurrentSlide((c) => c + 1);
		}
	};

	const updateCurrentSlideIndex = (e) => {
		const offsetX = e.nativeEvent.contentOffset.x;
		const cIndex = Math.round(offsetX / width);
		setCurrentSlide(cIndex);
	};

	// render slides
	const renderSlide = ({item}) => (
		<View
			style={{
				width: width - 30,
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
			}}>
			<Image
				source={item.image}
				style={{marginBottom: 30, resizeMode: 'contain'}}
			/>
			<View style={{justifyContent: 'center', alignItems: 'center'}}>
				<Typography
					style={{
						textAlign: 'center',
						marginBottom: 10,
						color: theme.colors.primary,
					}}
					variant="h2">
					{item.title}
				</Typography>
				<Typography
					style={{
						textAlign: 'center',
						color: theme.colors.primary,
						maxWidth: '85%',
					}}>
					{item.description}
				</Typography>
			</View>
		</View>
	);

	return (
		<SafeAreaView style={[theme.screenCenter, {padding: 15}]}>
			<StatusBar color={theme.colors.primary} />
			<FlatList
				ref={ref}
				data={Slides}
				keyExtractor={(_, index) => index}
				renderItem={renderSlide}
				horizontal
				showsHorizontalScrollIndicator={false}
				pagingEnabled={true}
				onMomentumScrollEnd={updateCurrentSlideIndex}
			/>
			<View
				style={{
					flexDirection: 'row',
					width: width - 30,
					justifyContent: 'space-between',
					alignItems: 'center',
				}}>
				{currentSlide !== Slides.length - 1 ? (
					<>
						<Button color="primary-outline" onPress={Skip}>
							skip
						</Button>
						<Pagination data={Slides} slideIndex={currentSlide} />
						<Button color="primary-outline" onPress={nextSlide}>
							NEXT
						</Button>
					</>
				) : (
					<Button block color="primary" onPress={Skip}>
						LET'S GET START
					</Button>
				)}
			</View>
		</SafeAreaView>
	);
}
