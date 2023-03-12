import { configureStore, combineReducers } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import pomodoroTimerReducer from '../features/timer/timerSlice'

export const rootReducer = combineReducers({
  counter: counterReducer,
  timer: pomodoroTimerReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export const setupStore = (preloadedState = {}) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  })
}

export default store
