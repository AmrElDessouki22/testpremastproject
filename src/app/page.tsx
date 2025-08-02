'use client';

import { useNotes } from '../contexts/NotesContext';
import NoteInput from '../components/NoteInput';
import NotesList from '../components/NotesList';

export default function HomePage() {
  const { notes } = useNotes();

  return (
    <main className="container">
      <h1>Notes</h1>
      <NoteInput />
      <NotesList notes={notes} />
    </main>
  );
}
