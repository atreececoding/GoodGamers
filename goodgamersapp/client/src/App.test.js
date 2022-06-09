import { render, screen } from '@testing-library/react';
import App from './App';

/*
* This function renders the main app component to the browser
*/
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
