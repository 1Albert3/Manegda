import { useEffect, useState } from 'react';

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="relative">
        <div className="w-20 h-20 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
        <div className="mt-4 text-center">
          <div className="w-16 h-16 mx-auto bg-blue-900 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg animate-pulse">
            LSM
          </div>
          <p className="mt-2 text-sm text-gray-600">Chargement...</p>
        </div>
      </div>
    </div>
  );
}
