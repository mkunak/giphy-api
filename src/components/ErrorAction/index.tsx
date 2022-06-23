import { FC, useState } from 'react';

const ErrorAction: FC = () => {
  const [hasError, setHasError] = useState(false);

  if (hasError) throw new Error('I am error!');

  return (
    <button
      name="Get Error"
      onClick={() => setHasError(true)}
    />
  );
};

export default ErrorAction;
