'use strict';
import store from '.';

export type StoreDispatch = typeof store.dispatch;

export type RootStoreState = ReturnType<typeof store.getState>;
