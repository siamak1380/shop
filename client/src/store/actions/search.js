/* eslint-disable import/prefer-default-export */
import { SEARCH_ADD } from './types';

export const addSearch = (value) => ({
  type: SEARCH_ADD,
  payload: {
    value,
  },
});
