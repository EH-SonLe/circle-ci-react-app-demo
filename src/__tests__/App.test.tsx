import { describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from '../App.tsx';

describe('App', () => {
  it('should render heading 1', async () => {
    render(<App />);

    expect(screen.queryByText('Vite + React')).toBeInTheDocument();
  });
});
