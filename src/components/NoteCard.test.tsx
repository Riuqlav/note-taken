import React from 'react';
import { render } from '@testing-library/react';
import NoteCard from './NoteCard';
import Note from '../models/Note';

test('displays NoteCard', () => {
  const note: Note = {
    id: '1',
    title: 'Test',
    content: 'Test content',
    createdAt: '2022-01-01T12:00:00Z',
    updatedAt: '2022-01-01T12:00:00Z',
  };
  const mockEdit = jest.fn();
  const mockDelete = jest.fn();

  const { getByText } = render(
    <NoteCard note={note} onEdit={mockEdit} onDelete={mockDelete} />
  );

  expect(getByText('Test')).toBeDefined();
});
