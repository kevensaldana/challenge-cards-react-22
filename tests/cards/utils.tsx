import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import CardsView from "../../src/pages/cards/CardsView";
import { CardsProvider } from "../../src/pages/cards/CardsContext";
import { AuthProvider } from "../../src/contexts";
import { QueryClient, QueryClientProvider } from "react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 0,
      staleTime: 5000,
      retryOnMount: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});

export const createWrapper = () =>
  render(
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <CardsProvider>
          <CardsView />
        </CardsProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
