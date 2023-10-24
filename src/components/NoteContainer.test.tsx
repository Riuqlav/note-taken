import { render, fireEvent } from '@testing-library/react';
import NoteContainer from './NoteContainer';
import { createNote, readNotes, updateNote, deleteNote } from '../services/noteService';

jest.mock('../services/noteService', () => ({
  createNote: jest.fn(),
  readNotes: jest.fn(),
  updateNote: jest.fn(),
  deleteNote: jest.fn(),
}));

describe('NoteContainer', () => {
  beforeEach(() => {
    (readNotes as jest.Mock).mockResolvedValue([]);
    (createNote as jest.Mock).mockResolvedValue('newId');
    (updateNote as jest.Mock).mockResolvedValue(true);
    (deleteNote as jest.Mock).mockResolvedValue(true);
  });

  test('renders and interacts', async () => {
    const { getByLabelText, getByText } = render(<NoteContainer />);
    
    // Test readNotes
    expect(readNotes).toHaveBeenCalled();
    
    // Test createNote
    fireEvent.change(getByLabelText('Note Input Label'), { target: { value: 'New Note' } });
    fireEvent.click(getByText('Add Note'));
    expect(createNote).toHaveBeenCalled();

    // Test updateNote
    fireEvent.click(getByText('Edit Note'));
    expect(updateNote).toHaveBeenCalled();
    
    // Test deleteNote
    fireEvent.click(getByText('Delete Note'));
    expect(deleteNote).toHaveBeenCalled();
  });
});
