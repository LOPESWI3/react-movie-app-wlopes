
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TabStack } from './TabStack'
import DetailScreen from '../containers/DetailScreen'

const Stack = createNativeStackNavigator()

const AppStack = () => (
    <Stack.Navigator>
        <Stack.Screen name='Index'
            component={TabStack}
            options={{
                title: 'Movies App',
                headerTitleAlign: 'center',

                headerStyle: {
                    backgroundColor: '#2A3053'
                },
                headerTitleStyle: {
                    color: '#fff'
                }
            }} />
        <Stack.Screen
            name="details"
            component={DetailScreen}
        />
    </Stack.Navigator>
)

export default AppStack
