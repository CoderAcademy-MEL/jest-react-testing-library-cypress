import React from 'react';
import App from '../App';
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'

test('is the number initially 1', () => {
  const { getByText } = render(<App />)
  const h1 = getByText("1")
  expect(h1).toBeInTheDocument()
});

test('click on button and see if text is 10', () => {
  const { getByTestId, getByText, rerender, debug } = render(<App />)
  const button = getByTestId('button')
  fireEvent.click(button)
  expect(getByText('10')).toBeInTheDocument()
})