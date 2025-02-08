import "./globals.css";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="w-screen h-dvh flex items-center justify-center bg-slate-300">
                {children}
            </body>
        </html>
    );
}
