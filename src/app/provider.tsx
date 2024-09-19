import { ThemeProvider } from '@mui/material';
import { PropsWithChildren, useState } from 'react';
import defaultTheme from './theme';

import { SnackbarProvider } from 'notistack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function ReactQueryProvider({ children }: PropsWithChildren) {
  const [queryClient] = useState(new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default function Proivder({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <SnackbarProvider
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </SnackbarProvider>
    </ThemeProvider>
  );
}
