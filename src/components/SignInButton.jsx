import { useMutation } from '@tanstack/react-query';
import api from '../api/api';

function SignInButton() {
  const { mutateAsync: signIn } = useMutation({
    mutationFn: () => api.user.signIn(),
  });

  const handleClick = () => {
    signIn().catch((e) => console.log(e));
  };

  return (
    <button
      onClick={handleClick}
      className="bg-darkgray py-2 px-3 rounded text-white hover:opacity-80"
    >
      LOGIN
    </button>
  );
}

export default SignInButton;
