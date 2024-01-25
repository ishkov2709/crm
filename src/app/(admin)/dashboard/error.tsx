'use client';

import Button from '@/app/components/button';

export interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div>
      <h1 className="text-xl text-center my-6">
        Something went wrong 😥. {error.message}
      </h1>

      <div className="flex justify-center">
        <Button onClick={() => reset()}>Reset</Button>
      </div>
    </div>
  );
}
