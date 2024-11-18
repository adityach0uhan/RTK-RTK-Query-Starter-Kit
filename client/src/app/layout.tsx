import './globals.css';
import StoreProvider from '@/provider/redux/StoreProvider';

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body suppressContentEditableWarning suppressHydrationWarning>
                <StoreProvider>{children}</StoreProvider>
            </body>
        </html>
    );
}
