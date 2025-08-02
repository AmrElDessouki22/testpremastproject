'use client';

import { useContext } from 'react';
import { NotesContext } from '../context/NotesContext';
import NoteInput from '../components/NoteInput';
import NotesList from '../components/NotesList';

export default function HomePage() {
  const { notes } = useContext(NotesContext);

  return (
    <main className="container">
      <h1>Notes</h1>
      <NoteInput />
      <NotesList notes={notes} />
    </main>
  );
}