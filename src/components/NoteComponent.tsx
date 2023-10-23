import React, { useState, useEffect } from 'react';
import Note from '../models/Note';
import { createNote, readNotes, updateNote, deleteNote } from '../services/noteService';
import NoteCard from './NoteCard';

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
      const updatedNoteData = { ...note, title: updatedTitle, content: updatedContent };
      await updateNote(note.id, updatedNoteData);
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
      {notes.map((note) => (
        <NoteCard 
          key={note.id} 
          note={note} 
          onEdit={editNote} 
          onDelete={removeNote} 
        />
      ))}
    </div>
  );
};

export default NoteComponent;
