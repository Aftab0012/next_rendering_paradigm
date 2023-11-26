'use client';

import React, { useEffect } from 'react';

const page = () => {
  localStorage.setItem('lame', 'asd');
  useEffect(() => {}, []);
  window.localStorage.foo = 'bar';
  return <div>page</div>;
};

export default page;
