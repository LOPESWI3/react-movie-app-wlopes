import { AspectRatio, VStack, Box, HStack, Image, Button, Text } from 'native-base';

export const ListItem = ({ id, uri, title, search_type, popularity, releaseDate, onItemInfo, }) => {
    return (
        <Box
            marginY={2}
            marginX={4}
            borderBottomColor="#87CEEB"
            borderBottomWidth="1"
            paddingBottom={3}
        >
            <HStack space={4}>
                <AspectRatio w="35%" ratio={1.1}>
                    <Image
                        source={{
                            uri,
                        }}
                        alt={`${title} poster`}
                    />
                </AspectRatio>
                <VStack flex={1}>
                    <Text fontWeight="bold">{title}</Text>
                    <Text>Popularity: {popularity}</Text>
                    <Text>Release Date: {releaseDate}</Text>
                    <Button
                        bg="#448EE4"
                        width="100%"
                        onPress={onItemInfo}
                    >
                        More Details
                    </Button>
                </VStack>
            </HStack>
        </Box>
    );
};
