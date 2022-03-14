import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import DaBabyBox from './components';

test('Ensure\'s App loads primary component', () => {
  render(<App />);

  const app = screen.getByTestId('app-project');
  const dababy = screen.getByTestId('da-baby-box');

  expect(app).toContainElement(dababy);
});


test('Tests if image loads invisibly', () => {
  render(<App />);

  expect(screen.getByTestId('da-img')).not.toBeVisible();
});


test('Tests onclick functionality', () => {
  render(<App />);

  const button = screen.getByTestId('btn-Toggle');
  fireEvent.click(button);

  expect(screen.getByTestId('da-img')).toBeVisible();
});