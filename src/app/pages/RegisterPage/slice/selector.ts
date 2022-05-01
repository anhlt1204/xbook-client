import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { initialState } from '.';

const RegisterSlice = (state: RootState) => state?.register || initialState;

export const selectRegister = createSelector([RegisterSlice], state => state);
