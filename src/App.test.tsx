import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App renders header and table', () => {

  beforeAll(() => {
    render(<App />)
  })

  test('rendered header', () => {
    const title = screen.getByText(/MCU Info/i);
    expect(title).toBeInTheDocument();
  });
})

