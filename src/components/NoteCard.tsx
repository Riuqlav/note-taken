import React from 'react';
import Note from '../models/Note';
import { MdEdit, MdDelete } from 'react-icons/md';

interface NoteCardProps {
  note: Note;
  onEdit: (note: Note) => void;
  onDelete: (id: string) => void;
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const formattedDate = date.toISOString().slice(0, 16).replace('T', ' at ');
  return formattedDate;
};

const NoteCard: React.FC<NoteCardProps> = ({ note, onEdit, onDelete }) => {
  return (
    <div className="border p-4 rounded bg-white">
      <div className="flex justify-end">
        <button className="text-blue-500" onClick={() => onEdit(note)}>
          <MdEdit color="blue" />
        </button>
      </div>
      <h2 className="text-xl font-semibold">{note.title}</h2>
      <p className="text-gray-600">{note.content}</p>
      <div className="text-sm text-gray-400">
        <span>Created: {formatDate(note.createdAt)}</span>
      </div>
      <div className="flex justify-end">
        <button className="text-red-500" onClick={() => onDelete(note.id)}>
          <MdDelete color="red" />
        </button>
      </div>
    </div>
  );
};

export default NoteCard;

