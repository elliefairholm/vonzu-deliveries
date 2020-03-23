import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from '../../../App';



test('shows details when id clicked', () => {

  //Given
  render(<App />);

  //When
  fireEvent.click(screen.getAllByTestId('delivery-id-container')[0])

  // Then
  expect(screen.getByText('Schedule:')).toBeInTheDocument();

});

test('arrrow flips when id clicked', () => {

  //Given
  render(<App />);

  //When
  fireEvent.click(screen.getAllByTestId('delivery-id-container')[0])

  // Then
  expect(screen.getAllByTestId('delivery-arrow')[0]).toHaveClass('up')

});