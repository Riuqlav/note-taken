import { render, fireEvent } from '@testing-library/react';
import NoteInput from './NoteInput';

describe('NoteInput', () => {
  const mockSetNewNote = jest.fn();
  const mockAddNote = jest.fn();
  const newNote = {
    title: '',
    content: '',
    createdAt: '',
    updatedAt: ''
  };

  test('renders and interacts', () => {
    const { getByPlaceholderText, getByText } = render(
      <NoteInput newNote={newNote} setNewNote={mockSetNewNote} addNote={mockAddNote} />
    );

    // Test input change for title
    const titleInput = getByPlaceholderText('Title');
    fireEvent.change(titleInput, { target: { value: 'New Title' } });
    expect(mockSetNewNote).toHaveBeenCalledWith({ ...newNote, title: 'New Title' });

    // Test input change for content
    const contentInput = getByPlaceholderText('Content');
    fireEvent.change(contentInput, { target: { value: 'New Content' } });
    expect(mockSetNewNote).toHaveBeenCalledWith({ ...newNote, content: 'New Content' });

    // Test addNote
    fireEvent.click(getByText('Add Note'));
    expect(mockAddNote).toHaveBeenCalled();
  });
});
