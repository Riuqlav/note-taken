import { db } from '../firebase';
import { addDoc, collection, updateDoc, deleteDoc, doc, getDocs } from 'firebase/firestore';
import Note from '../models/Note'

export const createNote = async (note: Omit<Note, 'id'>) => { // Exclude 'id' since it will be generated
  await addDoc(collection(db, 'notes'), note);
};

export const readNotes = async (): Promise<Note[]> => {
  const querySnapshot = await getDocs(collection(db, 'notes'));
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
    createdAt: doc.data().createdAt?.toDate().toISOString(),
    updatedAt: doc.data().updatedAt?.toDate().toISOString()
  }) as Note);
};

export const updateNote = async (id: string, updatedNote: Omit<Note, 'id'>) => {
  const noteRef = doc(db, 'notes', id);
  await updateDoc(noteRef, updatedNote);
};

export const deleteNote = async (id: string) => {
  const noteRef = doc(db, 'notes', id);
  await deleteDoc(noteRef);
};
