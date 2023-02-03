import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
const Tab = createMaterialTopTabNavigator()

import MoviesContainer from '../containers/MoviesContainer';
import SearchContainer from '../containers/SearchContainer';
import TVContainer from '../containers/TVContainer';


export const TabStack = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Movie" component={MoviesContainer} />
        <Tab.Screen name="Search" component={SearchContainer} />
        <Tab.Screen name="TV" component={TVContainer} />
      </Tab.Navigator>
    );
  };
  