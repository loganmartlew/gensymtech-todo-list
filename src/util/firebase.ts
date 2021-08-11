import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';
import { firebaseConfig } from '../config';

const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export const todosRef = collection(firestore, 'todos');
