'use client'; // make sure this is a client component

import React from 'react';
import { signOut } from 'next-auth/react';

const LogoutButton = () => {
  const handleLogout = async (e) => {
    e.preventDefault(); // prevent page refresh
    await signOut({ callbackUrl: '/login' }); // optional: redirect after logout
  };

  return (
    <button
      className="bg-red-500 m-2 p-2 text-white rounded"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
