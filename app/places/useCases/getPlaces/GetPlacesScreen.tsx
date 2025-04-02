import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

import {useGetPlaces} from './useGetPlaces';

const GetPlacesScreen = () => {
  const {placesRef, onPressPlace, onSelectAddress, addresses} = useGetPlaces();

  return (
    <View style={styles.container}>
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

      <FlatList
        contentContainerStyle={{paddingHorizontal: 16}}
        data={addresses}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.listItem}
            onPress={() => onSelectAddress({...item})}>
            <Text>{item.address}</Text>
          </TouchableOpacity>
        )}
        ListHeaderComponent={() => (
          <Text style={styles.listHeader}>Saved addresses</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  listHeader: {fontWeight: 'bold'},
  listItem: {
    paddingVertical: 16,
    marginBottom: 5,
    paddingHorizontal: 5,
  },
});

export default GetPlacesScreen;
