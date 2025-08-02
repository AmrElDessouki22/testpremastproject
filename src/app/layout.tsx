import '../globals.css';
import { ReactNode } from 'react';
import { NotesProvider } from '../contexts/NotesContext';

export const metadata = {
  title: 'Note App',
  description: 'A simple note-taking application.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NotesProvider>
          {children}
        </NotesProvider>
      </body>
    </html>
  );
}