import { Select, VStack, Text, Center, FlatList, Image, CheckIcon } from 'native-base'
import { useState, useEffect } from 'react'
import { getMovies } from '../../services/api';
import { Card } from '../cards/Card';
import Loading from '../layout/Loading'
import Lists from '../lists/Lists'

const MOVIE_CATEGORIES = [
    {
        title: 'Now Playing',
        value: 'now_playing',
    },
    {
        title: 'Popular',
        value: 'popular',
    },
    {
        title: 'Top Rated',
        value: 'top_rated',
    },
    {
        title: 'Upcoming',
        value: 'upcoming',
    },
];

const MoviesContainer = ({ navigation }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [category, setCategory] = useState(
        MOVIE_CATEGORIES[0].value
    );

    const loadItems = async () => {
        setIsLoading(true);
        const response = await getMovies(category);
        setMovies(response);
        setIsLoading(false);
    };

    useEffect(() => {
        loadItems();
    }, [category]);

    return (
        <VStack pace={4} flex={1}>
            <Center mt={8}>
                <Select
                    backgroundColor={'white'}
                    alignItems="center"
                    justifyContent={'center'}
                    selectedValue={category}
                    minWidth="200"
                    accessibilityLabel="Choose Category"
                    placeholder="Choose Category"
                    _selectedItem={{
                        bg: 'teal.800',
                        _text: {
                            color: 'white',
                        },
                        endIcon: <CheckIcon size="5" color="white" />,
                    }}
                    onValueChange={(itemValue) =>
                        setCategory(itemValue)
                    }
                >
                    {MOVIE_CATEGORIES.map((category, index) => {
                        return (
                            <Select.Item
                                key={index}
                                label={category.title}
                                value={category.value}
                            />
                        );
                    })}
                </Select>
            </Center>
            {
                isLoading ? (<Loading />) : (

                    <Lists queryData={movies}
                        type={'movie'}
                        navigation={navigation}
                    />)
            }
        </VStack>
    )
}
export default MoviesContainer