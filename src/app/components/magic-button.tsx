'use client';

import React, { useEffect, useState } from 'react';
import Button from './button';

export interface MagicButtonProps {
  children: React.ReactNode;
}

export default function MagicButton() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 2) {
      throw new Error('Magic');
    }
  }, [count]);

  return (
    <>
      <Button onClick={() => setCount((prev) => prev + 1)}>Magic Button</Button>
    </>
  );
}
