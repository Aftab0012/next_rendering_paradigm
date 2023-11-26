'use client';

import React, { useEffect } from 'react';

const page = () => {
  useEffect(() => {
    persistLogin;
  }, []);
  const persistLogin = () => {
    localStorage.setItem('name', 'john doe');
  };
  return <div>page</div>;
};

export default page;
