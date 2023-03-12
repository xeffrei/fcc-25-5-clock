import timerReducer, {
  incrementSession,
  decrementSession,
  reset,
  startTimer,
  selectTimeLeft,
} from './timerSlice'

import { useSelector, useDispatch } from 'react-redux'

describe('timer reducer', () => {
  const initialState = {
    timeLeft: 255,
    sessionLength: 255,
    breakLength: 55,
    isSession: true,
    isBreak: false,
  }

  it('should handle initial state', () => {
    expect(timerReducer(undefined, { type: 'unknown' })).toEqual({
      timeLeft: 25,
      sessionLength: 25,
      breakLength: 5,
      isSession: true,
      isBreak: false,
    })
  })

  it('should handle incrementSession', () => {
    const actual = timerReducer(initialState, incrementSession())
    expect(actual.sessionLength).toEqual(256)
    expect(actual.timeLeft).toEqual(256)
  })

  it('should handle decrementSession', () => {
    const actual = timerReducer(initialState, decrementSession())
    expect(actual.sessionLength).toEqual(254)
    expect(actual.timeLeft).toEqual(254)
  })

  it('should handle reset', () => {
    const actual = timerReducer(initialState, reset())
    expect(actual.sessionLength).toEqual(25)
  })

  it('should handle startTimer', () => {
    const actual = timerReducer(undefined, startTimer())
    expect(actual.isSession).toEqual(true)
    expect(actual.isBreak).toEqual(false)
    expect(actual.timeLeft).toEqual(25)
  })
})
