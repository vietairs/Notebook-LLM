import React, { useState } from 'react';
import { MessageSquare, Send } from 'lucide-react';

interface Note {
  id: number;
  title: string;
  content: string;
  citations: number;
}

interface ChatInterfaceProps {
  selectedNote: Note | null;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ selectedNote }) => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<{ role: 'user' | 'ai'; content: string }[]>([]);

  const handleSendMessage = () => {
    if (message.trim() === '') return;

    // Add user message to chat history
    setChatHistory([...chatHistory, { role: 'user', content: message }]);

    // TODO: Implement sending message to AI and receiving response
    console.log('Sending message:', message);

    // Simulate AI response (replace this with actual AI integration)
    setTimeout(() => {
      setChatHistory((prev) => [
        ...prev,
        { role: 'ai', content: `AI response to: "${message}"` },
      ]);
    }, 1000);

    setMessage('');
  };

  return (
    <div className="flex-1 flex flex-col">
      <div className="flex-1 p-4 overflow-y-auto">
        {selectedNote ? (
          <div className="bg-gray-700 p-4 rounded-lg mb-4">
            <h2 className="text-xl font-semibold mb-2">{selectedNote.title}</h2>
            <p className="text-gray-300">{selectedNote.content}</p>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            Select a note to start chatting
          </div>
        )}
        {chatHistory.map((msg, index) => (
          <div
            key={index}
            className={`mb-4 ${
              msg.role === 'user' ? 'text-right' : 'text-left'
            }`}
          >
            <div
              className={`inline-block p-3 rounded-lg ${
                msg.role === 'user' ? 'bg-blue-500' : 'bg-gray-700'
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-700 p-4">
        <div className="flex items-center space-x-2 bg-gray-700 rounded-lg p-2">
          <MessageSquare className="h-5 w-5 text-gray-400" />
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask a question about your document..."
            className="flex-1 bg-transparent outline-none text-white"
            onKeyPress={(e) => {
              if (e.key === 'Enter') handleSendMessage();
            }}
          />
          <button
            onClick={handleSendMessage}
            className="text-blue-500 hover:text-blue-600"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-2">
          NotebookAI may still sometimes give inaccurate responses, so you may want to confirm any facts independently.
        </p>
      </div>
    </div>
  );
};

export default ChatInterface;