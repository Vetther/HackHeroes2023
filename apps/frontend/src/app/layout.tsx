import { DM_Sans } from "next/font/google";

import "./globals.css";
import Sidebar from "@/components/sidebar";

const dm_sans = DM_Sans({
    subsets: ["latin"],
    variable: "--font-dm-sans",
    display: "swap",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="pl" className={`${dm_sans.variable}`}>
            <body>{children}</body>
        </html>
    );
};

export default RootLayout;
