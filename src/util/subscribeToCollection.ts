import {
  CollectionReference,
  DocumentData,
  onSnapshot,
  QuerySnapshot,
} from 'firebase/firestore';

const getTodos = (
  collectionRef: CollectionReference,
  callback: (snapshot: QuerySnapshot<DocumentData>) => void
) => {
  const unsub = onSnapshot(collectionRef, callback);

  return unsub;
};

export default getTodos;
