import {useRoute} from '@react-navigation/native';
import {ShowPlaceScreenRouteProps} from '../../../types/NavigationTypes';

export const useShowPlace = () => {
  const route = useRoute<ShowPlaceScreenRouteProps>();
  const {address, latitude = 0, longitude = 0} = route.params;

  return {address, latitude, longitude};
};
