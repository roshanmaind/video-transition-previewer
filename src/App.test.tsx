import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

// default test - TODO update
test('renders learn react link', (): void => {
  render(<App />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
