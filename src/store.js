// // import { createStore, combineReducers, applyMiddleware, legacy_createStore } from 'redux'
// // import thunk from 'redux-thunk'
// // import { composeWithDevTools } from 'redux-devtools-extension'


// // const reducer = combineReducers({})

// // const store = createStore(reducer, initialState)
// import { configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';

// // Assuming you have some reducers, import them here
// // If you previously had something like this:
// // import usersReducer from './features/users/usersSlice';
// // You would import it like so

// const rootReducer = {
//   // users: usersReducer,
//   // Add other reducers here
// };

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
//   // If you have any initial state to pass, you can do so here
//   // preloadedState: initialState,
// });

// export default store;
