import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Page from './Page';

describe('Page component', () => {
  it('performs a search and displays the results', async () => {
    jest.mock('./services/searchItems', () => jest.fn(() => Promise.resolve({ results: ['item1', 'item2'] })));

    render(<Page />);

    fireEvent.change(screen.getByPlaceholderText('Nunca dejes de buscar'), { target: { value: 'test query' } });
    fireEvent.submit(screen.getByRole('button', { name: 'Search' }));

    await waitFor(() => {
      expect(screen.getByText('item1')).toBeInTheDocument();
      expect(screen.getByText('item2')).toBeInTheDocument();
    });
  });
});
