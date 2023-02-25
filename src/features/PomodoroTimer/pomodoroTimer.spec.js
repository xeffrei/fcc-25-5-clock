import { render } from '@testing-library/react'
import { PomodoroTimer } from './PomodoroTimer'

describe('PomodoroTimer', () => {
  it('contains an element with id break-label, that contains string Break Length', () => {
    const { getByTestId } = render(<PomodoroTimer />)
    expect(getByTestId(/break-label/i)).toHaveAttribute('id', 'break-label')
    expect(getByTestId(/break-label/i)).toHaveTextContent('Break Length')
  })
})
