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
})
