import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import AsyncStorage from '@react-native-community/async-storage';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const persistConfig = {
  key: 'app',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['user'],
  debug: true,
};

// @ts-ignore
const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = (initialState: any) => {
  const store = createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk)),
  );

  // @ts-ignore
  const persistor = persistStore(store, {}, () => {});
  return { persistor, store };
};

export default configureStore;
