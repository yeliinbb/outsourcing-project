import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useLoginStore = create(
  persist(
    () => ({
      isLoggedIn: false,
      user: null,
    }),
    {
      name: 'user-store',
    }
  )
);

export function login(user) {
  useLoginStore.setState({ isLoggedIn: true, user });
}

export function logout() {
  useLoginStore.setState({ isLoggedIn: false });
}

export function getSession() {
  return useLoginStore.getState();
}

export function useSession() {
  return useLoginStore();
}
