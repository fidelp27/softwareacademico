import { useEffect, useState } from 'react';

export const useResize = () => {
  const [isPhone, setIsPhone] = useState(
    window.innerWidth < 640 ? true : false
  );
  const handleResize = () => {
    if (window.innerWidth < 640) {
      setIsPhone(true);
    } else {
      setIsPhone(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  return { isPhone };
};
