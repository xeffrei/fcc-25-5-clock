import { render } from '@testing-library/react'
import { PomodoroTimer } from './PomodoroTimer'

describe('PomodoroTimer', () => {
  it('contains an element with id break-label, that contains string Break Length', () => {
    const { getByTestId } = render(<PomodoroTimer />)
    expect(getByTestId(/break-label/i)).toHaveAttribute('id', 'break-label')
    expect(getByTestId(/break-label/i)).toHaveTextContent('Break Length')
  })

  it('contains an element with id session-label, that contains string Session Length', () => {
    const { getByTestId } = render(<PomodoroTimer />)
    expect(getByTestId(/session-label/i)).toHaveAttribute('id', 'session-label')
    expect(getByTestId(/session-label/i)).toHaveTextContent('Session Length')
  })

  it('contains an element with id break-decrement', () => {
    const { getByTestId } = render(<PomodoroTimer />)
    expect(getByTestId(/break-decrement/i)).toHaveAttribute(
      'id',
      'break-decrement'
    )
  })

  it('contains an element with id session-decrement', () => {
    const { getByTestId } = render(<PomodoroTimer />)
    expect(getByTestId(/session-decrement/i)).toHaveAttribute(
      'id',
      'session-decrement'
    )
  })

  it('contains an element with id break-increment', () => {
    const { getByTestId } = render(<PomodoroTimer />)
    expect(getByTestId(/break-increment/i)).toHaveAttribute(
      'id',
      'break-increment'
    )
  })

  it('contains an element with id session-increment', () => {
    const { getByTestId } = render(<PomodoroTimer />)
    expect(getByTestId(/session-increment/i)).toHaveAttribute(
      'id',
      'session-increment'
    )
  })

  it('contains an element with id break-length, that by default (on load) displays a value of 5', () => {
    const { getByTestId } = render(<PomodoroTimer />)
    expect(getByTestId(/break-length/i)).toHaveAttribute('id', 'break-length')
    expect(getByTestId(/break-length/i)).toHaveTextContent('5')
  })

  it('contains an element with id session-length, that by default (on load) displays a value of 25', () => {
    const { getByTestId } = render(<PomodoroTimer />)
    expect(getByTestId(/session-length/i)).toHaveAttribute(
      'id',
      'session-length'
    )
    expect(getByTestId(/session-length/i)).toHaveTextContent('25')
  })

  it('contains an element with id timer-label, that contains text "Session"', () => {
    const { getByTestId } = render(<PomodoroTimer />)
    expect(getByTestId(/timer-label/i)).toHaveAttribute('id', 'timer-label')
    expect(getByTestId(/timer-label/i)).toHaveTextContent('Session')
  })
})
