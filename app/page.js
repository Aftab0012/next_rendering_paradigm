'use client';

import React, { useEffect } from 'react';

const page = () => {
  useEffect(() => {
    localStorage.setItem('lame', 'asd');
  }, []);
  window.localStorage.foo = 'bar';
  return <div>page</div>;
};

export default page;
