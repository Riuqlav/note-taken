import React from 'react';
import Note from '../models/Note';
import NoteCard from './NoteCard'; 

interface NoteListProps {
  notes: Note[];
  onEdit: (note: Note) => void;
  onDelete: (id: string) => void;
}

const NoteList: React.FC<NoteListProps> = ({ notes, onEdit, onDelete }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};


export default NoteList;
