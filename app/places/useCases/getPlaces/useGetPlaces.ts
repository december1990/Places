import {useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocompleteRef,
} from 'react-native-google-places-autocomplete';

import {getAddress} from './GetPlacesService';

// Includes orchestrator code, glues all layers (View, Repository, Service, Adapter)
export const useGetPlaces = () => {
  const navigation = useNavigation();
  const placesRef = useRef<GooglePlacesAutocompleteRef>(null);

  const onPressPlace = (
    data: GooglePlaceData,
    detail: GooglePlaceDetail | null,
  ) => {
    const {address, latitude, longitude} = getAddress(detail);

    navigation.navigate('ShowPlace', {
      address,
      latitude,
      longitude,
    });

    if (placesRef.current) {
      placesRef.current.clear();
    }
  };

  return {placesRef, onPressPlace};
};
