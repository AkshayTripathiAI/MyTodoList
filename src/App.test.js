import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  localStorage.clear();
});

test('adds a todo, marks it done and deletes it', () => {
  render(<App />);
  expect(screen.getByText(/no todos yet/i)).toBeInTheDocument();

  fireEvent.change(screen.getByLabelText(/title/i), { target: { value: 'Write tests' } });
  fireEvent.click(screen.getByRole('button', { name: /add todo/i }));
  expect(screen.getByText('Write tests')).toBeInTheDocument();
  expect(screen.getByText(/0 of 1 done/i)).toBeInTheDocument();

  fireEvent.click(screen.getByRole('checkbox'));
  expect(screen.getByText(/1 of 1 done/i)).toBeInTheDocument();
  expect(JSON.parse(localStorage.getItem('todos'))[0].done).toBe(true);

  fireEvent.click(screen.getByRole('button', { name: /delete/i }));
  expect(screen.queryByText('Write tests')).not.toBeInTheDocument();
});

test('requires a title', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: /add todo/i }));
  expect(screen.getByText(/please give your todo a title/i)).toBeInTheDocument();
});
