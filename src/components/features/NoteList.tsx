'use client';

import { useNotes } from '../../contexts/NotesContext';
import NoteItem from './NoteItem';

export const NoteList = () => {
  const { notes } = useNotes();

  return (
    <div>
      {notes.map(note => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
};
