import { FC } from 'react';
import useAuth from '../../hooks/useAuth';

interface Props {
  openAddModal: () => void;
}

const Header: FC<Props> = ({ openAddModal }) => {
  const { signIn, signOut, user } = useAuth();

  return (
    <header>
      <button onClick={openAddModal}>New Todo</button>
      {user ? (
        <button onClick={signOut}>Sign Out</button>
      ) : (
        <button onClick={signIn}>Sign In</button>
      )}
    </header>
  );
};

export default Header;
