'use client';

import React, { useEffect } from 'react';

const page = () => {
  const persistLogin = () => {
    localStorage.setItem('name', 'john doe');
  };

  const localValue = localStorage.getItem('name');

  return (
    <div>
      <button onClick={persistLogin}>add</button>
    </div>
  );
};

export default page;
