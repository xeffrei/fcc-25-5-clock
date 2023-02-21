import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from './app/store'
import App from './App'

test('renders counter', () => {
  const { getByTestId } = render(<App />)

  expect(getByTestId(/counter/i)).toBeInTheDocument()
})
