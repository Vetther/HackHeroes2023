"use client"

import { Provider as JotaiProvider } from "jotai"

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <JotaiProvider>{children}</JotaiProvider>
}

export default Providers
