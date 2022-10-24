import { render, screen } from '@testing-library/react';
import App from './App';
import GetRandomQuotes from './GetRandomQoutes';

test('renders random quoutes', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
