'use client';

import React, { useEffect } from 'react';

const page = () => {
  useEffect(() => {
    localStorage.setItem('lame', 'asd');
  }, []);
  return <div>page</div>;
};

export default page;
