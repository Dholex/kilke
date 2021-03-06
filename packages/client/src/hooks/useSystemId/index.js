import { useContext } from 'react';

import SystemIdContext from '@/components/SystemIdContext';

export const useSystemId = () => {
  const systemId = useContext(SystemIdContext);

  return systemId;
};

export default useSystemId;
