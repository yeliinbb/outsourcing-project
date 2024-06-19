import { useMutation } from '@tanstack/react-query';
import api from '../api/api';

function SignOutButton() {
  const { mutateAsync: signOut } = useMutation({
    mutationFn: () => api.user.signOut(),
  });

  const handleClick = () => {
    signOut().catch((e) => console.error(e));
  };

  return (
    <button
      onClick={handleClick}
      className="bg-darkgray py-2 px-3 rounded text-white hover:opacity-80"
    >
      LOGOUT
    </button>
  );
}

export default SignOutButton;
