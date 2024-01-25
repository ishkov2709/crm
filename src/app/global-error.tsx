'use client';

import Button from './components/button';

export interface GlobalErrorProps {
  error: Error;
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  return (
    <html>
      <body>
        <div>Something globally went wrong 😭. {error.message}</div>
        <Button onClick={() => reset()}>Reset</Button>
      </body>
    </html>
  );
}
