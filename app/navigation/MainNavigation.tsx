import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import GetPlacesScreen from '../places/useCases/getPlaces/GetPlacesScreen';
import ShowPlaceScreen from '../places/useCases/showPlace/ShowPlaceScreen';
import {MainStackParamList} from '../types/NavigationTypes';

const MainStack = createNativeStackNavigator<MainStackParamList>();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName={'GetPlaces'}>
        <MainStack.Screen
          options={{headerTitle: 'Select You Address'}}
          name="GetPlaces"
          component={GetPlacesScreen}
        />
        <MainStack.Screen name="ShowPlace" component={ShowPlaceScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
