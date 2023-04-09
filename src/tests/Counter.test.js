import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  expect(screen.getByText(/Counter/i)).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  expect(screen.getByText(/0/i)).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  const incrementButton = screen.getByRole('button', { name: /\+/i })
  fireEvent.click(incrementButton)
  expect(screen.getByText(/1/i)).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  const decrementButton = screen.getByRole('button', { name: /\-/i })
  fireEvent.click(decrementButton)
  expect(screen.getByText(/-1/i)).toBeInTheDocument();
});
