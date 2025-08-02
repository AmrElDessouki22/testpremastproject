import { NoteList } from '../components/features/NoteList';

export default function HomePage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">My Notes</h1>
      <NoteList />
    </main>
  );
}