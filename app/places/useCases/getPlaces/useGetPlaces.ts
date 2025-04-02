import {useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocompleteRef,
} from 'react-native-google-places-autocomplete';

import {getAddress} from './GetPlacesService';
import {Place, usePlacesStore} from '../../../stores/placesStore';

// Includes orchestrator code, glues all layers (View, Repository, Service, Adapter)
export const useGetPlaces = () => {
  const navigation = useNavigation();
  const placesRef = useRef<GooglePlacesAutocompleteRef>(null);
  const {addresses, addNewAddress} = usePlacesStore();

  const onSelectAddress = ({address, latitude, longitude}: Place) => {
    navigation.navigate('ShowPlace', {
      address,
      latitude,
      longitude,
    });
  };

  const onPressPlace = (
    _: GooglePlaceData,
    detail: GooglePlaceDetail | null,
  ) => {
    const address = getAddress(detail);
    addNewAddress({...address});
    onSelectAddress({...address});
    if (placesRef.current) {
      placesRef.current.clear();
    }
  };

  return {placesRef, onPressPlace, addresses, onSelectAddress};
};
