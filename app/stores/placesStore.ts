import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Place {
  address: string;
  latitude: number;
  longitude: number;
}

interface PlacesState {
  addresses: Place[];
  addNewAddress: (address: Place) => void;
}

export const usePlacesStore = create<PlacesState>()(
  persist(
    set => ({
      addresses: [],
      addNewAddress: address =>
        set(state => ({addresses: [...state.addresses, address]})),
    }),
    {
      name: 'places-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
