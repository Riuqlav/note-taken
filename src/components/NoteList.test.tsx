import React from 'react';
import { render } from '@testing-library/react';
import NoteList from './NoteList';
import Note from '../models/Note';

describe('NoteList', () => {
  const mockEdit = jest.fn();
  const mockDelete = jest.fn();
  const notes: Note[] = [
    { id: '1', title: 'Note 1', content: 'Content 1', createdAt: 'date1', updatedAt: 'date1' },
    { id: '2', title: 'Note 2', content: 'Content 2', createdAt: 'date2', updatedAt: 'date2' }
  ];

  test('renders notes', () => {
    const { getAllByText } = render(<NoteList notes={notes} onEdit={mockEdit} onDelete={mockDelete} />);

    // Check if titles are rendered
    const renderedTitles = getAllByText(/Note \d/);
    expect(renderedTitles.length).toBe(2);
    expect(renderedTitles[0].textContent).toBe('Note 1');
    expect(renderedTitles[1].textContent).toBe('Note 2');
  });
});
