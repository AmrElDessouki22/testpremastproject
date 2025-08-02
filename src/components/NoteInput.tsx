'use client';

import { useState, useContext } from 'react';
import { NotesContext } from '../context/NotesContext';

export default function NoteInput() {
  const [note, setNote] = useState('');
  const { addNote } = useContext(NotesContext);

  const handleAddNote = () => {
    if (note.trim() === '') return;
    addNote(note);
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