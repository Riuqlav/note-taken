import React, { useState, useEffect } from 'react';
import Note from '../models/Note';  // Replace with the actual path
import { createNote, readNotes, updateNote, deleteNote } from '../services/noteService';  // Replace with the actual path

const NoteComponent: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNote, setNewNote] = useState<Omit<Note, 'id'>>({ title: '', content: '', createdAt: '', updatedAt: '' });

  useEffect(() => {
    const fetchNotes = async () => {
      const allNotes = await readNotes();
      setNotes(allNotes);
    };

    fetchNotes();
  }, []);

  const addNote = async () => {
    if (!newNote.title || !newNote.content) {
      alert('Title and content are required.');
      return;
    }

    await createNote(newNote);
    setNewNote({ title: '', content: '', createdAt: '', updatedAt: '' });
    const allNotes = await readNotes();
    setNotes(allNotes);
  };

  const editNote = async (note: Note) => {
    const updatedTitle = prompt('New title:', note.title);
    const updatedContent = prompt('New content:', note.content);

    if (updatedTitle && updatedContent) {
      await updateNote(note.id, { ...note, title: updatedTitle, content: updatedContent });
      const allNotes = await readNotes();
      setNotes(allNotes);
    }
  };

  const removeNote = async (id: string) => {
    await deleteNote(id);
    const allNotes = await readNotes();
    setNotes(allNotes);
  };

  return (
    <div className="container mx-auto mt-4">
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
      <ul>
        {notes.map((note) => (
          <li key={note.id} className="mb-2">
            <span className="text-xl">{note.title}</span>
            <span className="ml-4">{note.content}</span>
            <button className="text-blue-500 hover:text-blue-700 ml-4" onClick={() => editNote(note)}>Edit</button>
            <button className="text-red-500 hover:text-red-700 ml-2" onClick={() => removeNote(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteComponent;
