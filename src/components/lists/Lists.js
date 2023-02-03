
import { VStack, FlatList } from 'native-base'
import {Card} from '../cards/Card';
import Loading from '../layout/Loading'

const Lists = ({ queryData, type, navigation, }) => {

    return(
    <VStack pace={4} flex={1}>
        
        <FlatList 
            
            mt={3}
            data={queryData}
            renderItem={({ item }) => {

                
                return (
                   
                    <Card  
                        query={item}
                        type={type}
                        navigation={navigation}
                    />
                    
                );
            }
            }
        />
    </VStack>
    )
}

export default Lists