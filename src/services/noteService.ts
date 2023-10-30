import { db } from '../firebase';
import { addDoc, collection, updateDoc, deleteDoc, doc, getDocs } from 'firebase/firestore';
import Note from '../models/Note'

export const createNote = async (note: Omit<Note, 'id'>) => {
  const now = new Date().toISOString();
  const newNote = {
    ...note,
    createdAt: now,
    updatedAt: now,
  };

  const docRef = await addDoc(collection(db, 'notes'), newNote);
  return docRef.id; // This will be the ID of the newly created note to fix the first not Id missing 
};


export const readNotes = async (): Promise<Note[]> => {
  const querySnapshot = await getDocs(collection(db, 'notes'));
  return querySnapshot.docs.map((doc) => {
    const data = doc.data();
    let createdAt = data.createdAt;
    let updatedAt = data.updatedAt;

    if (createdAt?.toDate) {
      createdAt = createdAt.toDate();
    }

    if (updatedAt?.toDate) {
      updatedAt = updatedAt.toDate();
    }

    return {
      id: doc.id,
      title: data.title,
      content: data.content,
      createdAt: createdAt,
      updatedAt: updatedAt
    }
  });
};


export const updateNote = async (id: string, updatedNote: Omit<Note, 'id'>) => {
  const noteRef = doc(db, 'notes', id);
  await updateDoc(noteRef, updatedNote);
};

export const deleteNote = async (id: string) => {
  const noteRef = doc(db, 'notes', id);
  await deleteDoc(noteRef);
};
