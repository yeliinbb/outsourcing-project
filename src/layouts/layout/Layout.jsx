import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import '../../index.css';
import supabase from '../../supabase/supabaseClient';
import { login, logout } from '../../useLoginStore';
import NavBar from '../common/NavBar';

const Layout = () => {
  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      switch (event) {
        case 'SIGNED_OUT':
          logout();
          break;
        case 'SIGNED_IN':
          login(session.access_token, session.user);
          break;
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
