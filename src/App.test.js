import { render, screen } from '@testing-library/react';
import { App, addiere } from './App';

/*
test('renders learn react link', () => {
  render(<App />);
  const element = screen.getByText("Learn React");
  expect(element).toBeInTheDocument();
});*/

test('function add', () => {
  expect(addiere(2,6)).toBe(8)
});