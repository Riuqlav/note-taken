import React from 'react';
import Note from '../models/Note';

interface NoteInputProps {
  newNote: Omit<Note, 'id'>;
  setNewNote: React.Dispatch<React.SetStateAction<Omit<Note, 'id'>>>;
  addNote: () => Promise<void>;
}

const NoteInput: React.FC<NoteInputProps> = ({ newNote, setNewNote, addNote }) => {
  return (
    <div className="mb-4">
      <input 
        className="border p-2 rounded" 
        placeholder="Title" 
        value={newNote.title} 
        onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
      />
      <input 
        className="border p-2 rounded ml-2" 
        placeholder="Content" 
        value={newNote.content} 
        onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
      />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2" onClick={addNote}>
        Add Note
      </button>
    </div>
  );
};

export default NoteInput;
