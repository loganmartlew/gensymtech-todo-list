import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc } from 'firebase/firestore';
import { firebaseConfig } from '../config';

const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export const todosRef = collection(firestore, 'todos');

export const getTodoRefById = (todoId: string) => {
  const todoRef = doc(firestore, todosRef.id, todoId);

  return todoRef;
};
