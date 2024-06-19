import { useCallback, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import '../../index.css';
import supabase from '../../supabase/supabaseClient';
import { login, logout } from '../../useLoginStore';
import NavBar from '../common/NavBar';

const EVENT_SIGNED_OUT = 'SIGNED_OUT';
const EVENT_SIGNED_IN = 'SIGNED_IN';

const Layout = () => {
  const getUser = useCallback((session) => {
    const { id, email, identities = [] } = session.user;
    return {
      id,
      email,
      avatarImg: identities[0]?.identity_data?.avatar_url,
    };
  }, []);

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      switch (event) {
        case EVENT_SIGNED_OUT:
          logout();
          break;
        case EVENT_SIGNED_IN: {
          const user = getUser(session);
          login(user);
          break;
        }
      }
    });
  }, []);

  return (
    <div className="flex h-screen flex-row bg-bgGray">
      <NavBar />
      <div className="flex-1 bg-bgGray overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
