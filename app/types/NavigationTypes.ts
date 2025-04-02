import {RouteProp} from '@react-navigation/native';

export type MainStackParamList = {
  GetPlaces: undefined;
  ShowPlace: {
    address: string;
    latitude: number | undefined;
    longitude: number | undefined;
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
