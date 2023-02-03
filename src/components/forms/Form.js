import { Ionicons } from "@expo/vector-icons";
import { Button, HStack, VStack, Input, FormControl, Icon, Select, CheckIcon, Center } from "native-base"
import { useState } from 'react';

const Form = props => {

    const { onInputChange } = props
    const [search, setSearch] = useState();
    const [errors, setErrors] = useState(false);
    const [searchType, setSearchType] = useState('movie');

    const onSubmit = () => {
        console.log('clicked')
        if (search) {
            onInputChange(search, searchType);
            setErrors(false);
        } else {
            console.log('should be error')
            setErrors(true);
        }
    }

    return (
        <Center mx={10}>
            <VStack space={2} minWidth='100%' py={10} >
                <FormControl isRequired isInvalid={errors}>
                    <FormControl.Label fontSize='sm' >Search Movie/TV Show Name</FormControl.Label>
                    <HStack minwidth='100%' space={2}>
                        <Input
                            placeholder='i.e. James Bond, CSI'
                            variant='filled'
                            bg='gray.200'
                            px={3} minWidth='100%'
                            InputLeftElement={
                                <Icon size={5} ml={2} color='gray.400' as={<Ionicons name='ios-search' />} />
                            }
                            onChangeText={(value) => {
                                setSearch(value)
                            }}
                        />

                    </HStack>
                    <HStack space={2} my={2}>
                        <Select selectedValue={searchType} minWidth="70%"
                            accessibilityLabel="Choose Category"
                            placeholder="Choose Service"
                            _selectedItem={{
                                bg: "gray.200",
                                endIcon: <CheckIcon size="5" />
                            }} mt={1}
                            onValueChange={
                                itemValue => setSearchType(itemValue)
                            }>
                            <Select.Item label="Multi" value="multi" />
                            <Select.Item label="Movies" value="movie" />
                            <Select.Item label="TV Series" value="tv" />

                        </Select>
                        <Button Width="30%"
                            onPress={onSubmit}
                            startIcon={<Icon as={Ionicons} name='ios-search' />}>
                            Search
                        </Button>
                    </HStack>
                    <FormControl.ErrorMessage>
                        Movie/TV show name is required
                    </FormControl.ErrorMessage>
                </FormControl>
            </VStack>
        </Center>
    )
}

export default Form