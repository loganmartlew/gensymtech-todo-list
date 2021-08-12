import { User } from 'firebase/auth';
import { getAdmins } from './firebase';

const isUserAdmin = async (user: User) => {
  const admins = await getAdmins();

  const isAdmin = admins.reduce((acc, curr) => {
    if (user.uid === curr.uid) return true;

    return acc;
  }, false);

  return isAdmin;
};

export default isUserAdmin;
