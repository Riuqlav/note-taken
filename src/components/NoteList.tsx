import React from 'react';
import NoteCard from './NoteCard';
import Note from '../models/Note';

interface NoteListProps {
  notes: Note[];
  onEdit: (note: Note) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
}

const NoteList: React.FC<NoteListProps> = ({ notes, onEdit, onDelete }) => {
  return (
    <div>
      {notes.map((note) => (
        <NoteCard 
          key={note.id} 
          note={note} 
          onEdit={onEdit} 
          onDelete={onDelete} 
        />
      ))}
    </div>
  );
};

export default NoteList;
