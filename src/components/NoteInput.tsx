'use client';

import { useState } from 'react';
import { useNotes } from '../contexts/NotesContext';

export default function NoteInput() {
  const [note, setNote] = useState('');
  const { addNote } = useNotes();

  const handleAddNote = () => {
    if (note.trim() === '') return;
    addNote({ content: note });
    setNote('');
  };

  return (
    <div className="note-input">
      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Add a new note"
      />
      <button onClick={handleAddNote}>Add Note</button>
    </div>
  );
}
