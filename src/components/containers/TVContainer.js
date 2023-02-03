import { Select, VStack, Text, Center, FlatList, Image, CheckIcon } from 'native-base'
import { useState, useEffect } from 'react'
import { getTvShows } from '../../services/api';
import { Card } from '../cards/Card';
import Loading from '../layout/Loading'
import Lists from '../lists/Lists'

const TVSHOW_CATEGORIES = [
    {
        title: 'Airing Today',
        value: 'airing_today',
      },
      {
        title: 'On The Air',
        value: 'on_the_air',
      },
      {
        title: 'Top Rated',
        value: 'top_rated',
      },
      {
        title: 'Popular',
        value: 'popular',
      },
];

const TVContainer = ({ navigation }) => {

    const [isLoading, setIsLoading] = useState(false);
    const [tvShows, setTvShows] = useState([]);
    const [category, setCategory] = useState(
        TVSHOW_CATEGORIES[0].value
    );

    const loadItems = async () => {
        setIsLoading(true);
        const response = await getTvShows(category);
        setTvShows(response);
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
                        bg: 'teal.750',
                        _text: {
                            color: 'white',
                        },
                        endIcon: <CheckIcon size="5" color="white" />,
                    }}
                    onValueChange={(itemValue) =>
                        setCategory(itemValue)
                    }
                >
                    {TVSHOW_CATEGORIES.map((category, index) => {
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

                    <Lists queryData={tvShows}
                        type={'tv'}
                        navigation={navigation}
                    />)
            }
        </VStack>
    )
}
export default TVContainer