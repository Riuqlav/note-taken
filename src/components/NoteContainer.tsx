import React, { useState, useEffect } from 'react';
import Note from '../models/Note';
import { createNote, readNotes, updateNote, deleteNote } from '../services/noteService';
import NoteInput from './NoteInput';
import NoteList from './NoteList';

const NoteContainer: React.FC = () => {
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
      <NoteInput newNote={newNote} setNewNote={setNewNote} addNote={addNote} />
      <NoteList notes={notes} onEdit={editNote} onDelete={removeNote} />
    </div>
  );
};

export default NoteContainer;
