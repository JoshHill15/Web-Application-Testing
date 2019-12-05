import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

const add = (a, b) => a + b

test('renders balls', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/balls/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders strikes", () => {
  const container = render(<App />)
  let checker = container.getByText(/strikes/i)
  expect(checker).toBeInTheDocument()
})

test("adds", () => {
  expect(add(2,2)).toBe(4)
  expect(add(6,2)).toBe(8)

})