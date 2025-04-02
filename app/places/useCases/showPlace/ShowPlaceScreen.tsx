import React from 'react';
import {View} from 'react-native';
import MapView, {Marker, PROVIDER_DEFAULT} from 'react-native-maps';

import {useShowPlace} from './useShowPlace';
import {LATITUDE_DELTA, LONGITUDE_DELTA} from '../../../constants';

const ShowPlaceScreen = () => {
  const {address, latitude, longitude} = useShowPlace();

  return (
    <View style={{flex: 1}}>
      <MapView
        style={{flex: 1}}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}>
        <Marker
          description={address}
          coordinate={{
            latitude,
            longitude,
          }}
        />
      </MapView>
    </View>
  );
};

export default ShowPlaceScreen;
