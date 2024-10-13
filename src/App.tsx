import React, { useState } from 'react';
import { Book, Settings, Share, User } from 'lucide-react';
import Sidebar from './components/Sidebar';
import NoteList from './components/NoteList';
import ChatInterface from './components/ChatInterface';

interface Note {
  id: number;
  title: string;
  content: string;
  citations: number;
}

function App() {
  const [selectedSource, setSelectedSource] = useState<string | null>(null);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar selectedSource={selectedSource} setSelectedSource={setSelectedSource} />
      <div className="flex-1 flex flex-col">
        <header className="bg-gray-800 p-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Book className="h-6 w-6" />
            <h1 className="text-xl font-semibold">NotebookAI</h1>
            <span className="bg-blue-500 text-xs px-2 py-1 rounded">EXPERIMENTAL</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full flex items-center space-x-2">
              <Share className="h-4 w-4" />
              <span>Share</span>
            </button>
            <Settings className="h-6 w-6 cursor-pointer" />
            <User className="h-6 w-6 cursor-pointer" />
          </div>
        </header>
        <main className="flex-1 flex overflow-hidden">
          <NoteList selectedSource={selectedSource} selectedNote={selectedNote} setSelectedNote={setSelectedNote} />
          <ChatInterface selectedNote={selectedNote} />
        </main>
      </div>
    </div>
  );
}

export default App;