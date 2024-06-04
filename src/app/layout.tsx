import type { Metadata } from 'next';
import { Providers } from './providers';
import './globals.css';

export const metadata: Metadata = {
    title: 'Dylan CLERCKX - Portfolio',
    description: "Dylan CLERCKX's portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark scroll-smooth">
            <body className="m-auto">
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
