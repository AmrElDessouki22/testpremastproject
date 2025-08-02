'use client';

import { Note } from '../../types';

interface NoteItemProps {
  note: Note;
}

export default function NoteItem({ note }: NoteItemProps) {
  return (
    <div className="border p-4 mb-4">
      <h2 className="text-xl font-bold">{note.title}</h2>
      <p>{note.content}</p>
    </div>
  );
}