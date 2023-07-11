import { describe, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import App from '../App.tsx';

describe('App', () => {
  it('should render heading 1', () => {
    render(<App />);

    expect(screen.queryByText('Vite + React')).toBeInTheDocument();
  });

  it('should change value when clicking on button', async () => {
    render(<App />);

    const count = screen.getByText(/count/i);
    fireEvent.click(count);

    expect(await screen.findByText(/count is 1/i)).toBeInTheDocument();
  });
});
