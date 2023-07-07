import { describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from '../App.tsx';

describe('App', () => {
  it('should render heading 1', () => {
    render(<App />);

    expect(screen.queryByText('Vite + React')).toBeInTheDocument();
  });
});
