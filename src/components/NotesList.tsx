'use client';

import { Note } from '../types';

interface NotesListProps {
  notes: Note[];
}

export default function NotesList({ notes }: NotesListProps) {
  return (
    <ul className="notes-list">
      {notes.map((note, index) => (
        <li key={index}>{note.content}</li>
      ))}
    </ul>
  );
}