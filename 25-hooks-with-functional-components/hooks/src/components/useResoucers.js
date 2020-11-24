import { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = resource => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `http://jsonplaceholder.typicode.com/${resource}`
      );

      setResources(res.data);
    })(resource);
  }, [resource]);

  return resources;
};

export default useResources;
