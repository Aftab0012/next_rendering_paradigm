'use client';

import React, { useEffect } from 'react';

const page = () => {
  const persistLogin = () => {
    localStorage.setItem('name', 'john doe');
  };
  useEffect(() => {
    persistLogin();
  }, []);

  return <div>page</div>;
};

export default page;
