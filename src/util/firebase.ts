import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  doc,
  query,
  getDocs,
} from 'firebase/firestore';
import {
  getAuth,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  NextOrObserver,
  User,
} from 'firebase/auth';
import { firebaseConfig } from '../config';

const app = initializeApp(firebaseConfig);

// Firestore
const firestore = getFirestore(app);

export const todosRef = collection(firestore, 'todos');

export const getTodoRefById = (todoId: string) => {
  const todoRef = doc(firestore, todosRef.id, todoId);

  return todoRef;
};

export const adminsRef = collection(firestore, 'admins');

export const getAdmins = async () => {
  const q = query(adminsRef);

  const snapshot = await getDocs(q);

  const admins = snapshot.docs.map(doc => doc.data());

  return admins;
};

export const getAdminName = async (uid: string) => {
  const admins = await getAdmins();

  const admin = admins.find(admin => admin.uid === uid);

  if (!admin) return '';

  return admin.name;
};

// Auth
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const logIn = () => signInWithRedirect(auth, provider);

export const logOut = () => signOut(auth);

export const subscribeToUser = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback);
