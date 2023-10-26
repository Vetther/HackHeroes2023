import Providers from "@/components/providers"
import { DM_Sans } from "next/font/google"

import "./globals.css"

const dm_sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pl" className={`${dm_sans.className}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}

export default RootLayout
