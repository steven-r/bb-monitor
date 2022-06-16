import React from 'react';
import { cleanup, getByText, render, waitFor } from '@testing-library/react';
import App from './app';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ThemeProvider from "./redux/providers/theme-provider";
import PersistProvider from "./redux/providers/persist-provider";

describe('App', () => {
  afterEach(() => {
    delete global['fetch'];
    cleanup();
  });

  it('should render successfully', async () => {
    global['fetch'] = jest.fn().mockResolvedValueOnce({
      json: () => ({
        message: 'my message',
      }),
    });

    const { baseElement } = render(<Provider store={store}>
      <PersistProvider>
          <ThemeProvider>
              <App />
          </ThemeProvider>
      </PersistProvider>
  </Provider>);
    await waitFor(() => getByText(baseElement, 'my message'));
  });
});
