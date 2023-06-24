import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MovieSearchApp link', () => {
  render(<App />);
  const linkElement = screen.getByText(/ MovieSearchApp /i);
  expect(linkElement).toBeInTheDocument();
});
