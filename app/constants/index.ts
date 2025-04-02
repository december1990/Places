import {Dimensions} from 'react-native';

export const {width, height} = Dimensions.get('screen');

export const ASPECT_RATIO = width / height;
export const LATITUDE_DELTA = 0.0022;
export const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
