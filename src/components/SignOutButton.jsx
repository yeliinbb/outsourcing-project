import { useMutation } from '@tanstack/react-query';
import api from '../api/api';
import { getSession } from '../useLoginStore';

function SignOutButton() {
  const { user } = getSession();
  const { mutateAsync: signOut } = useMutation({
    mutationFn: () => api.user.signOut(),
  });

  const handleClick = () => {
    signOut().catch((e) => console.error(e));
  };

  return (
    <>
      {user.avatarImg ? (
        <span className="text-white flex flex-row items-center justify-center">
          <span className="text-5xl relative left-12 bottom-6 translate-y-3">
            🧢
          </span>
          <img src={user.avatarImg} className="w-10 rounded-full " />
          <span className="text-2xl">⚾</span>
        </span>
      ) : (
        ''
      )}
      <button
        onClick={handleClick}
        className="bg-darkgray py-2 px-3 rounded text-white hover:opacity-80"
      >
        LOGOUT
      </button>
    </>
  );
}

export default SignOutButton;
