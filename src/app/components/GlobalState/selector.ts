import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { initialState } from '.';

const slice = (state: RootState) => state?.global || initialState;

export const selectGlobal = createSelector([slice], state => state);
