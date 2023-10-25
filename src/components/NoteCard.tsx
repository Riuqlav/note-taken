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
  const userTimezoneOffset = date.getTimezoneOffset() * 60000;
  const localISOTime = new Date(date.getTime() - userTimezoneOffset).toISOString();
  const [year, month, day, time] = localISOTime.match(/(\d{4})-(\d{2})-(\d{2})T(\d{2}:\d{2})/)?.slice(1) || [];
  return `Created: ${day}-${month}-${year} at ${time}`;
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
        <span> {formatDate(note.createdAt)}</span>
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

