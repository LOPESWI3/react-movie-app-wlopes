import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './src/components/stack/AppStack';
import MoviesContainer from './src/components/containers/MoviesContainer';
import SearchContainer from './src/components/containers/SearchContainer';

const App = () => {
  return (
    <NativeBaseProvider>
     <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App