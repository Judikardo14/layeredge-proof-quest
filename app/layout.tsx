import './global.css';

export const metadata = {
  title: 'LayerEdge Proof Quest',
  description: 'Experience LayerEdge’s cutting-edge decentralized verification technology',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" />
      </head>
      <body>{children}</body>
    </html>
  );
}