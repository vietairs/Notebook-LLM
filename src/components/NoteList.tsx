import React from 'react';
import { Plus } from 'lucide-react';

interface Note {
  id: number;
  title: string;
  content: string;
  citations: number;
}

interface NoteListProps {
  selectedSource: string | null;
  selectedNote: Note | null;
  setSelectedNote: (note: Note | null) => void;
}

const NoteList: React.FC<NoteListProps> = ({ selectedSource, selectedNote, setSelectedNote }) => {
  const notes = [
    {
      id: 1,
      title: 'Diego - Literature Review Structure',
      content: `Diego Lozano-Claros structures his General Literature Review in Chapter 2 of his Ph.D. thesis to provide the reader with the necessary background information to understand his research on image-based plant phenotyping. Here's how he constructs his review:`,
      citations: 3
    },
    {
      id: 2,
      title: 'Diego - Introduction Structure',
      content: `Diego Lozano-Claros emphasizes the importance of plant phenotyping in plant science and introduces the reader to his research in the introduction of his Ph.D. thesis. Here's how he constructs his introduction:`,
      citations: 10
    },
    {
      id: 3,
      title: 'Diego - Thesis Briefing',
      content: 'Briefing Document: High-Throughput Plant Phenotyping in Arabidopsis',
      citations: 0
    }
  ];

  return (
    <div className="w-1/3 bg-gray-800 border-r border-gray-700 overflow-y-auto">
      <div className="p-4 border-b border-gray-700 flex justify-between items-center">
        <button className="text-blue-500 flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Add note</span>
        </button>
        <button className="text-gray-400">Select all</button>
      </div>
      <ul>
        {notes.map((note) => (
          <li
            key={note.id}
            className={`border-b border-gray-700 p-4 hover:bg-gray-700 cursor-pointer ${
              selectedNote?.id === note.id ? 'bg-gray-700' : ''
            }`}
            onClick={() => setSelectedNote(note)}
          >
            <h3 className="text-blue-500 font-semibold mb-2">{note.title}</h3>
            <p className="text-sm text-gray-400 mb-2">{note.content.substring(0, 100)}...</p>
            <span className="text-xs text-gray-500">{note.citations} citations</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;