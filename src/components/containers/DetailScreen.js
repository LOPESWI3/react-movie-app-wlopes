import { useEffect, useLayoutEffect, useState, } from 'react';
import Loading from '../layout/Loading';
import { singleMovie } from '../../services/api';
import {AspectRatio, Box, Center, HStack, Image, Text,} from 'native-base';
import { IMAGE_URL } from '../../config/api_config';

const DetailScreen = ({ route,
    navigation, }) => {

    const [item, setItem] = useState();
    const { itemId, itemType, itemName } = route?.params;
    const loadItems = async (id, type) => {
        const response = await singleMovie(id, type);
        setItem(response);

    };

    useEffect(() => {
        loadItems(itemId, itemType);
    }, []);

    return (
        <>
            {!item ? (
                <Loading />
            ) : (

                <Box flex={1} paddingX={5}>
                    <Center >
                        <Text fontSize={32} fontWeight="bold">
                            {item.original_title ? item.original_title  : item.name}
                        </Text>
                        <AspectRatio w="90%" mt={4} ratio={1}>
                            <Image
                                resizeMode="cover"
                                source={{
                                    uri: `${IMAGE_URL}${item.poster_path}`,
                                }}
                                alt={`${item.title} poster`}
                            />
                        </AspectRatio>
                    </Center>
                    <Text mt={6} color="#10108B" alignContent="center" fontSize='18px'>
                        {item.overview}
                    </Text>
                    <HStack mt={10} space={5}>
                        <Text>Popularity: {item.popularity}</Text>
                        <Text>|</Text>
                        <Text>Release Date: {item.release_date ? item.release_date : item.first_air_date}</Text>
                    </HStack>
                </Box>
            )}
        </>
    );

}

export default DetailScreen