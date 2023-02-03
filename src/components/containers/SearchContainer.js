import { Button, Center, Container, Box, FlatList } from 'native-base'
import { useState } from 'react'
import Form from '../forms/Form';
import { getSearch } from '../../services/api';
import { Card } from '../cards/Card';

const SearchContainer = ({navigation}) => {

    const [isLoading, setIsLoading] = useState(false);
    const [textSearch, setTextSearch] = useState();
    const [results, setResults] = useState([]);
    const [textSearchType, setTextSearchType] = useState();
    const [resultItems, setResultItems] = useState(null);

    const handleInputChange = async (searchText, searchType) => {
        setTextSearch(searchText)
        setTextSearchType(searchType)
        console.log(searchText + "here it is" + searchType)
        const searchResponse = await getSearch(searchText, searchType)
        setResults(searchResponse)

    }

    console.log('Search Text is', results.length)
    return (

        <Box flex={1} >
            <Center px={4}>
                <Form onInputChange={handleInputChange} />
            </Center>
            <Box padding={1} flex={1} >
                
                {!results.length ? (
                    <Center
                        flex={1}
                        _text={{
                            fontWeight: 'bold',
                            fontSize: '28',
                        }}
                    >
                        Please Initiate a Search
                    </Center>
                ) : (
                    <FlatList
                        mt={3}
                        data={results}
                        renderItem={({ item }) => {
                            
                                return (
                                    <Card
                                        query={item}
                                        type={textSearchType}
                                        navigation={navigation}
                                    />
                                );
                            } 
                        }
                    />
                )}
            </Box>
        </Box>


    )
}
export default SearchContainer