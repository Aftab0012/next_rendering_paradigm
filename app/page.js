'use client';

import React, { useEffect } from 'react';

const page = () => {
  const persistLogin = () => {
    localStorage.setItem('name', 'john doe');
  };

  useEffect(() => {
    const localValue = localStorage.getItem('name');
    console.log(localValue);
  }, []);

  return (
    <div>
      <button onClick={persistLogin}>add</button>
    </div>
  );
};

export default page;
