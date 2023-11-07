"use client"

import { Provider as JotaiProvider } from "jotai"
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <JotaiProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </JotaiProvider>
  )
}

export default Providers
