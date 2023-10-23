import React from 'react';
import Note from '../models/Note';

interface NoteCardProps {
  note: Note;
  onEdit: (note: Note) => void;
  onDelete: (id: string) => void;
}

const NoteCard: React.FC<NoteCardProps> = ({ note, onEdit, onDelete }) => {
  return (
    <div className="border p-4 rounded mb-2">
      <h2 className="text-xl">{note.title}</h2>
      <p className="text-sm mb-2">{note.content}</p>
      <div>
        <button className="text-blue-500 hover:text-blue-700" onClick={() => onEdit(note)}>Edit</button>
        <button className="text-red-500 hover:text-red-700 ml-2" onClick={() => onDelete(note.id)}>Delete</button>
      </div>
      <div className="text-gray-600 text-xs mt-2">
        Created: {note.createdAt} | Updated: {note.updatedAt}
      </div>
    </div>
  );
}

export default NoteCard;
