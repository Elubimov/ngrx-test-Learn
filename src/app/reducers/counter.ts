import {createAction, createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import {state} from "@angular/animations";


export const increase = createAction('[COUNTER] increase');

export const decrease = createAction('[COUNTER] decrease');

export const clear = createAction('[COUNTER] clear');

export interface CounterState {
  count: number;
}
export const initialState: CounterState = {
  count: 0
};

export const counterReducer = createReducer(
  initialState,
  on(increase, state => ({
    ...state, count: state.count + 1
  })),
  on(decrease, state => ({
    ...state, count: state.count - 1
  })),
  on(clear, state => ({
    ...state, count: state.count = 0
  }))
);

export const featureSelectore = createFeatureSelector<CounterState>('counter');

export const countSelector = createSelector(featureSelectore, state => state.count);
