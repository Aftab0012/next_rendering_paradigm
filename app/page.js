'use client';

import React, { useEffect } from 'react';

const page = () => {
  localStorage.setItem('lame', 'asd');
  useEffect(() => {}, []);
  return <div>page</div>;
};

export default page;
