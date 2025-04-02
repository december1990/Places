import React, {useRef} from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

import {useGetPlaces} from './useGetPlaces';

const GetPlacesScreen = () => {
  const {placesRef, onPressPlace} = useGetPlaces();

  return (
    <GooglePlacesAutocomplete
      ref={placesRef}
      placeholder="Search"
      onPress={onPressPlace}
      query={{
        key: 'AIzaSyAGi0RbPqTRU-XDdOMXnVPdLnDy8YgjM0Y',
        language: 'en',
      }}
      styles={{container: {flex: 1}}}
      fetchDetails={true}
    />
  );
};

export default GetPlacesScreen;
