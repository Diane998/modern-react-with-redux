import { useState, useEffect } from 'react';

const useLocation = () => {
  const [lat, setLat] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      pos => setLat(pos.coords.latitude),
      err => setErrorMsg(err.message)
    );
  }, []);

  return [lat, errorMsg];
};

export default useLocation;
