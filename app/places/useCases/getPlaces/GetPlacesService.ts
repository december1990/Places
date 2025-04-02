import {GooglePlaceDetail} from 'react-native-google-places-autocomplete';

// service files includes business logic like data transformation
export const getAddress = (addressDetail: GooglePlaceDetail | null) => {
  return {
    address: addressDetail?.formatted_address ?? '',
    latitude: addressDetail?.geometry.location.lat ?? 0,
    longitude: addressDetail?.geometry.location.lng ?? 0,
  };
};
