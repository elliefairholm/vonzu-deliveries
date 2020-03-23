import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from '../../../App';

test('when click sort, the elements are sorted', () => {

  //Given
  render(<App />);

  //When
  fireEvent.click(screen.getByTestId('sort'))

  // Then
  expect(screen.getAllByTestId('delivery-id')[0].textContent).toBe('00199825')
  expect(screen.getAllByTestId('delivery-id')[1].textContent).toBe('00199824')
  expect(screen.getAllByTestId('delivery-id')[2].textContent).toBe('00199823')
  expect(screen.getAllByTestId('delivery-id')[3].textContent).toBe('00199822')
  expect(screen.getAllByTestId('delivery-id')[4].textContent).toBe('00199828')
  expect(screen.getAllByTestId('delivery-id')[5].textContent).toBe('00199826')
  expect(screen.getAllByTestId('delivery-id')[6].textContent).toBe('00199827')
  expect(screen.getAllByTestId('delivery-id')[7].textContent).toBe('00199821')

});
