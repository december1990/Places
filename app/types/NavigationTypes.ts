import {RouteProp} from '@react-navigation/native';

export type MainStackParamList = {
  GetPlaces: undefined;
  ShowPlace: {
    latitude: number;
    longitude: number;
  };
};

export type ShowPlaceScreenRouteProps = RouteProp<
  MainStackParamList,
  'ShowPlace'
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends MainStackParamList {}
  }
}
