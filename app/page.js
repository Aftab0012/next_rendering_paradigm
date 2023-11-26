'use client';

import React, { useEffect } from 'react';

const page = () => {
  const persistLogin = () => {
    localStorage.setItem('name', 'john doe');
  };

  return (
    <div>
      <button onClick={persistLogin}>add</button>
    </div>
  );
};

export default page;
