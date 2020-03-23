import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test.only('renders the header', () => {

  // Given
  render(<App />);

  // When
  const header = screen.getByTestId('header');

  // Then
  expect(header).toBeInTheDocument();
});

test.only('renders the delivery list', () => {

  // Given
  render(<App />);

  // When
  const deliveryList = screen.getByTestId('delivery-list-container');

  // Then
  expect(deliveryList).toBeInTheDocument();
});
