import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NoteInput from './NoteInput';
import Note from '../models/Note';

test('displays NoteInput', () => {
  const note: Omit<Note, 'id'> = {title: '', content: '', createdAt: '', updatedAt: ''};
  const mockAddNote = jest.fn();
  const { getByText } = render(<NoteInput newNote={note} setNewNote={() => {}} addNote={mockAddNote} />);
  
  fireEvent.click(getByText('Add Note'));
  expect(mockAddNote).toHaveBeenCalled();
});
